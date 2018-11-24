interface IConfig {
  url: string;
}

export class Client {
  constructor(protected config: IConfig) {}

  public getUrl() {
    return this.config.url;
  }
}