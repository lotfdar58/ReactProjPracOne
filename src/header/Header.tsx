import { Grid, Stack, Typography } from "@mui/material";
import NightModeToggle from "./NightModeToggle";
import Logout from "../authorization/Logout";

export default function Header() {
  return (
      <Grid container 
            className="headerContainer"      
            justifyContent="space-between"
            alignItems="center"
            sx={{
                width: '100%',
                padding: '10px',
                textAlign: 'center',
            }}
      >
        <Grid item>
          <Typography variant="h6" color={(theme) => theme.palette.text.primary}>
            Header Left Text
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color={(theme) => theme.palette.text.primary}>
            Header Middle Text
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction="row" spacing={2}>
            <NightModeToggle />
            <Logout />
          </Stack>
        </Grid>
      </Grid>
  );
}
