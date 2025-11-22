import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const RolePermission = () => (
  <>
    <div className="card card-body py-3">
      <div className="row align-items-center">
        <div className="col-12">
          <div className="d-sm-flex align-items-center justify-space-between">
            <h4 className="mb-4 mb-sm-0 card-title">Role & Permission</h4>
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
                    Role & Permission
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
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
                src="assets/images/profile/user-2.jpg"
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
                href="javascript:void(0)"
                className="text-muted"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ti ti-dots fs-5" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-plus" />
                    Add
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-edit" />
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
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
                src="../assets/images/profile/user-2.jpg"
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
                href="javascript:void(0)"
                className="text-muted"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ti ti-dots fs-5" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-plus" />
                    Add
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-edit" />
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
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
                src="../assets/images/profile/user-3.jpg"
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
            <p className="mb-0 fw-normal">olivia@ui.com</p>
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
                href="javascript:void(0)"
                className="text-muted"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ti ti-dots fs-5" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-plus" />
                    Add
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-edit" />
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
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
                src="../assets/images/profile/user-4.jpg"
                className="rounded-circle"
                width={40}
                height={40}
              />
              <div className="ms-3">
                <h6 className="fs-4 fw-semibold mb-0">Evelyn Pope</h6>
                <span className="fw-normal">@pope</span>
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
              <span className="badge text-bg-danger">Operations</span>
              <span className="badge text-bg-primary">Design</span>
            </div>
          </td>
          <td>
            <div className="dropdown dropstart">
              <a
                href="javascript:void(0)"
                className="text-muted"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ti ti-dots fs-5" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-plus" />
                    Add
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-edit" />
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
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
                src="../assets/images/profile/user-5.jpg"
                className="rounded-circle"
                width={40}
                height={40}
              />
              <div className="ms-3">
                <h6 className="fs-4 fw-semibold mb-0">Tommy Garza</h6>
                <span className="fw-normal">@garza</span>
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
              <span className="badge text-bg-secondary">Product</span>
            </div>
          </td>
          <td>
            <div className="dropdown dropstart">
              <a
                href="javascript:void(0)"
                className="text-muted"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ti ti-dots fs-5" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-plus" />
                    Add
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-edit" />
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
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
                src="../assets/images/profile/user-6.jpg"
                className="rounded-circle"
                width={40}
                height={40}
              />
              <div className="ms-3">
                <h6 className="fs-4 fw-semibold mb-0">James Smith</h6>
                <span className="fw-normal">@vasquez</span>
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
            <p className="mb-0 fw-normal">steele@ui.com</p>
          </td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <span className="badge text-bg-success">Customer Success</span>
            </div>
          </td>
          <td>
            <div className="dropdown dropstart">
              <a
                href="javascript:void(0)"
                className="text-muted"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="ti ti-dots fs-5" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-plus" />
                    Add
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
                    <i className="fs-4 ti ti-edit" />
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center gap-3"
                    href="javascript:void(0)"
                  >
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
  </>
);
export default RolePermission;