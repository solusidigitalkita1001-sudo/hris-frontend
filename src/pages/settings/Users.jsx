import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Users = () => (
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
              src="../assets/images/profile/user-10.jpg"
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
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-4.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-2.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
          </div>
        </td>
        <td>
          <span className="badge bg-primary-subtle text-primary">active</span>
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
              <i className="ti ti-dots-vertical fs-6" />
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
            </div>
          </div>
        </td>
        <td>
          <p className="mb-0 fw-normal">Adminpro admin</p>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-5.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-2.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-3.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
          </div>
        </td>
        <td>
          <span className="badge bg-danger-subtle text-danger">cancel</span>
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
              <i className="ti ti-dots-vertical fs-6" />
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
            </div>
          </div>
        </td>
        <td>
          <p className="mb-0 fw-normal">Monster admin</p>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-3.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-2.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
          </div>
        </td>
        <td>
          <span className="badge bg-primary-subtle text-primary">active</span>
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
              <i className="ti ti-dots-vertical fs-6" />
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
            </div>
          </div>
        </td>
        <td>
          <p className="mb-0 fw-normal">Materialpro admin</p>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-3.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-2.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-5.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
          </div>
        </td>
        <td>
          <span className="badge bg-success-subtle text-success">pending</span>
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
              <i className="ti ti-dots-vertical fs-6" />
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
            </div>
          </div>
        </td>
        <td>
          <p className="mb-0 fw-normal">Elegant admin</p>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-5.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-6.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
          </div>
        </td>
        <td>
          <span className="badge bg-danger-subtle text-danger">cancel</span>
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
              <i className="ti ti-dots-vertical fs-6" />
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
            </div>
          </div>
        </td>
        <td>
          <p className="mb-0 fw-normal">Modernize admin</p>
        </td>
        <td>
          <div className="d-flex align-items-center">
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-2.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
            <a href="javascript:void(0)">
              <img
                src="../assets/images/profile/user-4.jpg"
                className="rounded-circle me-n2 card-hover border border-2 border-white"
                width={39}
                height={39}
              />
            </a>
          </div>
        </td>
        <td>
          <span className="badge bg-success-subtle text-success">pending</span>
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
              <i className="ti ti-dots-vertical fs-6" />
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
);
export default Users;