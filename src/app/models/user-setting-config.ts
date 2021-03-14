import { SettingConfig } from "./setting-config";

export class UserSettingConfig extends SettingConfig{
  constructor() {
    super();
    this.setting = {
      'file.autoSave': 'true',
      'editor.fontSize': '16',
      'autoClosingBrackets': 'false'
    }
  }

}
