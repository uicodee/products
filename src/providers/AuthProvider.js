import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn')
        if (loggedIn === null) {
            navigate("/login")
        }
    }, [navigate]);
    return (
        <>{children}</>
    )
}
