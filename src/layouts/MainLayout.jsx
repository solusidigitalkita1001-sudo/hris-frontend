import { Outlet } from "react-router-dom";
import Sidebar from "../components/partials/Sidebar";
import Header from "../components/partials/Header";


const MainLayout = () => {
    return (
        <div id="main-wrapper">
            <Sidebar />

            <div className="page-wrapper">
                <Header />

                <div className="body-wrapper">
                    <div className="container-fluid">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
