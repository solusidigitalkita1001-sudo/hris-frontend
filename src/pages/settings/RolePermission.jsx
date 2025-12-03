import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useTitle } from "../../hooks/useTitle";

export const RolePermission = () => {
  useTitle('Role & Permission')
  const [roles, setRoles] =useState([]);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res =await axios.get(`${import.meta.env.VITE_API_URL}/roles`, {
          headers : {
            Authorization: `Bearer ${token}`,
          }
        })
        setRoles(res.data.data || [])
      } catch (error) {
        toast.error('Gagal mengambil data roles!')
      }
    };
    fetchRoles();
  }, []);

  return (
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
              <h6 className="fs-4 fw-semibold mb-0">Name</h6>
            </th>
            <th>
              <h6 className="fs-4 fw-semibold mb-0">Description</h6>
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="assets/images/profile/user-2.jpg"
                    className="rounded-circle"
                    width={40}
                    height={40}
                  />
                  <div className="ms-3">
                    <h6 className="fs-4 fw-semibold mb-0">{role.name}</h6>
                    <span className="fw-normal">{role.description}</span>
                  </div>
                </div>
              </td>
              <td>
                <span className="badge bg-success-subtle text-success fw-semibold fs-2 gap-1 d-inline-flex align-items-center">
                  <i className="ti ti-circle fs-3" />
                  {role.description}
                </span>
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

          ))}
        </tbody>
      </table>
    </>
  );
}
export default RolePermission;