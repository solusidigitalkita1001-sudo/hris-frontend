import { useEffect } from 'react'
import ApexCharts from 'apexcharts'
const Dashboard = () => {
        useEffect(() => {
        // Contoh membuat chart manual
        const chartOptions = {
            series: [44, 55, 13, 43],
            chart: {
                type: 'donut',
                height: 300
            },
            labels: ['Present', 'Late', 'Leave', 'Absent']
        }

        const chartElement = document.querySelector("#myChart")
        if (chartElement) {
            const chart = new ApexCharts(chartElement, chartOptions)
            chart.render()

            return () => chart.destroy()
        }
    }, [])
    return (
        <div className="row">
            <div className="col-lg-12">
                <h2 className="fw-bold mb-4">Dashboard</h2>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                            <div className="round-40 rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center me-3">
                                <i className="ti ti-users fs-6 text-primary"></i>
                            </div>
                            <div>
                                <h6 className="fw-semibold text-muted mb-1">Total Employees</h6>
                                <h4 className="mb-0 fw-bold">150</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                    <div className="round-40 rounded-circle bg-success-subtle d-flex align-items-center justify-content-center me-3">
                        <i className="ti ti-check fs-6 text-success"></i>
                    </div>
                    <div>
                        <h6 className="fw-semibold text-muted mb-1">Present Today</h6>
                        <h4 className="mb-0 fw-bold">145</h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <div className="round-40 rounded-circle bg-warning-subtle d-flex align-items-center justify-content-center me-3">
                            <i className="ti ti-calendar-off fs-6 text-warning"></i>
                        </div>
                        <div>
                            <h6 className="fw-semibold text-muted mb-1">On Leave</h6>
                            <h4 className="mb-0 fw-bold">5</h4>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title fw-semibold mb-4">Recent Activity</h5>
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Employee</th>
                                <th>Action</th>
                                <th>Time</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Clock In</td>
                                <td>08:00 AM</td>
                                <td>
                                <span className="badge bg-success">On Time</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Jane Smith</td>
                                <td>Clock In</td>
                                <td>08:15 AM</td>
                                <td>
                                <span className="badge bg-warning">Late</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
