import { Link } from "react-router-dom";
const Sidebar2 = () => {
  return (
    <aside className="left-sidebar with-horizontal">
      <div>
        <nav
          id="sidebarnavh"
          className="sidebar-nav scroll-sidebar container-fluid"
        >
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:layers-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/index.html" className="sidebar-link">
                    <i className="ti ti-aperture" />
                    <span className="hide-menu">Dashboard 1</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/index2.html" className="sidebar-link">
                    <i className="ti ti-shopping-cart" />
                    <span className="hide-menu">Dashboard 2</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/index3.html" className="sidebar-link">
                    <i className="ti ti-atom" />
                    <span className="hide-menu">Dashboard 3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Front Pages</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span className="rounded-3">
                  <iconify-icon
                    icon="solar:home-angle-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">Front Pages</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./main/frontend-landingpage.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-circle" />
                    </span>
                    <span className="hide-menu">Homepage</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="./main/frontend-aboutpage.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-circle" />
                    </span>
                    <span className="hide-menu">About Us</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="./main/frontend-blogpage.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-circle" />
                    </span>
                    <span className="hide-menu">Blog</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="./main/frontend-blogdetailpage.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-circle" />
                    </span>
                    <span className="hide-menu">Blog Details</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="./main/frontend-contactpage.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-circle" />
                    </span>
                    <span className="hide-menu">Contact Us</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="./main/frontend-portfoliopage.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-circle" />
                    </span>
                    <span className="hide-menu">Portfolio</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link sidebar-link"
                    href="./main/frontend-pricingpage.html"
                    aria-expanded="false"
                  >
                    <span className="rounded-3">
                      <i className="ti ti-circle" />
                    </span>
                    <span className="hide-menu">Pricing</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Apps</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link two-column has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:widget-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">Apps</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/app-calendar.html" className="sidebar-link">
                    <i className="ti ti-calendar" />
                    <span className="hide-menu">Calendar</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/apps-kanban.html" className="sidebar-link">
                    <i className="ti ti-layout-kanban" />
                    <span className="hide-menu">Kanban</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/app-chat.html" className="sidebar-link">
                    <i className="ti ti-message-dots" />
                    <span className="hide-menu">Chat</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./main/app-email.html"
                    aria-expanded="false"
                  >
                    <span>
                      <i className="ti ti-mail" />
                    </span>
                    <span className="hide-menu">Email</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/app-contact.html" className="sidebar-link">
                    <i className="ti ti-phone" />
                    <span className="hide-menu">Contact Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/app-contact2.html" className="sidebar-link">
                    <i className="ti ti-list-details" />
                    <span className="hide-menu">Contact List</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/app-notes.html" className="sidebar-link">
                    <i className="ti ti-notes" />
                    <span className="hide-menu">Notes</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/app-invoice.html" className="sidebar-link">
                    <i className="ti ti-file-text" />
                    <span className="hide-menu">Invoice</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/page-user-profile.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-user-circle" />
                    <span className="hide-menu">User Profile</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/blog-posts.html" className="sidebar-link">
                    <i className="ti ti-article" />
                    <span className="hide-menu">Posts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/blog-detail.html" className="sidebar-link">
                    <i className="ti ti-details" />
                    <span className="hide-menu">Detail</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/eco-shop.html" className="sidebar-link">
                    <i className="ti ti-shopping-cart" />
                    <span className="hide-menu">Shop</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/eco-shop-detail.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-basket" />
                    <span className="hide-menu">Shop Detail</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/eco-product-list.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-list-check" />
                    <span className="hide-menu">List</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/eco-checkout.html" className="sidebar-link">
                    <i className="ti ti-brand-shopee" />
                    <span className="hide-menu">Checkout</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./main/eco-add-product.html"
                  >
                    <i className="ti ti-file-plus" />
                    <span className="hide-menu">Add Product</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./main/eco-edit-product.html"
                  >
                    <i className="ti ti-file-pencil" />
                    <span className="hide-menu">Edit Product</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">PAGES</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span>
                  <iconify-icon
                    icon="solar:notes-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">Pages</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/page-faq.html" className="sidebar-link">
                    <i className="ti ti-help" />
                    <span className="hide-menu">FAQ</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/page-account-settings.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-user-circle" />
                    <span className="hide-menu">Account Setting</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/page-pricing.html" className="sidebar-link">
                    <i className="ti ti-currency-dollar" />
                    <span className="hide-menu">Pricing</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/widgets-cards.html" className="sidebar-link">
                    <i className="ti ti-cards" />
                    <span className="hide-menu">Card</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/widgets-banners.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-ad" />
                    <span className="hide-menu">Banner</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/widgets-charts.html" className="sidebar-link">
                    <i className="ti ti-chart-bar" />
                    <span className="hide-menu">Charts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/starter.html" className="sidebar-link">
                    <i className="ti ti-file" />
                    <span className="hide-menu">Starter</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./landingpage/index.html" className="sidebar-link">
                    <i className="ti ti-app-window" />
                    <span className="hide-menu">Landing Page</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/icon-tabler.html" className="sidebar-link">
                    <i className="ti ti-mood-smile" />
                    <span className="hide-menu">Tabler Icon</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/icon-solar.html" className="sidebar-link">
                    <i className="ti ti-mood-smile" />
                    <span className="hide-menu">Solar Icon</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">UI</span>
            </li>
            <li className="sidebar-item mega-dropdown">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span className="rounded-3">
                  <iconify-icon
                    icon="solar:archive-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">UI</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/ui-accordian.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Accordian</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-badge.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Badge</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-buttons.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Buttons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-dropdowns.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Dropdowns</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-modals.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Modals</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-tab.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Tab</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-tooltip-popover.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Tooltip &amp; Popover</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-notification.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Notification</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-progressbar.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Progressbar</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-pagination.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Pagination</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-typography.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/ui-bootstrap-ui.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Bootstrap UI</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-breadcrumb.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Breadcrumb</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-offcanvas.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Offcanvas</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-lists.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Lists</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-grid.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Grid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-carousel.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Carousel</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-scrollspy.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Scrollspy</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-spinner.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Spinner</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/ui-link.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Link</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Forms</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link two-column has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span className="rounded-3">
                  <iconify-icon
                    icon="solar:folder-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">Forms</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/form-inputs.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Forms Input</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-input-groups.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Input Groups</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-input-grid.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Input Grid</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-checkbox-radio.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Checkbox &amp; Radios</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-bootstrap-switch.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Bootstrap Switch</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-select2.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Select2</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-basic.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Basic Form</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-vertical.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Vertical</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-horizontal.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Horizontal</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-actions.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Actions</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-row-separator.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Row Separator</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-bordered.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Bordered</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-detail.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Detail</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/form-wizard.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Form Wizard</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-editor-quill.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Quill Editor</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/form-editor-tinymce.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Tinymce Editor</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Tables</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span className="rounded-3">
                  <iconify-icon
                    icon="solar:tuning-square-2-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">Tables</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a href="./main/table-basic.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Basic Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/table-dark-basic.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Dark Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/table-sizing.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Sizing Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/table-layout-coloured.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Coloured Table</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/table-datatable-basic.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Basic Initialisation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/table-datatable-api.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">API</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/table-datatable-advanced.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Advanced</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4" />
              <span className="hide-menu">Charts</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span className="rounded-3">
                  <iconify-icon
                    icon="solar:chart-square-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="./main/chart-apex-line.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Line Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/chart-apex-area.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Area Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/chart-apex-bar.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Bar Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="./main/chart-apex-pie.html" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Pie Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/chart-apex-radial.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Radial Chart</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    href="./main/chart-apex-radar.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Radar Chart</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link has-arrow"
                href="#"
                aria-expanded="false"
              >
                <span className="rounded-3">
                  <iconify-icon
                    icon="solar:airbuds-case-minimalistic-line-duotone"
                    className="ti"
                  />
                </span>
                <span className="hide-menu">Multi DD</span>
              </a>
              <ul aria-expanded="false" className="collapse first-level">
                <li className="sidebar-item">
                  <a
                    href="https://adminmart.github.io/premium-documentation/bootstrap/matdash/index.html"
                    className="sidebar-link"
                  >
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Documentation</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Page 1</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link has-arrow">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Page 2</span>
                  </a>
                  <ul aria-expanded="false" className="collapse second-level">
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <i className="ti ti-circle" />
                        <span className="hide-menu">Page 2.1</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <i className="ti ti-circle" />
                        <span className="hide-menu">Page 2.2</span>
                      </a>
                    </li>
                    <li className="sidebar-item">
                      <a href="#" className="sidebar-link">
                        <i className="ti ti-circle" />
                        <span className="hide-menu">Page 2.3</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">
                    <i className="ti ti-circle" />
                    <span className="hide-menu">Page 3</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar2;
