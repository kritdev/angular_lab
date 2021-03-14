import { SettingConfig } from "./setting-config";

export class WorkspaceSettingConfig extends SettingConfig{
  constructor() {
    super();
    this.setting = {
      'file.autoSave': 'false',
      'editor.fontSize': '14',
      'autoClosingBrackets': 'true'
    }
  }
}