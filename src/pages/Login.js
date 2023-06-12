import React, { useState } from "react";
import Box from "@mui/material/Box";
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import userData from "../Data/users.json";

function Login() {
  const navigate = useNavigate();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Username is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "6 characters required"),
    }),
    onSubmit: async (data) => {
      const existingUserName = userData.users.find(
        (user) => user.username === data.username
      );
      const existingPassword = userData.users.find(
        (user) => user.password === data.password
      );
      if (!existingUserName) {
        toast.error("Username not registered!");
      } else if (!existingPassword) {
        toast.error("Wrong password!");
      } else {
        localStorage.setItem("username", data.username)
        toast.success("Login successfully!");
        navigate('/products')
      }
    },
  });

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        backgroundSize: "cover",
      }}
    >
      <Paper
        elevation={4}
        style={{
          borderRadius: 0,
          marginTop: 22,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 360,
          margin: "100px auto",
          padding: 20,
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form style={{ marginTop: 12, width: "100%" }}>
          <TextField
            variant="outlined"
            required
            fullWidth
            type="text"
            name="username"
            id="username"
            label="Username"
            autoComplete="username"
            value={formik?.values?.username}
            onChange={formik.handleChange}
            helperText={formik.touched.username ? formik.errors.username : null}
            error={formik.touched.username ? formik.errors.username : null}
          />
          <FormControl required fullWidth sx={{ mt: 3 }} variant="outlined">
            <InputLabel
              required
              error={formik.touched.password ? formik.errors.password : null}
            >
              Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={secureTextEntry ? "password" : "text"}
              value={formik?.values?.password}
              onChange={formik.handleChange}
              error={formik.touched.password ? formik.errors.password : null}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleSecureEntry}
                    edge="end"
                  >
                    {secureTextEntry ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText error>
              {formik.touched.password ? formik.errors.password : null}
            </FormHelperText>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            style={{ marginTop: 50 }}
            onClick={formik.handleSubmit}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Login;
