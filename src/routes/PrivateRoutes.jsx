import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import useAuth from '../hooks/useAuth';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner/>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoutes;