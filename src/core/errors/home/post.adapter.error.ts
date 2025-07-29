interface PostAdapterErrorModels {
  message: string;
  details?: any;
}

export class PostAdapterError extends Error {
  public readonly details?: any;

  constructor({message, details}: PostAdapterErrorModels) {
    super(message);
    this.name = 'PostAdapterError';
    this.details = details;
    Object.setPrototypeOf(this, PostAdapterError.prototype);
  }
}
