import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const AdminForm = () => {
   
    const [formValues, setFormValues] = React.useState({
        isin: '',
        instId: '',
      });
      
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
        //console.log(` ISIN: ${data.get('isin')}, Inst_ID:${data.get('instId')}`);
        console.log(` ISIN: ${formValues.isin}, Inst_ID: ${formValues.instId}`);

        setFormValues({
            isin: '',
            instId: '',
          });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
      };

    const isSubmitDisabled = 
            formValues.isin.trim() === '' || formValues.instId.trim() === '';


    return (
        <Grid container spacing={2}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            size='small'
                            required
                            fullWidth
                            id="isin"
                            label="ISIN"
                            name="isin"
                            autoComplete="isin"
                            autoFocus
                            value={formValues.isin}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            size='small'
                            required
                            fullWidth
                            name="instId"
                            label="INST_ID"
                            type="inistId"
                            id="instId"
                            autoComplete="instId"
                            value={formValues.instId}
                            onChange={handleChange}
                        />
                    </Grid>
                    {/* <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    /> */}
                </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isSubmitDisabled}
                    >
                    Submit
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
};

export default AdminForm;