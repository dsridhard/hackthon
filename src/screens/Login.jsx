import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import '../assets/css/Login.css'
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Initialize the hook

  const onSubmit = (data) => {
    // Handle form submission logic
    console.log(data);
    navigate("/registration");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <TextField
        fullWidth
        label="Employee Id"
        name="Employee Id"
        {...register("username", { required: true })}
        margin="normal"
        variant="outlined"
        error={!!errors.username}
        helperText={
          errors.username?.type === "required" && "Employee Id is required"
        }
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Login;
