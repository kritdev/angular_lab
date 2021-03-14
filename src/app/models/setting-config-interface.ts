export interface SettingConfigInterface {
  getSettingConfig(): Object;
  getConfigValue(configId, configValue);
  setConfigValue(configId, configValue);
}
