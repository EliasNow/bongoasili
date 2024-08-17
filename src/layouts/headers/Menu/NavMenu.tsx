// "use client";
// import menu_data from "@/data/home-data/MenuData";
// import Link from "next/link.js";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// import logo from "@/assets/images/logo/logo_01.svg";

// const NavMenu = () => {
//     const pathname = usePathname();
//     const currentRoute = usePathname();
//     const [navTitle, setNavTitle] = useState("");

//     const isMenuItemActive = (menuLink: string) => {
//         return currentRoute === menuLink;
//     };

//     const isSubMenuItemActive = (subMenuLink: string) => {
//         return currentRoute === subMenuLink;
//     };

//     //openMobileMenu
//     const openMobileMenu = (menu: any) => {
//         if (navTitle === menu) {
//             setNavTitle("");
//         } else {
//             setNavTitle(menu);
//         }
//     };

//     return (
//         <ul className="navbar-nav align-items-lg-center">
//             <li className="d-block d-lg-none"><div className="logo"><Link href="/" className="d-block"><Image src={logo} alt="" /></Link></div></li>
//             <li className="nav-item dashboard-menu">
//                 <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
//             </li>
//             {menu_data.map((menu: any) => (
//                 <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
//                     <Link href={menu.link} className={`nav-link dropdown-toggle ${pathname === menu.link ? 'active' : ''}
//                      ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
//                         {menu.title}
//                     </Link>
//                     {menu.has_dropdown && (
//                         <>
//                             <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
//                                 {menu.sub_menus && menu.sub_menus.map((sub_m: any, i: any) => (
//                                     <li key={i}>
//                                         <Link href={sub_m.link} className={`dropdown-item ${pathname === sub_m.link ? 'active' : ''}`}>
//                                             <span>{sub_m.title}</span>
//                                         </Link>
//                                     </li>
//                                 ))}
//                                 {menu.menu_column && (
//                                     <li className="row gx-1">
//                                         {menu.menu_column.map((item: any) => (
//                                             <div key={item.id} className="col-lg-4">
//                                                 <div className="menu-column">
//                                                     <h6 className="mega-menu-title">{item.mega_title}</h6>
//                                                     <ul className="style-none mega-dropdown-list">
//                                                         {item.mega_menus.map((mega_m: any, i: any) => (
//                                                             <li key={i}><Link href={mega_m.link} className={`dropdown-item ${pathname === mega_m.link ? 'active' : ''}`}><span>{mega_m.title}</span></Link></li>))}
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </li>
//                                 )}
//                             </ul>
//                         </>
//                     )}
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default NavMenu;


// chatgpt suggests wrapping
// src/components/Menu/NavMenu.tsx
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import logo from "@/assets/images/logo/logo_01.svg";

// interface SubMenu {
//   title: string;
//   link: string;
// }

// interface Menu {
//   id: number;
//   title: string;
//   link: string;
//   class_name?: string;
//   has_dropdown?: boolean;
//   sub_menus?: SubMenu[];
//   menu_column?: {
//     id: number;
//     mega_title: string;
//     mega_menus: SubMenu[];
//   }[];
// }

// interface NavMenuProps {
//   menuData: Menu[];
// }

// const NavMenu: React.FC<NavMenuProps> = ({ menuData }) => {
//   const pathname = usePathname();
//   const currentRoute = usePathname();
//   const [navTitle, setNavTitle] = useState("");

//   const isMenuItemActive = (menuLink: string) => {
//     return currentRoute === menuLink;
//   };

//   const isSubMenuItemActive = (subMenuLink: string) => {
//     return currentRoute === subMenuLink;
//   };

//   const openMobileMenu = (menu: string) => {
//     if (navTitle === menu) {
//       setNavTitle("");
//     } else {
//       setNavTitle(menu);
//     }
//   };

//   return (
//     <ul className="navbar-nav align-items-lg-center">
//       <li className="d-block d-lg-none">
//         <div className="logo">
//           <Link href="/" className="d-block">
//             <Image src={logo} alt="Logo" />
//           </Link>
//         </div>
//       </li>
//       <li className="nav-item dashboard-menu">
//         <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
//       </li>
//       {menuData.map((menu) => (
//         <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
//           <Link href={menu.link} className={`nav-link dropdown-toggle ${isMenuItemActive(menu.link) ? 'active' : ''} ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
//             {menu.title}
//           </Link>
//           {menu.has_dropdown && (
//             <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
//               {menu.sub_menus && menu.sub_menus.map((sub_m, i) => (
//                 <li key={i}>
//                   <Link href={sub_m.link} className={`dropdown-item ${isSubMenuItemActive(sub_m.link) ? 'active' : ''}`}>
//                     <span>{sub_m.title}</span>
//                   </Link>
//                 </li>
//               ))}
//               {menu.menu_column && (
//                 <li className="row gx-1">
//                   {menu.menu_column.map((item) => (
//                     <div key={item.id} className="col-lg-4">
//                       <div className="menu-column">
//                         <h6 className="mega-menu-title">{item.mega_title}</h6>
//                         <ul className="style-none mega-dropdown-list">
//                           {item.mega_menus.map((mega_m, i) => (
//                             <li key={i}>
//                               <Link href={mega_m.link} className={`dropdown-item ${isSubMenuItemActive(mega_m.link) ? 'active' : ''}`}>
//                                 <span>{mega_m.title}</span>
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   ))}
//                 </li>
//               )}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavMenu;


// src/components/Menu/NavMenu.tsx
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import logo from "@/assets/images/logo/logo_01.svg";

// interface SubMenu {
//   title: string;
//   link: string;
// }

// interface Menu {
//   id: number;
//   title: string;
//   link: string;
//   class_name?: string;
//   has_dropdown?: boolean;
//   sub_menus?: SubMenu[];
//   menu_column?: {
//     id: number;
//     mega_title: string;
//     mega_menus: SubMenu[];
//   }[];
// }

// interface NavMenuProps {
//   menuData: Menu[];
// }

// const NavMenu: React.FC<NavMenuProps> = ({ menuData }) => {
//   const pathname = usePathname();
//   const currentRoute = usePathname();
//   const [navTitle, setNavTitle] = useState("");

//   const isMenuItemActive = (menuLink: string) => currentRoute === menuLink;
//   const isSubMenuItemActive = (subMenuLink: string) => currentRoute === subMenuLink;

//   const openMobileMenu = (menu: string) => {
//     setNavTitle(navTitle === menu ? "" : menu);
//   };

//   return (
//     <ul className="navbar-nav align-items-lg-center">
//       <li className="d-block d-lg-none">
//         <div className="logo">
//           <Link href="/" className="d-block">
//             <Image src={logo} alt="Logo" />
//           </Link>
//         </div>
//       </li>
//       <li className="nav-item dashboard-menu">
//         <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
//       </li>
//       {menuData.map((menu) => (
//         <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
//           <Link href={menu.link} className={`nav-link dropdown-toggle ${isMenuItemActive(menu.link) ? 'active' : ''} ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
//             {menu.title}
//           </Link>
//           {menu.has_dropdown && (
//             <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
//               {menu.sub_menus?.map((sub_m, i) => (
//                 <li key={i}>
//                   <Link href={sub_m.link} className={`dropdown-item ${isSubMenuItemActive(sub_m.link) ? 'active' : ''}`}>
//                     <span>{sub_m.title}</span>
//                   </Link>
//                 </li>
//               ))}
//               {menu.menu_column?.map((item) => (
//                 <li key={item.id} className="row gx-1">
//                   <div className="col-lg-4">
//                     <div className="menu-column">
//                       <h6 className="mega-menu-title">{item.mega_title}</h6>
//                       <ul className="style-none mega-dropdown-list">
//                         {item.mega_menus.map((mega_m, i) => (
//                           <li key={i}>
//                             <Link href={mega_m.link} className={`dropdown-item ${isSubMenuItemActive(mega_m.link) ? 'active' : ''}`}>
//                               <span>{mega_m.title}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavMenu;


// src/components/Menu/NavMenu.tsx
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import logo from "@/assets/images/logo/logo_01.svg";

// interface SubMenu {
//   title: string;
//   link: string;
// }

// interface Menu {
//   id: number;
//   title: string;
//   link: string;
//   class_name?: string;
//   has_dropdown?: boolean;
//   sub_menus?: SubMenu[];
//   menu_column?: {
//     id: number;
//     mega_title: string;
//     mega_menus: SubMenu[];
//   }[];
// }

// interface NavMenuProps {
//   menuData?: Menu[];
// }

// const NavMenu: React.FC<NavMenuProps> = ({ menuData = [] }) => {
//   const pathname = usePathname();
//   const currentRoute = usePathname();
//   const [navTitle, setNavTitle] = useState("");

//   const isMenuItemActive = (menuLink: string) => currentRoute === menuLink;
//   const isSubMenuItemActive = (subMenuLink: string) => currentRoute === subMenuLink;

//   const openMobileMenu = (menu: string) => {
//     setNavTitle(navTitle === menu ? "" : menu);
//   };

//   return (
//     <ul className="navbar-nav align-items-lg-center">
//       <li className="d-block d-lg-none">
//         <div className="logo">
//           <Link href="/" className="d-block">
//             <Image src={logo} alt="Logo" />
//           </Link>
//         </div>
//       </li>
//       <li className="nav-item dashboard-menu">
//         <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
//       </li>
//       {menuData.map((menu) => (
//         <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
//           <Link href={menu.link} className={`nav-link dropdown-toggle ${isMenuItemActive(menu.link) ? 'active' : ''} ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
//             {menu.title}
//           </Link>
//           {menu.has_dropdown && (
//             <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
//               {menu.sub_menus?.map((sub_m, i) => (
//                 <li key={i}>
//                   <Link href={sub_m.link} className={`dropdown-item ${isSubMenuItemActive(sub_m.link) ? 'active' : ''}`}>
//                     <span>{sub_m.title}</span>
//                   </Link>
//                 </li>
//               ))}
//               {menu.menu_column?.map((item) => (
//                 <li key={item.id} className="row gx-1">
//                   <div className="col-lg-4">
//                     <div className="menu-column">
//                       <h6 className="mega-menu-title">{item.mega_title}</h6>
//                       <ul className="style-none mega-dropdown-list">
//                         {item.mega_menus.map((mega_m, i) => (
//                           <li key={i}>
//                             <Link href={mega_m.link} className={`dropdown-item ${isSubMenuItemActive(mega_m.link) ? 'active' : ''}`}>
//                               <span>{mega_m.title}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavMenu;

// src/components/Menu/NavMenu.tsx
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import logo from "@/assets/images/logo/logo_01.svg";

// interface SubMenu {
//   link: string;
//   title: string;
// }

// interface MenuColumn {
//   id: number;
//   mega_title: string;
//   mega_menus: SubMenu[];
// }

// interface Menu {
//   id: number;
//   title: string;
//   class_name?: string;
//   link: string;
//   has_dropdown: boolean;
//   sub_menus?: SubMenu[];
//   menu_column?: MenuColumn[];
// }

// interface NavMenuProps {
//   menuData?: Menu[];
// }

// const NavMenu: React.FC<NavMenuProps> = ({ menuData = [] }) => {
//   const pathname = usePathname();
//   const currentRoute = usePathname();
//   const [navTitle, setNavTitle] = useState("");

//   const isMenuItemActive = (menuLink: string) => currentRoute === menuLink;
//   const isSubMenuItemActive = (subMenuLink: string) => currentRoute === subMenuLink;

//   const openMobileMenu = (menu: string) => {
//     setNavTitle(navTitle === menu ? "" : menu);
//   };

//   return (
//     <ul className="navbar-nav align-items-lg-center">
//       <li className="d-block d-lg-none">
//         <div className="logo">
//           <Link href="/" className="d-block">
//             <Image src={logo} alt="Logo" />
//           </Link>
//         </div>
//       </li>
//       <li className="nav-item dashboard-menu">
//         <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
//       </li>
//       {menuData.map((menu) => (
//         <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
//           <Link href={menu.link} className={`nav-link dropdown-toggle ${isMenuItemActive(menu.link) ? 'active' : ''} ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
//             {menu.title}
//           </Link>
//           {menu.has_dropdown && (
//             <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
//               {menu.sub_menus?.map((sub_m, i) => (
//                 <li key={i}>
//                   <Link href={sub_m.link} className={`dropdown-item ${isSubMenuItemActive(sub_m.link) ? 'active' : ''}`}>
//                     <span>{sub_m.title}</span>
//                   </Link>
//                 </li>
//               ))}
//               {menu.menu_column?.map((item) => (
//                 <li key={item.id} className="row gx-1">
//                   <div className="col-lg-4">
//                     <div className="menu-column">
//                       <h6 className="mega-menu-title">{item.mega_title}</h6>
//                       <ul className="style-none mega-dropdown-list">
//                         {item.mega_menus.map((mega_m, i) => (
//                           <li key={i}>
//                             <Link href={mega_m.link} className={`dropdown-item ${isSubMenuItemActive(mega_m.link) ? 'active' : ''}`}>
//                               <span>{mega_m.title}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavMenu;

//simplified
// src/components/Menu/NavMenu.tsx
// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import logo from "@/assets/images/logo/logo_01.svg";

// const NavMenu = ({ menuData = [] }) => {
//   return (
//     <ul className="navbar-nav align-items-lg-center">
//       <li className="d-block d-lg-none">
//         <div className="logo">
//           <Link href="/" className="d-block">
//             <Image src={logo} alt="Logo" width={100} height={50} />
//           </Link>
//         </div>
//       </li>
//       {menuData.map((menu) => (
//         <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
//           <Link href={menu.link} className="nav-link dropdown-toggle">
//             {menu.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavMenu;

// src/components/Menu/NavMenu.tsx
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import logo from "@/assets/images/logo/logo_01.svg";
// import { MenuItem } from "@/interfaces/Menu";

// interface NavMenuProps {
//   menuData: MenuItem[];
// }

// const NavMenu: React.FC<NavMenuProps> = ({ menuData }) => {
//   const pathname = usePathname();
//   const currentRoute = usePathname();
//   const [navTitle, setNavTitle] = useState("");

//   const isMenuItemActive = (menuLink: string) => currentRoute === menuLink;
//   const isSubMenuItemActive = (subMenuLink: string) => currentRoute === subMenuLink;

//   const openMobileMenu = (menu: string) => {
//     setNavTitle(navTitle === menu ? "" : menu);
//   };

//   return (
//     <ul className="navbar-nav align-items-lg-center">
//       <li className="d-block d-lg-none">
//         <div className="logo">
//           <Link href="/" className="d-block">
//             <Image src={logo} alt="Logo" width={100} height={50} />
//           </Link>
//         </div>
//       </li>
//       <li className="nav-item dashboard-menu">
//         <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
//       </li>
//       {menuData.map((menu) => (
//         <li key={menu.id} className={`nav-item dropdown ${menu.class_name || ''}`}>
//           <Link href={menu.link} className={`nav-link dropdown-toggle ${isMenuItemActive(menu.link) ? 'active' : ''} ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
//             {menu.title}
//           </Link>
//           {menu.has_dropdown && (
//             <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
//               {menu.sub_menus?.map((sub_m, i) => (
//                 <li key={i}>
//                   <Link href={sub_m.link} className={`dropdown-item ${isSubMenuItemActive(sub_m.link) ? 'active' : ''}`}>
//                     <span>{sub_m.title}</span>
//                   </Link>
//                 </li>
//               ))}
//               {menu.menu_column?.map((item) => (
//                 <li key={item.id} className="row gx-1">
//                   <div className="col-lg-4">
//                     <div className="menu-column">
//                       <h6 className="mega-menu-title">{item.mega_title}</h6>
//                       <ul className="style-none mega-dropdown-list">
//                         {item.mega_menus.map((mega_m, i) => (
//                           <li key={i}>
//                             <Link href={mega_m.link} className={`dropdown-item ${isSubMenuItemActive(mega_m.link) ? 'active' : ''}`}>
//                               <span>{mega_m.title}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavMenu;

//from github (last working git upload)
// "use client";
// import menu_data from "@/data/home-data/MenuData";
// import Link from "next/link.js";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { useState } from "react";

// import logo from "@/assets/images/logo/logo_01.svg";

// const NavMenu = () => {
//     const pathname = usePathname();
//     const currentRoute = usePathname();
//     const [navTitle, setNavTitle] = useState("");

//     const isMenuItemActive = (menuLink: string) => {
//         return currentRoute === menuLink;
//     };

//     const isSubMenuItemActive = (subMenuLink: string) => {
//         return currentRoute === subMenuLink;
//     };

//     //openMobileMenu
//     const openMobileMenu = (menu: any) => {
//         if (navTitle === menu) {
//             setNavTitle("");
//         } else {
//             setNavTitle(menu);
//         }
//     };

//     return (
//         <ul className="navbar-nav align-items-lg-center">
//             <li className="d-block d-lg-none"><div className="logo"><Link href="/" className="d-block"><Image src={logo} alt="" /></Link></div></li>
//             <li className="nav-item dashboard-menu">
//                 <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
//             </li>
//             {menu_data.map((menu: any) => (
//                 <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
//                     <Link href={menu.link} className={`nav-link dropdown-toggle ${pathname === menu.link ? 'active' : ''}
//                      ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
//                         {menu.title}
//                     </Link>
//                     {menu.has_dropdown && (
//                         <>
//                             <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
//                                 {menu.sub_menus && menu.sub_menus.map((sub_m: any, i: any) => (
//                                     <li key={i}>
//                                         <Link href={sub_m.link} className={`dropdown-item ${pathname === sub_m.link ? 'active' : ''}`}>
//                                             <span>{sub_m.title}</span>
//                                         </Link>
//                                     </li>
//                                 ))}
//                                 {menu.menu_column && (
//                                     <li className="row gx-1">
//                                         {menu.menu_column.map((item: any) => (
//                                             <div key={item.id} className="col-lg-4">
//                                                 <div className="menu-column">
//                                                     <h6 className="mega-menu-title">{item.mega_title}</h6>
//                                                     <ul className="style-none mega-dropdown-list">
//                                                         {item.mega_menus.map((mega_m: any, i: any) => (
//                                                             <li key={i}><Link href={mega_m.link} className={`dropdown-item ${pathname === mega_m.link ? 'active' : ''}`}><span>{mega_m.title}</span></Link></li>))}
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </li>
//                                 )}
//                             </ul>
//                         </>
//                     )}
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default NavMenu;

// src/components/Menu/NavMenu.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo/logo_01.svg";

interface SubMenu {
    title: string;
    link: string;
  }
  
  interface Menu {
    id: number;
    title: string;
    link: string;
    class_name?: string;
    has_dropdown?: boolean;
    sub_menus?: SubMenu[];
    menu_column?: {
      id: number;
      mega_title: string;
      mega_menus: SubMenu[];
    }[];
  }
  
  interface NavMenuProps {
    menuData?: Menu[];
  }
  
  const NavMenu: React.FC<NavMenuProps> = ({ menuData = [] }) => {
    const pathname = usePathname();
    const currentRoute = usePathname();
    const [navTitle, setNavTitle] = useState("");
  
    const isMenuItemActive = (menuLink: string) => currentRoute === menuLink;
    const isSubMenuItemActive = (subMenuLink: string) => currentRoute === subMenuLink;
  
    const openMobileMenu = (menu: string) => {
      setNavTitle(navTitle === menu ? "" : menu);
    };
  
    return (
      <ul className="navbar-nav align-items-lg-center">
        <li className="d-block d-lg-none">
          <div className="logo">
            <Link href="/" className="d-block">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
        </li>
        <li className="nav-item dashboard-menu">
          <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
        </li>
        {menuData.map((menu) => (
          <li key={menu.id} className={`nav-item dropdown ${menu.class_name}`}>
            <Link href={menu.link} className={`nav-link dropdown-toggle ${isMenuItemActive(menu.link) ? 'active' : ''} ${navTitle === menu.title ? "show" : ""}`} onClick={() => openMobileMenu(menu.title)}>
              {menu.title}
            </Link>
            {menu.has_dropdown && (
              <ul className={`dropdown-menu ${navTitle === menu.title ? "show" : ""}`}>
                {menu.sub_menus?.map((sub_m, i) => (
                  <li key={i}>
                    <Link href={sub_m.link} className={`dropdown-item ${isSubMenuItemActive(sub_m.link) ? 'active' : ''}`}>
                      <span>{sub_m.title}</span>
                    </Link>
                  </li>
                ))}
                {menu.menu_column?.map((item) => (
                  <li key={item.id} className="row gx-1">
                    <div className="col-lg-4">
                      <div className="menu-column">
                        <h6 className="mega-menu-title">{item.mega_title}</h6>
                        <ul className="style-none mega-dropdown-list">
                          {item.mega_menus.map((mega_m, i) => (
                            <li key={i}>
                              <Link href={mega_m.link} className={`dropdown-item ${isSubMenuItemActive(mega_m.link) ? 'active' : ''}`}>
                                <span>{mega_m.title}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  };
  
  export default NavMenu;


