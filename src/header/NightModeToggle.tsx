import { Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../theme/ThemeContextProvider";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();
  
  return (
    <Box>
      {mode === "dark" ? <Brightness7Icon onClick={toggleColorMode} /> :
                         <Brightness4Icon onClick={toggleColorMode} />}
    </Box>
  );
};

export default NightModeToggle;