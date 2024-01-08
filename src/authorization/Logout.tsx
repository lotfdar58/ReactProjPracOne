import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear isLoggedIn in localStorage
        localStorage.removeItem('isLoggedIn');
        // Redirect to the login page
        navigate('/login');
      };
  
  return (
    <Box>
        <Button variant="outlined" 
            onClick={ handleLogout }
        >Logout</Button>
    </Box>
  );
};

export default Logout;