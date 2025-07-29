interface HomeRepositoryErrorModels {
  message: string;
  details?: any;
}

export class HomeRepositoryError extends Error {
  public readonly details?: any;

  constructor({message, details}: HomeRepositoryErrorModels) {
    super(message);
    this.name = 'HomeRepositoryError';
    this.details = details;
    Object.setPrototypeOf(this, HomeRepositoryError.prototype);
  }
}
