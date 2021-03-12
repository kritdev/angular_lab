import { ConfigurationItem } from "./configuration-item";
import { ConfigurationMenu } from "./configuration-menu";

export class Configuration {
  public getConfiguration() {
    let menuList: ConfigurationMenu[] = [];

    let commonMenu = new ConfigurationMenu('Commonly Used',[],[]);
    commonMenu.itemList.push(new ConfigurationItem('file.autoSave', 'Auto Save', 'Controls auto save of dirty editor.'));
    commonMenu.itemList.push(new ConfigurationItem('editor.fontSize', 'Font Size', 'Controls the font size in pixels.'));

    /*----------------------------------------------------------------*/
    let textEditorMenu = new ConfigurationMenu('Text Editor',[],[]);
    textEditorMenu.itemList.push(new ConfigurationItem('accessibilityPageSize','Accessibility Page Size','Controls the number of lines in the editor that can be read out by a screen reader. Warning: this has a performance implication for numbers larger than the default.'));
    textEditorMenu.itemList.push(new ConfigurationItem('accessibilitySupport','Accessibility Support','Controls whether the editor should run in a mode where it is optimized for screen readers. Setting to on will disable word wrapping.'));
    textEditorMenu.itemList.push(new ConfigurationItem('autoClosingBrackets','Auto Closing Brackets','Controis whether the ecditor should automaticaliy close brackets arter the user acicis an openng bracket.'));
    textEditorMenu.itemList.push(new ConfigurationItem('autoClosingOvertype','Auto Closing Overtype','Contrcls wnetherthe editor sinould iype over closing quates or brackets.'));

    textEditorMenu.subMenuList.push(new ConfigurationMenu('Cursor',[],[]));
    textEditorMenu.subMenuList[0].itemList.push(new ConfigurationItem('','Cursor Blinking','Control the cursor animation style.'));
    textEditorMenu.subMenuList[0].itemList.push(new ConfigurationItem('','Cursor Smooth Caret Animation','Controls whether the smooth caret animation should be enabled.'));
    textEditorMenu.subMenuList[0].itemList.push(new ConfigurationItem('','Cursor Style','Controls the cursor style.'));
    textEditorMenu.subMenuList[0].itemList.push(new ConfigurationItem('','Cursor Surrounding Lines','Controls the minimal number of visible leading and trailing lines surrounding the cursor. Known as \'scrollOff\' or \'scrollOffset\' in some other editors.'));

    textEditorMenu.subMenuList.push(new ConfigurationMenu('Find',[],[]));
    textEditorMenu.subMenuList.push(new ConfigurationMenu('Font',[],[]));
    textEditorMenu.subMenuList.push(new ConfigurationMenu('Format',[],[]));  

    /*----------------------------------------------------------------*/
    let workbenchMenu = new ConfigurationMenu('Workbench',[],[]);
    workbenchMenu.subMenuList.push(new ConfigurationMenu('Appearance',[],[]));
    workbenchMenu.subMenuList.push(new ConfigurationMenu('Breadcrumbs',[],[]));
    workbenchMenu.subMenuList.push(new ConfigurationMenu('Editor Management',[],[]));
    workbenchMenu.subMenuList.push(new ConfigurationMenu('Setting Editor',[],[]));
    workbenchMenu.subMenuList.push(new ConfigurationMenu('Zen Mode',[],[]));
    workbenchMenu.subMenuList.push(new ConfigurationMenu('Screencast Mode',[],[]));


    /*----------------------------------------------------------------*/
    let windowMenu = new ConfigurationMenu('Window',[],[]);
    let featureMenu = new ConfigurationMenu('Feature',[],[]);
    let application = new ConfigurationMenu('Application',[],[]);
    let extensionsMenu = new ConfigurationMenu('Extensions',[],[]);

    textEditorMenu.itemList.push(new ConfigurationItem('','',''));

    menuList.push( commonMenu );
    menuList.push( textEditorMenu );
    menuList.push( workbenchMenu );
    menuList.push( windowMenu );
    menuList.push( featureMenu );
    menuList.push( application );
    menuList.push( extensionsMenu );


    return menuList;
  }
}
