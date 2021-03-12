export class ConfigurationItem {
  constructor(
    public id: String,
    public name: String,
    public description: String,
    public isHeader: boolean = false
  ) {
  }
}
