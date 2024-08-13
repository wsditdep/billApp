import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtechtedRoute = () => {
    const { isAuthenticated } = useSelector(state => state.user);

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/" />
    );
}

export default ProtechtedRoute;