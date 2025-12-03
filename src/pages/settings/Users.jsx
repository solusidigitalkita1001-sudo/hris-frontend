import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { UserFormModal } from "../../components/modals/UserFormModal";
import { useTitle } from "../../hooks/useTitle";
export const Users = () => {
  useTitle('User Management')
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchUsers = async (signal) => {
    setLoading(true);
    try {
      // Ambil token fresh setiap kali fetch
      const token = localStorage.getItem("access_token");

      const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        signal: signal, // Tambahkan abort signal
      });

      setUsers(res.data.users);
      console.log("Users berhasil di-fetch:", res.data.users);
    } catch (error) {
      // Jangan tampilkan error kalau request di-cancel
      if (error.name !== 'CanceledError' && error.code !== 'ERR_CANCELED') {
        console.error("Error fetch users:", error.response?.data);
        toast.error(error.response?.data?.message || "Gagal mengambil data user!");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal);

    // Cleanup function: cancel request kalau component unmount
    return () => {
      controller.abort();
    };
  }, []);

  // Handle refresh button
  const handleRefresh = () => {
    const controller = new AbortController();
    fetchUsers(controller.signal);
  };

  return (
    <>
      <div className="card card-body py-3">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="d-sm-flex align-items-center justify-space-between">
              <h4 className="mb-4 mb-sm-0 card-title">Users</h4>
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
                      Users
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-group float-end mb-4" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleRefresh}
          disabled={loading}
        >
          <iconify-icon
            icon="flowbite:refresh-outline"
            width="24"
            height="24"
          />
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          id="create_user"
          data-bs-toggle="modal"
          data-bs-target="#formUserModal"
        >
          <iconify-icon
            icon="icons8:create-new"
            width="24"
            height="24"
          />
        </button>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table text-nowrap mb-0 align-middle">
          <thead className="text-dark fs-4">
            <tr>
              <th>
                <h6 className="fs-4 fw-semibold mb-0">User</h6>
              </th>
              <th>
                <h6 className="fs-4 fw-semibold mb-0">Role</h6>
              </th>
              <th>
                <h6 className="fs-4 fw-semibold mb-0">Permissions</h6>
              </th>
              <th>
                <h6 className="fs-4 fw-semibold mb-0">Status</h6>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  <p className="text-muted mb-0">Tidak ada data user</p>
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src="../assets/images/profile/user-3.jpg"
                        className="rounded-circle"
                        width={40}
                        height={40}
                        alt={u.name}
                      />
                      <div className="ms-3">
                        <h6 className="fs-4 fw-semibold mb-0">{u.name}</h6>
                        <span className="text-muted">{u.email}</span>
                      </div>
                    </div>
                  </td>

                  {/* Role */}
                  <td>{u.roles?.[0]?.name || "-"}</td>

                  {/* Permissions */}
                  <td>
                    {u.roles?.[0]?.permissions?.length > 0 ? (
                      u.roles[0].permissions.map((p) => (
                        <span key={p.id} className="badge bg-primary mx-1">
                          {p.name}
                        </span>
                      ))
                    ) : (
                      "-"
                    )}
                  </td>

                  {/* Status */}
                  <td>
                    <span className="badge bg-success-subtle text-success">
                      active
                    </span>
                  </td>

                  {/* Action */}
                  <td>
                    <div className="dropdown dropstart">
                      <a
                        href="#"
                        className="text-muted"
                        data-bs-toggle="dropdown"
                        aria-label="Actions"
                      >
                        <i className="ti ti-dots-vertical fs-6" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Edit
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}

      <UserFormModal fetchUsers={() => fetchUsers()} />
    </>
  );
};

export default Users;