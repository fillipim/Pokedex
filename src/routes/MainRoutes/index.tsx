import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";


const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
    </Routes>
);

export default MainRoutes;