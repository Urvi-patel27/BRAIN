import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToHome = () => {
    const navigate = useNavigate(); // Navigation ke liye hook use kar rahe hain

    useEffect(() => {
        navigate("/"); // Jab bhi component mount hoga, home page pe redirect karega
    }, [navigate]);

    return null; // Yeh component sirf redirect ka kaam karega, kuch return nahi karega
};

export default RedirectToHome;
