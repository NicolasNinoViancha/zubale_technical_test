const { execSync } = require('child_process');
const process = require('process');

const RG_VALID_BRANCH_NAME =
    /^(main|development|feature|fix|refactor|hotfix|docs|test)(\/zubale-(\d+)-([a-z0-9-_]+))?$/,
  MESSAGE = `
============================================================\n
                    🚫Action blocked🚫\n
The branch name is invalid.
Please use a valid name for the development branch:

<type>/zubale-<serial-number>-<description>

    - type: [feature, fix, refactor, hotfix, docs, test]
    - serial-number: is a number, corresponding to the task ID
                    in the plan
- description: is a string

All lowercase.
\n============================================================
  `;

function getCurrentBranch() {
  try {
    const branch = execSync('git symbolic-ref --short HEAD').toString().trim();
    return `${branch}`;
  } catch (error) {
    console.error('Error getting current branch :', error.message);
    process.exit(1);
  }
}

function main() {
  const currentBranch = getCurrentBranch();
  const isValidBranchName = RG_VALID_BRANCH_NAME.test(currentBranch);
  if (isValidBranchName) {
    process.exit(0);
  }
  console.error(MESSAGE);
  process.exit(1);
}

main();
