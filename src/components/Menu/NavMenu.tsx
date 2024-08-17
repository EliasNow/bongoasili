// // src/components/Menu/NavMenu.tsx
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

// //

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

// src/components/Menu/NavMenu.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo/logo_01.svg";
import { MenuItem } from "@/interfaces/Menu";

interface NavMenuProps {
  menuData: MenuItem[];
}

const NavMenu: React.FC<NavMenuProps> = ({ menuData }) => {
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
            <Image src={logo} alt="Logo" width={100} height={50} />
          </Link>
        </div>
      </li>
      <li className="nav-item dashboard-menu">
        <Link className="nav-link" href="/dashboard/dashboard-index" target="_blank">Dashboard</Link>
      </li>
      {menuData.map((menu) => (
        <li key={menu.id} className={`nav-item dropdown ${menu.class_name || ''}`}>
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
