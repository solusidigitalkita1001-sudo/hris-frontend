import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const location = useLocation();
    const [openMenus, setOpenMenus] = useState({});

    const isActive = (path) => {
        return location.pathname === path ? "active" : "";
    };

    const toggleMenu = (menuId) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuId]: !prev[menuId],
        }));
    };

    useEffect(() => {
        const scripts = [
            "src/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js",
            "src/assets/libs/simplebar/dist/simplebar.min.js",
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
    }, []);

    return (
        <aside className="left-sidebar with-vertical">
            <div className="iconbar">
                    <div>
                    <div className="mini-nav">
                        <div className="brand-logo d-flex align-items-center justify-content-center">
                        <a
                            className="nav-link sidebartoggler"
                            id="headerCollapse"
                            href="javascript:void(0)"
                        >
                            <iconify-icon
                            icon="solar:hamburger-menu-line-duotone"
                            className="fs-7"
                            ></iconify-icon>
                        </a>
                        </div>
                        <ul className="mini-nav-ul" data-simplebar>
                        <li className="mini-nav-item" id="mini-1">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Dashboards"
                            >
                            <iconify-icon
                                icon="solar:layers-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>

                        <li className="mini-nav-item" id="mini-3">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Pages"
                            >
                            <iconify-icon
                                icon="solar:notes-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>

                        <li className="mini-nav-item" id="mini-4">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Forms"
                            >
                            <iconify-icon
                                icon="solar:palette-round-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>

                        <li>
                            <span className="sidebar-divider lg"></span>
                        </li>

                        <li className="mini-nav-item" id="mini-5">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Tables"
                            >
                            <iconify-icon
                                icon="solar:tuning-square-2-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>

                        <li className="mini-nav-item" id="mini-6">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Charts"
                            >
                            <iconify-icon
                                icon="solar:chart-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>

                        <li className="mini-nav-item" id="mini-7">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Ui Components"
                            >
                            <iconify-icon
                                icon="solar:widget-6-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>

                        <li className="mini-nav-item" id="mini-8">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Components"
                            >
                            <iconify-icon
                                icon="solar:archive-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>

                        <li>
                            <span className="sidebar-divider lg"></span>
                        </li>

                        <li className="mini-nav-item" id="mini-9">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Authentication Pages"
                            >
                            <iconify-icon
                                icon="solar:lock-keyhole-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>

                        <li className="mini-nav-item" id="mini-10">
                            <a
                            href="javascript:void(0)"
                            data-bs-toggle="tooltip"
                            data-bs-custom-classname="custom-tooltip"
                            data-bs-placement="right"
                            data-bs-title="Docs &amp; Other"
                            >
                            <iconify-icon
                                icon="solar:mirror-left-line-duotone"
                                className="fs-7"
                            ></iconify-icon>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="sidebarmenu">
                        <div className="brand-logo d-flex align-items-center nav-logo">
                        <a href="./main/index.html" className="text-nowrap logo-img">
                            <img src="./assets/images/logos/logo.svg" alt="Logo" />
                        </a>
                        </div>

                        <nav className="sidebar-nav" id="menu-right-mini-1" data-simplebar>
                        <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                            <span className="hide-menu">Dashboards</span>
                            </li>

                            <li className="sidebar-item">
                            <a
                                className="sidebar-link"
                                href=""
                                id="get-url"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:atom-line-duotone"></iconify-icon>
                                <span className="hide-menu">Dashboard 1</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a
                                className="sidebar-link"
                                href="./main/index2.html"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:chart-line-duotone"></iconify-icon>
                                <span className="hide-menu">Dashboard 2</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a
                                className="sidebar-link"
                                href="./main/index3.html"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:screencast-2-line-duotone"></iconify-icon>
                                <span className="hide-menu">Dashboard 3</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a
                                className="sidebar-link has-arrow"
                                href="javascript:void(0)"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:home-angle-line-duotone"></iconify-icon>
                                <span className="hide-menu">Front Pages</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/frontend-landingpage.html"
                                >
                                    <span className="icon-small"></span>
                                    Homepage
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/frontend-aboutpage.html"
                                >
                                    <span className="icon-small"></span>
                                    About Us
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/frontend-blogpage.html"
                                >
                                    <span className="icon-small"></span>
                                    Blog
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/frontend-blogdetailpage.html"
                                >
                                    <span className="icon-small"></span>
                                    Blog Details
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/frontend-contactpage.html"
                                >
                                    <span className="icon-small"></span>
                                    Contact Us
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/frontend-portfoliopage.html"
                                >
                                    <span className="icon-small"></span>
                                    Portfolio
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/frontend-pricingpage.html"
                                >
                                    <span className="icon-small"></span>
                                    Pricing
                                </a>
                                </li>
                            </ul>
                            </li>

                            <li>
                            <span className="sidebar-divider"></span>
                            </li>

                            <li className="nav-small-cap">
                            <span className="hide-menu">Apps</span>
                            </li>

                            <li className="sidebar-item">
                            <a
                                className="sidebar-link has-arrow"
                                href="javascript:void(0)"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:cart-3-line-duotone"></iconify-icon>
                                <span className="hide-menu">Ecommerce</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                <a className="sidebar-link" href="./main/eco-shop.html">
                                    <span className="icon-small"></span> Shop
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/eco-shop-detail.html"
                                >
                                    <span className="icon-small"></span>Details
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/eco-product-list.html"
                                >
                                    <span className="icon-small"></span>List
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a className="sidebar-link" href="./main/eco-checkout.html">
                                    <span className="icon-small"></span>Checkout
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/eco-add-product.html"
                                >
                                    <span className="icon-small"></span>Add Product
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./main/eco-edit-product.html"
                                >
                                    <span className="icon-small"></span>Edit Product
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="sidebar-item">
                            <a
                                className="sidebar-link has-arrow"
                                href="javascript:void(0)"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:widget-4-line-duotone"></iconify-icon>
                                <span className="hide-menu">Blog</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                <a className="sidebar-link" href="./main/blog-posts.html">
                                    <span className="icon-small"></span>Blog Posts
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a className="sidebar-link" href="./main/blog-detail.html">
                                    <span className="icon-small"></span>Blog Details
                                </a>
                                </li>
                            </ul>
                            </li>
                            <li className="sidebar-item">
                            <a
                                className="sidebar-link"
                                href="./main/page-user-profile.html"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:shield-user-line-duotone"></iconify-icon>
                                User Profile
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/app-email.html">
                                <iconify-icon icon="solar:letter-line-duotone"></iconify-icon>
                                Email
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/app-calendar.html">
                                <iconify-icon icon="solar:calendar-mark-line-duotone"></iconify-icon>
                                Calendar
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/app-kanban.html">
                                <iconify-icon icon="solar:airbuds-case-minimalistic-line-duotone"></iconify-icon>
                                Kanban
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/app-chat.html">
                                <iconify-icon icon="solar:chat-round-line-line-duotone"></iconify-icon>
                                Chat
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/app-notes.html">
                                <iconify-icon icon="solar:document-text-line-duotone"></iconify-icon>
                                Notes
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/app-contact.html">
                                <iconify-icon icon="solar:iphone-line-duotone"></iconify-icon>
                                Contact Table
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/app-contact2.html">
                                <iconify-icon icon="solar:phone-line-duotone"></iconify-icon>
                                Contact List
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/app-invoice.html">
                                <iconify-icon icon="solar:bill-list-line-duotone"></iconify-icon>
                                Invoice
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <nav
                        className="sidebar-nav scroll-sidebar"
                        id="menu-right-mini-3"
                        data-simplebar
                        >
                        <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                            <span className="hide-menu">Pages</span>
                            </li>
                            <li className="sidebar-item">
                            <a href="./landingpage/index.html" className="sidebar-link">
                                <iconify-icon icon="solar:notes-line-duotone"></iconify-icon>
                                <span className="hide-menu">Landingpage</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/pages-animation.html" className="sidebar-link">
                                <iconify-icon icon="solar:accessibility-line-duotone"></iconify-icon>
                                <span className="hide-menu">Animation</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/pages-search-result.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:card-search-line-duotone"></iconify-icon>
                                <span className="hide-menu">Search Result</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/pages-gallery.html" className="sidebar-link">
                                <iconify-icon icon="solar:gallery-bold-duotone"></iconify-icon>
                                <span className="hide-menu">Gallery</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/pages-treeview.html" className="sidebar-link">
                                <iconify-icon icon="solar:mask-happly-line-duotone"></iconify-icon>
                                <span className="hide-menu">Treeview</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/pages-block-ui.html" className="sidebar-link">
                                <iconify-icon icon="solar:quit-full-screen-square-line-duotone"></iconify-icon>
                                <span className="hide-menu">Block-Ui</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/pages-session-timeout.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:sort-by-time-line-duotone"></iconify-icon>
                                <span className="hide-menu">Session Timeout</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/page-pricing.html" className="sidebar-link">
                                <iconify-icon icon="solar:dollar-line-duotone"></iconify-icon>
                                <span className="hide-menu">Pricing</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/page-faq.html" className="sidebar-link">
                                <iconify-icon icon="solar:question-circle-line-duotone"></iconify-icon>
                                <span className="hide-menu">FAQ</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/page-account-settings.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:settings-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Account Setting</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/starter.html" className="sidebar-link">
                                <iconify-icon icon="solar:file-text-line-duotone"></iconify-icon>
                                <span className="hide-menu">Starter</span>
                            </a>
                            </li>
                            <li>
                            <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                            <span className="hide-menu">Icons</span>
                            </li>
                            <li className="sidebar-item">
                            <a
                                className="sidebar-link sidebar-link"
                                href="./main/icon-tabler.html"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:sticker-smile-circle-2-line-duotone"></iconify-icon>
                                <span className="hide-menu">Tabler Icon</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                className="sidebar-link sidebar-link"
                                href="./main/icon-solar.html"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:sticker-smile-circle-2-line-duotone"></iconify-icon>
                                <span className="hide-menu">Solar Icon</span>
                            </a>
                            </li>
                            <li>
                            <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                            <span className="hide-menu">Widgets</span>
                            </li>

                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/widgets-cards.html">
                                <iconify-icon icon="solar:cardholder-line-duotone"></iconify-icon>
                                <span className="hide-menu">Cards</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/widgets-banners.html">
                                <iconify-icon icon="solar:align-vertical-spacing-line-duotone"></iconify-icon>
                                <span className="hide-menu">Banner</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/widgets-charts.html">
                                <iconify-icon icon="solar:chart-square-line-duotone"></iconify-icon>
                                <span className="hide-menu">Charts</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/widgets-feeds.html">
                                <iconify-icon icon="solar:feed-line-duotone"></iconify-icon>
                                <span className="hide-menu">Feeds</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/widgets-apps.html">
                                <iconify-icon icon="solar:clapperboard-text-line-duotone"></iconify-icon>
                                <span className="hide-menu">Apps</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a className="sidebar-link" href="./main/widgets-data.html">
                                <iconify-icon icon="solar:database-line-duotone"></iconify-icon>
                                <span className="hide-menu">Data</span>
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <nav
                        className="sidebar-nav scroll-sidebar"
                        id="menu-right-mini-4"
                        data-simplebar
                        >
                        <div>
                            <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                                <span className="hide-menu">Forms</span>
                            </li>

                            <li className="sidebar-item">
                                <a
                                className="sidebar-link has-arrow"
                                href="javascript:void(0)"
                                aria-expanded="false"
                                >
                                <iconify-icon icon="solar:text-selection-line-duotone"></iconify-icon>
                                <span className="hide-menu">Forms Elements</span>
                                </a>
                                <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="./main/form-inputs.html" className="sidebar-link">
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Forms Input</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-input-groups.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Input Groups</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-input-grid.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Input Grid</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-checkbox-radio.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Checks & Radios</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-bootstrap-switch.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">BT Switch</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./main/form-select2.html" className="sidebar-link">
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Select2</span>
                                    </a>
                                </li>
                                </ul>
                            </li>

                            <li className="sidebar-item">
                                <a
                                className="sidebar-link has-arrow"
                                href="javascript:void(0)"
                                aria-expanded="false"
                                >
                                <iconify-icon icon="solar:password-minimalistic-input-line-duotone"></iconify-icon>
                                <span className="hide-menu">Forms Inputs</span>
                                </a>
                                <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="./main/form-basic.html" className="sidebar-link">
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Basic Form</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-vertical.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Form Vertical</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-horizontal.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Form Horizontal</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./main/form-actions.html" className="sidebar-link">
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Form Actions</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-row-separator.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Row Separator</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-bordered.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Form Bordered</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./main/form-detail.html" className="sidebar-link">
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Form Detail</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-striped-row.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Striped Rows</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                    href="./main/form-floating-input.html"
                                    className="sidebar-link"
                                    >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Floating Input</span>
                                    </a>
                                </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <a href="./main/form-wizard.html" className="sidebar-link">
                                <iconify-icon icon="solar:archive-line-duotone"></iconify-icon>
                                <span className="hide-menu">Form Wizard</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="./main/form-repeater.html" className="sidebar-link">
                                <iconify-icon icon="solar:repeat-one-minimalistic-bold-duotone"></iconify-icon>
                                <span className="hide-menu">Form Repeater</span>
                                </a>
                            </li>
                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <span className="hide-menu">Addons</span>
                            </li>
                            <li className="sidebar-item">
                                <a href="./main/form-dropzone.html" className="sidebar-link">
                                <iconify-icon icon="solar:flip-horizontal-line-duotone"></iconify-icon>
                                <span className="hide-menu">Dropzone</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="./main/form-mask.html" className="sidebar-link">
                                <iconify-icon icon="solar:mask-happly-line-duotone"></iconify-icon>
                                <span className="hide-menu">Form Mask</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="./main/form-typeahead.html" className="sidebar-link">
                                <iconify-icon icon="solar:high-quality-line-duotone"></iconify-icon>
                                <span className="hide-menu">Form Typehead</span>
                                </a>
                            </li>
                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <span className="hide-menu">Validation</span>
                            </li>
                            <li className="sidebar-item">
                                <a
                                href="./main/form-bootstrap-validation.html"
                                className="sidebar-link"
                                >
                                <iconify-icon icon="solar:shield-warning-line-duotone"></iconify-icon>
                                <span className="hide-menu">BT Validation</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                href="./main/form-custom-validation.html"
                                className="sidebar-link"
                                >
                                <iconify-icon icon="solar:shield-warning-line-duotone"></iconify-icon>
                                <span className="hide-menu">Custom Validation</span>
                                </a>
                            </li>
                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <span className="hide-menu">Pickers</span>
                            </li>
                            <li className="sidebar-item">
                                <a
                                href="./main/form-picker-colorpicker.html"
                                className="sidebar-link"
                                >
                                <iconify-icon icon="solar:waterdrop-line-duotone"></iconify-icon>
                                <span className="hide-menu">Colorpicker</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                href="./main/form-picker-bootstrap-rangepicker.html"
                                className="sidebar-link"
                                >
                                <iconify-icon icon="solar:square-transfer-horizontal-line-duotone"></iconify-icon>
                                <span className="hide-menu">Rangepicker</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                href="./main/form-picker-bootstrap-datepicker.html"
                                className="sidebar-link"
                                >
                                <iconify-icon icon="solar:calendar-date-line-duotone"></iconify-icon>
                                <span className="hide-menu">BT Datepicker</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                href="./main/form-picker-material-datepicker.html"
                                className="sidebar-link"
                                >
                                <iconify-icon icon="solar:smartphone-update-line-duotone"></iconify-icon>
                                <span className="hide-menu">MT Datepicker</span>
                                </a>
                            </li>
                            <li>
                                <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                                <span className="hide-menu">Editors</span>
                            </li>

                            <li className="sidebar-item">
                                <a
                                href="./main/form-editor-quill.html"
                                className="sidebar-link"
                                >
                                <iconify-icon icon="solar:clapperboard-edit-line-duotone"></iconify-icon>
                                <span className="hide-menu">Quill Editor</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                href="./main/form-editor-tinymce.html"
                                className="sidebar-link"
                                >
                                <iconify-icon icon="solar:clapperboard-edit-line-duotone"></iconify-icon>
                                <span className="hide-menu">Tinymce Edtor</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </nav>

                        <nav
                        className="sidebar-nav scroll-sidebar"
                        id="menu-right-mini-5"
                        data-simplebar
                        >
                        <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                            <span className="hide-menu">Bootstrap Tables</span>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/table-basic.html" className="sidebar-link">
                                <iconify-icon icon="solar:tablet-line-duotone"></iconify-icon>
                                <span className="hide-menu">Basic Table</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/table-dark-basic.html" className="sidebar-link">
                                <iconify-icon icon="solar:tablet-line-duotone"></iconify-icon>
                                <span className="hide-menu">Dark Table</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/table-sizing.html" className="sidebar-link">
                                <iconify-icon icon="solar:tablet-line-duotone"></iconify-icon>
                                <span className="hide-menu">Sizing Table</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/table-layout-coloured.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:tablet-line-duotone"></iconify-icon>
                                <span className="hide-menu">Coloured Table</span>
                            </a>
                            </li>
                            <li>
                            <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                            <span className="hide-menu">Datatables</span>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/table-datatable-basic.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:align-horizonta-spacing-line-duotone"></iconify-icon>
                                <span className="hide-menu">Basic</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/table-datatable-api.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:align-horizonta-spacing-line-duotone"></iconify-icon>
                                <span className="hide-menu">API</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/table-datatable-advanced.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:align-horizonta-spacing-line-duotone"></iconify-icon>
                                <span className="hide-menu">Advanced</span>
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <nav
                        className="sidebar-nav scroll-sidebar"
                        id="menu-right-mini-6"
                        data-simplebar
                        >
                        <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                            <span className="hide-menu">Charts</span>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/chart-apex-line.html" className="sidebar-link">
                                <iconify-icon icon="solar:chart-square-line-duotone"></iconify-icon>
                                <span className="hide-menu">Line Chart</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/chart-apex-area.html" className="sidebar-link">
                                <iconify-icon icon="solar:pie-chart-3-line-duotone"></iconify-icon>
                                <span className="hide-menu">Area Chart</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/chart-apex-bar.html" className="sidebar-link">
                                <iconify-icon icon="solar:chart-2-line-duotone"></iconify-icon>
                                <span className="hide-menu">Bar Chart</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/chart-apex-pie.html" className="sidebar-link">
                                <iconify-icon icon="solar:pie-chart-line-duotone"></iconify-icon>
                                <span className="hide-menu">Pie Chart</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/chart-apex-radial.html" className="sidebar-link">
                                <iconify-icon icon="solar:chart-square-line-duotone"></iconify-icon>
                                <span className="hide-menu">Radial Chart</span>
                            </a>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/chart-apex-radar.html" className="sidebar-link">
                                <iconify-icon icon="solar:round-graph-line-duotone"></iconify-icon>
                                <span className="hide-menu">Radar Chart</span>
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <nav
                        className="sidebar-nav scroll-sidebar"
                        id="menu-right-mini-7"
                        data-simplebar
                        >
                        <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                            <span className="hide-menu">Ui</span>
                            </li>

                            <li className="sidebar-item">
                            <a href="./main/ui-accordian.html" className="sidebar-link">
                                <iconify-icon icon="solar:waterdrops-line-duotone"></iconify-icon>
                                <span className="hide-menu">Accordian</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-badge.html" className="sidebar-link">
                                <iconify-icon icon="solar:tag-horizontal-line-duotone"></iconify-icon>
                                <span className="hide-menu">Badge</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-buttons.html" className="sidebar-link">
                                <iconify-icon icon="solar:airbuds-case-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Buttons</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-dropdowns.html" className="sidebar-link">
                                <iconify-icon icon="solar:airbuds-case-line-duotone"></iconify-icon>
                                <span className="hide-menu">Dropdowns</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-modals.html" className="sidebar-link">
                                <iconify-icon icon="solar:bolt-line-duotone"></iconify-icon>
                                <span className="hide-menu">Modals</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-tab.html" className="sidebar-link">
                                <iconify-icon icon="solar:box-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Tab</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-tooltip-popover.html" className="sidebar-link">
                                <iconify-icon icon="solar:feed-line-duotone"></iconify-icon>
                                <span className="hide-menu">Tooltip & Popover</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-notification.html" className="sidebar-link">
                                <iconify-icon icon="solar:flag-line-duotone"></iconify-icon>
                                <span className="hide-menu">Notification</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-progressbar.html" className="sidebar-link">
                                <iconify-icon icon="solar:programming-line-duotone"></iconify-icon>
                                <span className="hide-menu">Progressbar</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-pagination.html" className="sidebar-link">
                                <iconify-icon icon="solar:waterdrops-line-duotone"></iconify-icon>
                                <span className="hide-menu">Pagination</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-typography.html" className="sidebar-link">
                                <iconify-icon icon="solar:text-bold-duotone"></iconify-icon>
                                <span className="hide-menu">Typography</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-bootstrap-ui.html" className="sidebar-link">
                                <iconify-icon icon="solar:balloon-line-duotone"></iconify-icon>
                                <span className="hide-menu">Bootstrap UI</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-breadcrumb.html" className="sidebar-link">
                                <iconify-icon icon="solar:slider-minimalistic-horizontal-line-duotone"></iconify-icon>
                                <span className="hide-menu">Breadcrumb</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-offcanvas.html" className="sidebar-link">
                                <iconify-icon icon="solar:laptop-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Offcanvas</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-lists.html" className="sidebar-link">
                                <iconify-icon icon="solar:checklist-bold-duotone"></iconify-icon>
                                <span className="hide-menu">Lists</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-grid.html" className="sidebar-link">
                                <iconify-icon icon="solar:layers-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Grid</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-carousel.html" className="sidebar-link">
                                <iconify-icon icon="solar:align-horizonta-spacing-line-duotone"></iconify-icon>
                                <span className="hide-menu">Carousel</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-scrollspy.html" className="sidebar-link">
                                <iconify-icon icon="solar:multiple-forward-right-line-duotone"></iconify-icon>
                                <span className="hide-menu">Scrollspy</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-spinner.html" className="sidebar-link">
                                <iconify-icon icon="solar:soundwave-bold-duotone"></iconify-icon>
                                <span className="hide-menu">Spinner</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-link.html" className="sidebar-link">
                                <iconify-icon icon="solar:link-round-angle-bold-duotone"></iconify-icon>
                                <span className="hide-menu">Link</span>
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <nav
                        className="sidebar-nav scroll-sidebar"
                        id="menu-right-mini-8"
                        data-simplebar
                        >
                        <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                            <span className="hide-menu">Components</span>
                            </li>

                            <li className="sidebar-item">
                            <a
                                href="./main/component-sweetalert.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:star-fall-minimalistic-2-line-duotone"></iconify-icon>
                                <span className="hide-menu">Sweet Alert</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/component-nestable.html" className="sidebar-link">
                                <iconify-icon icon="solar:speaker-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Nestable</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/component-noui-slider.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:watch-square-minimalistic-charge-line-duotone"></iconify-icon>
                                <span className="hide-menu">Noui slider</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/component-rating.html" className="sidebar-link">
                                <iconify-icon icon="solar:stars-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Rating</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/component-toastr.html" className="sidebar-link">
                                <iconify-icon icon="solar:station-minimalistic-bold-duotone"></iconify-icon>
                                <span className="hide-menu">Toastr</span>
                            </a>
                            </li>
                            <li>
                            <span className="sidebar-divider lg"></span>
                            </li>
                            <li className="nav-small-cap">
                            <span className="hide-menu">Cards</span>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-cards.html" className="sidebar-link">
                                <iconify-icon icon="solar:bookmark-square-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Basic Cards</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-card-customs.html" className="sidebar-link">
                                <iconify-icon icon="solar:bookmark-square-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Custom Cards</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-card-weather.html" className="sidebar-link">
                                <iconify-icon icon="solar:cloud-snowfall-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Weather Cards</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a href="./main/ui-card-draggable.html" className="sidebar-link">
                                <iconify-icon icon="solar:password-minimalistic-input-line-duotone"></iconify-icon>
                                <span className="hide-menu">Draggable Cards</span>
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <nav
                        className="sidebar-nav scroll-sidebar"
                        id="menu-right-mini-9"
                        data-simplebar
                        >
                        <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                            <span className="hide-menu">Auth</span>
                            </li>

                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-error.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:bug-minimalistic-line-duotone"></iconify-icon>
                                <span className="hide-menu">Error</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-login.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:login-3-line-duotone"></iconify-icon>
                                <span className="hide-menu">Side Login</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-login2.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:login-3-line-duotone"></iconify-icon>
                                <span className="hide-menu">Boxed Login</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-register.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:user-plus-rounded-line-duotone"></iconify-icon>
                                <span className="hide-menu">Side Register</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-register2.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:user-plus-rounded-line-duotone"></iconify-icon>
                                <span className="hide-menu">Boxed Register</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-forgot-password.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:password-outline"></iconify-icon>
                                <span className="hide-menu">Side Forgot Pwd</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-forgot-password2.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:password-outline"></iconify-icon>
                                <span className="hide-menu">Boxed Forgot Pwd</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-two-steps.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:siderbar-line-duotone"></iconify-icon>
                                <span className="hide-menu">Side Two Steps</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-two-steps2.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:siderbar-line-duotone"></iconify-icon>
                                <span className="hide-menu">Boxed Two Steps</span>
                            </a>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="./main/authentication-maintenance.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:settings-line-duotone"></iconify-icon>
                                <span className="hide-menu">Maintenance</span>
                            </a>
                            </li>
                        </ul>
                        </nav>

                        <nav
                        className="sidebar-nav scroll-sidebar"
                        id="menu-right-mini-10"
                        data-simplebar
                        >
                        <ul className="sidebar-menu" id="sidebarnav">
                            <li className="nav-small-cap">
                            <span className="hide-menu">Documentation</span>
                            </li>
                            <li className="sidebar-item">
                            <a
                                href="https://adminmart.github.io/premium-documentation/bootstrap/matdash/index.html"
                                className="sidebar-link"
                            >
                                <iconify-icon icon="solar:settings-line-duotone"></iconify-icon>
                                <span className="hide-menu">Getting Started</span>
                            </a>
                            </li>
                            <li>
                            <span className="sidebar-divider"></span>
                            </li>
                            <li className="nav-small-cap">
                            <span className="hide-menu">Multi level</span>
                            </li>
                            <li className="sidebar-item">
                            <a
                                className="sidebar-link has-arrow primary-hover-bg"
                                href="javascript:void(0)"
                                aria-expanded="false"
                            >
                                <iconify-icon icon="solar:align-left-line-duotone"></iconify-icon>
                                <span className="hide-menu">Menu Level</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                <a href="javascript:void(0)" className="sidebar-link">
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Level 1</span>
                                </a>
                                </li>
                                <li className="sidebar-item">
                                <a
                                    className="sidebar-link has-arrow"
                                    href="javascript:void(0)"
                                    aria-expanded="false"
                                >
                                    <span className="icon-small"></span>
                                    <span className="hide-menu">Level 1.1</span>
                                </a>
                                <ul aria-expanded="false" className="collapse two-level">
                                    <li className="sidebar-item">
                                    <a href="javascript:void(0)" className="sidebar-link">
                                        <span className="icon-small"></span>
                                        <span className="hide-menu">Level 2</span>
                                    </a>
                                    </li>
                                    <li className="sidebar-item">
                                    <a
                                        className="sidebar-link has-arrow"
                                        href="javascript:void(0)"
                                        aria-expanded="false"
                                    >
                                        <span className="icon-small"></span>
                                        <span className="hide-menu">Level 2.1</span>
                                    </a>
                                    <ul
                                        aria-expanded="false"
                                        className="collapse three-level"
                                    >
                                        <li className="sidebar-item">
                                        <a href="javascript:void(0)" className="sidebar-link">
                                            <span className="icon-small"></span>
                                            <span className="hide-menu">Level 3</span>
                                        </a>
                                        </li>
                                        <li className="sidebar-item">
                                        <a href="javascript:void(0)" className="sidebar-link">
                                            <span className="icon-small"></span>
                                            <span className="hide-menu">Level 3.1</span>
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            </li>
                            <li>
                            <span className="sidebar-divider"></span>
                            </li>
                            <li className="nav-small-cap">
                            <span className="hide-menu">More Options</span>
                            </li>
                            <li className="sidebar-item">
                            <div className="sidebar-link">
                                <span className="round-10 rounded-circle d-block bg-primary"></span>
                                <span className="hide-menu">Applications</span>
                            </div>
                            </li>
                            <li className="sidebar-item">
                            <div className="sidebar-link">
                                <span className="round-10 rounded-circle d-block bg-secondary"></span>
                                <span className="hide-menu">Form Options</span>
                            </div>
                            </li>
                            <li className="sidebar-item">
                            <div className="sidebar-link">
                                <span className="round-10 rounded-circle d-block bg-danger"></span>
                                <span className="hide-menu">Table Variations</span>
                            </div>
                            </li>
                            <li className="sidebar-item">
                            <div className="sidebar-link">
                                <span className="round-10 rounded-circle d-block bg-warning"></span>
                                <span className="hide-menu">Charts Selection</span>
                            </div>
                            </li>
                            <li className="sidebar-item">
                            <div className="sidebar-link">
                                <span className="round-10 rounded-circle d-block bg-success"></span>
                                <span className="hide-menu">Widgets</span>
                            </div>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
