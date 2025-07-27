const { execSync } = require('child_process');
const yargs = require('yargs');
const process = require('process');
const os = require('os');
const REVIEW_TYPE = {
  CODE_INSPECTION_ONLY: 'code_inspection_only',
  ADD_OR_MODIFIED_UNIT_TEST: 'add_or_modified_unit_test',
  RUN_REPOSITORY: 'run_repository',
  UNIT_TEST_AND_RUN_REPOSITORY: 'unit_test_and_run_repository',
};
const COMMITS_NOT_ALLOWED = ['style', 'merge'];
const RG_REMOVE_BACKTICK = /`/g;

function copyToClipboard(text) {
  const currentSystem = os.platform();
  const MESSAGE_SUCCES = `
=======================================
   PR Template Copied to clipboard
=======================================
        `;
  try {
    switch (currentSystem) {
      case 'darwin':
        execSync(`echo "${text}" | pbcopy`);
        break;
      case 'linux':
        execSync(`echo "${text}" | xclip -selection clipboard`);
        break;
      case 'win32':
        execSync(`echo "${text}" | clip`);
        break;
      default:
        throw new Error(
          'Operating system not supported for copying to clipboard.',
        );
    }
    console.log(MESSAGE_SUCCES);
  } catch (error) {
    console.error('Error copying to clipboard:', error.message);
    process.exit(1);
  }
}

function getCurrentBranch() {
  try {
    const branch = execSync('git symbolic-ref --short HEAD').toString().trim();
    return `${branch}`;
  } catch (error) {
    console.error('Error getting current branch :', error.message);
    process.exit(1);
  }
}

function getCommitsDiff({ currentBranch, branchToMerge }) {
  try {
    const diff = execSync(
      `git log ${branchToMerge}..${currentBranch} --pretty=format:"%s"`,
    )
      .toString()
      .trim();
    const commitsDiff = `${diff}`.replace(RG_REMOVE_BACKTICK, "'").split('\n');
    const validCommits = commitsDiff.filter(e => {
      const commit = e.toLowerCase();
      const isValidCommit = !COMMITS_NOT_ALLOWED.some(typeCommit =>
        commit.startsWith(typeCommit),
      );
      return isValidCommit;
    });
    return validCommits;
  } catch (error) {
    console.error(
      `Error getting the commit difference between branches ${branchToMerge} and current`,
      error.message,
    );
    process.exit(1);
  }
}

function branchExists(branch) {
  try {
    const branches = execSync('git branch --list').toString();
    return branches.includes(branch);
  } catch (error) {
    console.error('Error checking out branches:', error.message);
    process.exit(1);
  }
}

function validReviewType(reviewType) {
  const reviewTypeAvailable = Object.values(REVIEW_TYPE);
  return reviewTypeAvailable.includes(reviewType);
}

function generateTemplate({
  title = '',
  link = '',
  changes = [],
  context = {},
  documentation = false,
  revisionType = '',
}) {
  const commitList = changes
    .map((file, index) => `${index + 1}. ${file}`)
    .join('\n');
  const template = `
### ${title}

### 🔗 Task Link

${title.split(':')[0]}(${link ? link : '<link>'})

### 🛠 Changes

${commitList}

### ✨ Context

${context ? context : "What's the context for the changes? Are there any"}

### 📘 Documentation

- [${documentation ? 'x' : ' '}] I have updated the documentation, or
- [${!documentation ? 'x' : ' '}] No documentation update is required

### 🧪 Test

I have verified these changes via:

- [${
    revisionType === REVIEW_TYPE.CODE_INSPECTION_ONLY ? 'x' : ' '
  }] Code inspection only, or
- [${
    revisionType === REVIEW_TYPE.ADD_OR_MODIFIED_UNIT_TEST ? 'x' : ' '
  }] Newly added/modified unit tests, or
- [${
    revisionType === REVIEW_TYPE.RUN_REPOSITORY ? 'x' : ' '
  }] No unit tests but ran on a real repository, or
- [${
    revisionType === REVIEW_TYPE.UNIT_TEST_AND_RUN_REPOSITORY ? 'x' : ' '
  }] Both unit tests + ran on a real repository

### 📸 Screenshots (optional)

If you made UI changes, what are the before an afters?

### Git hooks

Screenshot to the git hook test succesfully
    `;
  console.log(template);
  copyToClipboard(template);
}

function getTitleOfNameBranch(nameBranch = '') {
  if (!nameBranch) {
    return '';
  }
  const verb = nameBranch.split('/')[0],
    formatVerb = `${verb.charAt(0).toUpperCase()}${verb.slice(1)}`,
    partsTitle = nameBranch.split('-'),
    code = partsTitle[1],
    description = partsTitle.slice(2).join(' ');
  return `[ZUBALE-${code}]: ${formatVerb}-${description}`;
}

function main() {
  const argv = yargs
    .option('title', {
      alias: 't',
      description: 'title of pr',
      type: 'string',
      default: '',
    })
    .option('branchToMerge', {
      alias: 'branch',
      description:
        'The branch against which the current branch is compared (default "Develop")',
      type: 'string',
      default: 'Develop',
    })
    .option('ticketLink', {
      alias: 'link',
      description: 'ticket link',
      type: 'string',
      default: '',
    })
    .option('context', {
      alias: 'cont',
      description: 'context of the changes made',
      type: 'string',
      default: '',
    })
    .option('documentationWasModified', {
      alias: 'doc',
      description:
        'Indicates whether the documentation was modified (true or false)',
      type: 'boolean',
      default: false,
    })
    .option('reviewType', {
      alias: 'review',
      description:
        'type of review that developers should do: ["code_inspection_only","add_or_modified_unit_test","run_repository","nit_test_and_run_repository"]',
      type: 'string',
      default: REVIEW_TYPE.CODE_INSPECTION_ONLY,
    })
    .version(false, 'script version', '0.1.0')
    .help()
    .alias('help', 'h').argv;
  const {
    title,
    branchToMerge,
    context,
    link,
    documentationWasModified,
    reviewType,
  } = argv;
  const isValidBranch = branchExists(branchToMerge);
  if (!isValidBranch) {
    console.error(`branch "${branchToMerge}" not exist in current repository.`);
    process.exit(1);
  }
  const isValidReviewType = validReviewType(reviewType);
  if (!isValidReviewType) {
    console.error(`\n${reviewType} is not type available`);
    console.error(
      `types available:\n  -${Object.values(REVIEW_TYPE).join('\n  -')}\n`,
    );
    process.exit(1);
  }
  const currentBranch = getCurrentBranch();
  const commitsDiff = getCommitsDiff({ branchToMerge, currentBranch });
  generateTemplate({
    title: title ? title : getTitleOfNameBranch(currentBranch),
    changes: commitsDiff,
    context,
    documentation: documentationWasModified,
    link,
    revisionType: reviewType,
  });
}

main();
