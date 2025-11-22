import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState("1");
  const [expandedMenus, setExpandedMenus] = useState({});

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const toggleSidebar = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    document.body.setAttribute(
      "data-sidebartype",
      newCollapsedState ? "mini-sidebar" : "full"
    );
  };

  const toggleSubmenu = (menuId, e) => {
    e.preventDefault();
    setExpandedMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const handleMiniNavClick = (menuId) => {
    setActiveMenu(menuId);
    setIsCollapsed(false);
    document.body.setAttribute("data-sidebartype", "full");
  };

  useEffect(() => {
    const layoutType = document.documentElement.getAttribute("data-layout");

    if (layoutType === "vertical") {
      const findMatchingElement = () => {
        const anchors = document.querySelectorAll("#sidebarnav a");
        for (let i = 0; i < anchors.length; i++) {
          if (anchors[i].href === window.location.href) {
            return anchors[i];
          }
        }
        return null;
      };

      const matchingElement = findMatchingElement();
      if (matchingElement) {
        matchingElement.classList.add("active");

        const closestNav = matchingElement.closest("nav[class^=sidebar-nav]");
        const menuid = (closestNav && closestNav.id) || "menu-right-mini-1";
        const menuNumber = menuid[menuid.length - 1];
        setActiveMenu(menuNumber);

        document
          .getElementById("menu-right-mini-" + menuNumber)
          ?.classList.add("d-block");
        document
          .getElementById("mini-" + menuNumber)
          ?.classList.add("selected");
        setIsCollapsed(false);
      }

      document
        .querySelectorAll("ul#sidebarnav ul li a.active")
        .forEach((link) => {
          const submenu = link.closest("ul");
          if (submenu) {
            submenu.classList.add("in");
            const parentLi = submenu.parentElement;
            if (parentLi) {
              parentLi.classList.add("selected");
            }
          }
        });
    }

    const currentURL = window.location.href;
    const miniNavItems = document.querySelectorAll(".mini-nav-item");

    miniNavItems.forEach((item) => {
      const menuId = item.id.replace("mini-", "");
      const sidebarMenu = document.getElementById("menu-right-mini-" + menuId);

      if (sidebarMenu) {
        sidebarMenu.classList.remove("d-block");
        item.classList.remove("selected");

        const menuLinks = sidebarMenu.querySelectorAll("a");
        let hasActiveLink = false;

        menuLinks.forEach((link) => {
          if (link.href === currentURL) {
            hasActiveLink = true;
          }
        });

        if (hasActiveLink) {
          sidebarMenu.classList.add("d-block");
          item.classList.add("selected");
          setActiveMenu(menuId);
          setIsCollapsed(false);
        }
      }
    });

    const scripts = [
      "src/assets/js/theme/app.init.js",
      "src/assets/js/theme/theme.js",
      "src/assets/js/theme/app.min.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const el = document.querySelector(`script[src="${src}"]`);
        if (el) el.remove();
      });
    };
  }, [location.pathname]);

  return (
    <>
      <aside className={`side-mini-panel with-vertical ${isCollapsed ? "" : "show"}`}>
        <div className="iconbar">
          <div>
            <div className="mini-nav">
              <div className="brand-logo d-flex align-items-center justify-content-center">
                <a
                  className="nav-link sidebartoggler"
                  id="headerCollapse"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSidebar();
                  }}
                >
                  <iconify-icon
                    icon="solar:hamburger-menu-line-duotone"
                    className="fs-7"
                  />
                </a>
              </div>
              <ul className="mini-nav-ul" data-simplebar="">
                {/* Dashboards */}
                <li className={`mini-nav-item ${ activeMenu === "1" ? "selected" : "" }`} id="mini-1">
                  <a href="#" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-placement="right" data-bs-title="Dashboards"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMiniNavClick("1");
                    }}
                  >
                    <iconify-icon icon="solar:layers-line-duotone" className="fs-7"/>
                  </a>
                </li>

                {/* Role & Permission */}
                <li className={`mini-nav-item ${ activeMenu === "2" ? "selected" : "" }`} id="mini-2">
                  <a href="#" data-bs-toggle="tooltip" data-bs-custom-class="custom-tooltip" data-bs-placement="right" data-bs-title="Role & Permission"
                      onClick={(e) => {
                      e.preventDefault();
                      handleMiniNavClick("2");
                    }}>
                    <iconify-icon icon="solar:settings-linear" className="fs-7"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="sidebarmenu">
              <div className="brand-logo d-flex align-items-center nav-logo">
                <a href="./main/index.html" className="text-nowrap logo-img">
                  <img src="./src/assets/images/logos/logo.svg" alt="Logo" />
                </a>
              </div>

              {/* Dashboard Menu */}
              <nav
                className={`sidebar-nav ${activeMenu === "1" ? "d-block" : ""}`}
                id="menu-right-mini-1"
                data-simplebar=""
              >
                <ul className="sidebar-menu" id="sidebarnav">
                  <li className="nav-small-cap">
                    <span className="hide-menu">Dashboards</span>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className={`sidebar-link ${isActive("/dashboard")}`}
                      to="/dashboard"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:atom-line-duotone" />
                      <span className="hide-menu">Dashboard</span>
                    </Link>
                  </li>
                  {/* <li className="sidebar-item">
                    <a
                      className={`sidebar-link ${isActive("/dashboard_1")}`}
                      href="#"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:chart-line-duotone" />
                      <span className="hide-menu">Dashboard 2</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className={`sidebar-link ${isActive("/dashboard_2")}`}
                      href="#"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:screencast-2-line-duotone" />
                      <span className="hide-menu">Dashboard 3</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow"
                      href="#"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:home-angle-line-duotone" />
                      <span className="hide-menu">Front Pages</span>
                    </a>
                    <ul aria-expanded="false" className="collapse first-level">
                      <li className="sidebar-item">
                        <a
                          className={`sidebar-link ${isActive("/dashboard")}`}
                          href="#"
                        >
                          <span className="icon-small" />
                          Homepage
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className={`sidebar-link ${isActive("/dashboard")}`}
                          href="#"
                        >
                          <span className="icon-small" />
                          About Us
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className={`sidebar-link ${isActive("/dashboard")}`}
                          href="#"
                        >
                          <span className="icon-small" />
                          Blog
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className={`sidebar-link ${isActive("/dashboard")}`}
                          href="#"
                        >
                          <span className="icon-small" />
                          Blog Details
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className={`sidebar-link ${isActive("/dashboard")}`}
                          href="#"
                        >
                          <span className="icon-small" />
                          Contact Us
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className={`sidebar-link ${isActive("/dashboard")}`}
                          href="#"
                        >
                          <span className="icon-small" />
                          Portfolio
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a
                          className={`sidebar-link ${isActive("/dashboard")}`}
                          href="#"
                        >
                          <span className="icon-small" />
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <span className="sidebar-divider" />
                  </li>
                </ul>
              </nav>

              {/* Role & Permission Menu */}
              <nav className={`sidebar-nav ${activeMenu === "2" ? "d-block" : ""}`} id="menu-right-mini-2" data-simplebar="">
                <ul className="sidebar-menu" id="sidebarnav">
                  <li className="nav-small-cap">
                    <span className="hide-menu">Settings</span>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className={`sidebar-link ${isActive("/users")}`}
                      to="/users"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:users-group-rounded-bold-duotone" />
                      <span className="hide-menu">Users</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className={`sidebar-link ${isActive("/role-permission")}`}
                      to="/role-permission"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:shield-user-line-duotone" />
                      <span className="hide-menu">Role & Permission</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className={`sidebar-link ${isActive("/office")}`}
                      to="/office"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:buildings-2-broken" />
                      <span className="hide-menu">Office</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className={`sidebar-link ${isActive("/division")}`}
                      to="/division"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:bill-outline" />
                      <span className="hide-menu">Division</span>
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      className={`sidebar-link ${isActive("/department")}`}
                      to="/department"
                      aria-expanded="false"
                    >
                      <iconify-icon icon="solar:bill-list-outline" />
                      <span className="hide-menu">Department</span>
                    </Link>
                  </li>
                  <li>
                    <span className="sidebar-divider" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;