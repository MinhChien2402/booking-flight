import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = ({ allowedRoles }) => {
    const auth = JSON.parse(localStorage.getItem('auth')) || {};
    const isAuthorized = auth?.role && allowedRoles.includes(auth.role);

    return isAuthorized ? <Outlet /> : <Navigate to="/login" replace />;
};

export default RequireAuth;
