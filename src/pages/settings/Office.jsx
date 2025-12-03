import { useState } from 'react';
import { useTitle } from "../../hooks/useTitle";

const Office = () => {
  useTitle('Office')
  const [activeTab, setActiveTab] = useState('groups');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="card card-body py-3">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-sm-flex align-items-center justify-space-between">
              <h4 className="mb-4 mb-sm-0 card-title">Office</h4>
              <nav aria-label="breadcrumb" className="ms-auto">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <a
                      className="text-muted text-decoration-none d-flex"
                      href="/dashboard"
                    >
                      <iconify-icon
                        icon="solar:home-2-line-duotone"
                        className="fs-6"
                      />
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <span className="badge fw-medium fs-2 bg-primary-subtle text-primary">
                      Office
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav nav-pills p-3 mb-3 rounded align-items-center card flex-row">
        <li className="nav-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick('groups');
            }}
            className={`nav-link gap-6 note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 fs-11 ${
              activeTab === 'groups' ? 'active' : ''
            }`}
            id="data-groups"
          >
            <i className="ti ti-list fill-white" />
            <span className="d-none d-md-block fw-medium">Groups</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick('offices');
            }}
            className={`nav-link gap-6 note-link d-flex align-items-center justify-content-center px-3 px-md-3 me-0 me-md-2 fs-11 ${
              activeTab === 'offices' ? 'active' : ''
            }`}
            id="data-offices"
          >
            <i className="ti ti-briefcase fill-white" />
            <span className="d-none d-md-block fw-medium">Offices</span>
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="note-full-container" className="note-has-grid row">
          {activeTab === 'groups' && (
            <div className="col-md-12 single-note-item data-groups">
              <table className="table text-nowrap mb-0 align-middle">
                <thead className="text-dark fs-4">
                  <tr>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">User</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Project Name</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Users</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Status</h6>
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/40x40/6366f1/fff?text=OR"
                          className="rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div className="ms-3">
                          <h6 className="fs-4 fw-semibold mb-0">Olivia Rhye</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 fw-normal">Xtreme admin</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/39x39/f59e0b/fff?text=U1"
                          className="rounded-circle me-n2 card-hover border border-2 border-white"
                          width={39}
                          height={39}
                        />
                        <img
                          src="https://placehold.co/39x39/8b5cf6/fff?text=U2"
                          className="rounded-circle me-n2 card-hover border border-2 border-white"
                          width={39}
                          height={39}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary-subtle text-primary">
                        active
                      </span>
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical fs-6" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-plus" />
                              Add
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-edit" />
                              Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-trash" />
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/40x40/ec4899/fff?text=BS"
                          className="rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div className="ms-3">
                          <h6 className="fs-4 fw-semibold mb-0">Barbara Steele</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 fw-normal">Adminpro admin</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/39x39/10b981/fff?text=U1"
                          className="rounded-circle me-n2 card-hover border border-2 border-white"
                          width={39}
                          height={39}
                        />
                        <img
                          src="https://placehold.co/39x39/f59e0b/fff?text=U2"
                          className="rounded-circle me-n2 card-hover border border-2 border-white"
                          width={39}
                          height={39}
                        />
                        <img
                          src="https://placehold.co/39x39/8b5cf6/fff?text=U3"
                          className="rounded-circle me-n2 card-hover border border-2 border-white"
                          width={39}
                          height={39}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-danger-subtle text-danger">
                        cancel
                      </span>
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a href="#" className="text-muted">
                          <i className="ti ti-dots-vertical fs-6" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/40x40/3b82f6/fff?text=LG"
                          className="rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div className="ms-3">
                          <h6 className="fs-4 fw-semibold mb-0">Leonard Gordon</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="mb-0 fw-normal">Monster admin</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/39x39/ef4444/fff?text=U1"
                          className="rounded-circle me-n2 card-hover border border-2 border-white"
                          width={39}
                          height={39}
                        />
                        <img
                          src="https://placehold.co/39x39/8b5cf6/fff?text=U2"
                          className="rounded-circle me-n2 card-hover border border-2 border-white"
                          width={39}
                          height={39}
                        />
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-primary-subtle text-primary">
                        active
                      </span>
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a href="#" className="text-muted">
                          <i className="ti ti-dots-vertical fs-6" />
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'offices' && (
            <div className="col-md-12 single-note-item data-offices">
              <table className="table text-nowrap mb-0 align-middle">
                <thead className="text-dark fs-4">
                  <tr>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Customer</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Status</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Email Address</h6>
                    </th>
                    <th>
                      <h6 className="fs-4 fw-semibold mb-0">Teams</h6>
                    </th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/40x40/6366f1/fff?text=OR"
                          className="rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div className="ms-3">
                          <h6 className="fs-4 fw-semibold mb-0">Olivia Rhye</h6>
                          <span className="fw-normal">@rhye</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-success-subtle text-success fw-semibold fs-2 gap-1 d-inline-flex align-items-center">
                        <i className="ti ti-circle fs-3" />
                        active
                      </span>
                    </td>
                    <td>
                      <p className="mb-0 fw-normal">olivia@ui.com</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge text-bg-primary">Design</span>
                        <span className="badge text-bg-secondary">Product</span>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical fs-6" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-plus" />
                              Add
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-edit" />
                              Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-trash" />
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/40x40/ec4899/fff?text=BS"
                          className="rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div className="ms-3">
                          <h6 className="fs-4 fw-semibold mb-0">Barbara Steele</h6>
                          <span className="fw-normal">@steele</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge text-bg-light text-dark fw-semibold fs-2 gap-1 d-inline-flex align-items-center">
                        <i className="ti ti-clock-hour-4 fs-3" />
                        offline
                      </span>
                    </td>
                    <td>
                      <p className="mb-0 fw-normal">steele@ui.com</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge text-bg-secondary">Product</span>
                        <span className="badge text-bg-danger">Operations</span>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical fs-6" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-plus" />
                              Add
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-edit" />
                              Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-trash" />
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://placehold.co/40x40/3b82f6/fff?text=LG"
                          className="rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div className="ms-3">
                          <h6 className="fs-4 fw-semibold mb-0">Leonard Gordon</h6>
                          <span className="fw-normal">@gordon</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge bg-success-subtle text-success fw-semibold fs-2 gap-1 d-inline-flex align-items-center">
                        <i className="ti ti-circle fs-3" />
                        active
                      </span>
                    </td>
                    <td>
                      <p className="mb-0 fw-normal">gordon@ui.com</p>
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <span className="badge text-bg-primary">Finance</span>
                        <span className="badge text-bg-success">Customer Success</span>
                      </div>
                    </td>
                    <td>
                      <div className="dropdown dropstart">
                        <a
                          href="#"
                          className="text-muted"
                          data-bs-toggle="dropdown"
                        >
                          <i className="ti ti-dots-vertical fs-6" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-plus" />
                              Add
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-edit" />
                              Edit
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#">
                              <i className="fs-4 ti ti-trash" />
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Office;