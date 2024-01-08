import React, { FormEvent } from "react";
import { Modal, Button, TextField, Box, Typography, Grid } from "@mui/material";
import { ProductRowType } from "./ProductComponentGrid";
import { modalStyle } from "../styles";
//import styles from "./Product.module.css";

type ProductModalType = { 
    isOpen: boolean;
    onClose: () => void;
    selectedRow: ProductRowType | null;
}

// const style = {
//     position: 'absolute' as 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 600,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//   };

const ProductModalFormComponent: React.FC<ProductModalType> = ({ isOpen, onClose, selectedRow} ) => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //Handle form submission logic here
    console.log("Form submitted:", selectedRow);
    onClose();
  };

  return (
    <Modal 
        open={isOpen} 
        onClose={onClose}
        aria-labelledby="product modal"
        aria-describedby="product modal"
        >
       <Box sx={{ ...modalStyle }}>
            <Typography variant="h5" sx={{mb:2}} mt={2}>Product Detail</Typography>
            <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label="Id" defaultValue={selectedRow?.id} fullWidth type="number" disabled/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Name" defaultValue={selectedRow?.name} fullWidth disabled/>
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Age" defaultValue={selectedRow?.email} fullWidth disabled/>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "20px" }}
                    >
                        Save Changes
                    </Button>
                </Grid>
            </Grid>
            </form>
      </Box>
    </Modal>
  );
};

export default ProductModalFormComponent;
