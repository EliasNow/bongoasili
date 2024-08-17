// src/interfaces/Menu.ts
export interface SubMenu {
    link: string;
    title: string;
  }
  
  export interface MenuColumn {
    id: number;
    mega_title: string;
    mega_menus: SubMenu[];
  }
  
  export interface MenuItem {
    id: number;
    title: string;
    class_name?: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: SubMenu[];
    menu_column?: MenuColumn[];
  }
  