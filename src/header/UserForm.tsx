import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

//import "./styles.css";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  example: string;
}

const UserForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

 // console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Typography variant="h6">First Name</Typography>
          <TextField
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
            variant="outlined"
            //fullWidth
            size="small"
            error={!!errors?.firstName}
            helperText={
              errors?.firstName?.type === "required"
                ? "This field is required"
                : errors?.firstName?.type === "maxLength"
                ? "First name cannot exceed 20 characters"
                : errors?.firstName?.type === "pattern" && "Alphabetical characters only"
            }
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Last Name</Typography>
          <TextField
            {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
            variant="outlined"
            size="small"
            error={!!errors?.lastName}
            helperText={errors?.lastName?.type === "pattern" && "Alphabetical characters only"}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">Age</Typography>
          <TextField
            {...register("age", { min: 18, max: 99 })}
            variant="outlined"
            size="small"
            type="number"
            error={!!errors.age}
            helperText={errors.age && "You must be older than 18 and younger than 99 years old"}
          />
        </Grid>
        <Grid item xs={3} style={{ display: "flex", alignItems: "flex-end" }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UserForm;


