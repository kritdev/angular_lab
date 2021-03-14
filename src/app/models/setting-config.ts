export class SettingConfig {
  public setting = {};

  getSettingConfig(): Object {
    return this.setting;
  }

  getConfigValue(configId) {
    return this.setting.hasOwnProperty(configId) ? this.setting[configId] : 'default';
  }

  setConfigValue(configId, configValue) {
    this.setting[configId] = configValue;
  }
}
