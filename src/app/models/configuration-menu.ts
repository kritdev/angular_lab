import { ConfigurationItem } from "./configuration-item";

export class ConfigurationMenu {
  constructor(
    public menu: String, 
    public itemList: ConfigurationItem[], 
    public subMenuList: ConfigurationMenu[]) {
    }

  getMenuId() {
    return this.menu.replace(/\s/g, "");
  }
}
