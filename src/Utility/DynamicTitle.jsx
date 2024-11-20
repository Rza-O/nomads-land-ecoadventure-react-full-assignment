import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        let pageTitle = '';


        switch (true) {
            case location.pathname === '/':
                pageTitle = "Home - Nomad's Land";
                break;
            case location.pathname.startsWith('/details/'):
                pageTitle = 'Adventure Details - Nomad\'s Land'; 
                break;
            case location.pathname === '/profile':
                pageTitle = "Profile - Nomad's Land";
                break;
            case location.pathname === '/profile/update':
                pageTitle = "Update Profile - Nomad's Land";
                break;
            case location.pathname === '/login':
                pageTitle = "Login - Nomad's Land";
                break;
            case location.pathname === '/register':
                pageTitle = "Sign Up - Nomad's Land";
                break;
            default:
                pageTitle = "Nomad's Land"; 
        }

        document.title = pageTitle;
    }, [location]);



    return null;
};

export default DynamicTitle;