import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { TiUserAdd } from "react-icons/ti";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const AddUser = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formSchema = zod.object({
    name: zod
      .string()
      .trim()
      .min(3, "Name must be at least 3 characters long")
      .max(20, "Name must be at most 20 characters long"),
    email: zod.string().trim().email("Email is invalid"),
    role: zod.string().min(1, "Role can't be empty"),
    status: zod.string().min(1, "Status can't be empty"),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues:{
      name:"",
      email:"",
      role:"",
      status:"",
    },
  });

 const submitForm=async(formData)=>{
  const url="https://641d322b1a68dc9e4618d8d4.mockapi.io/users";
  await axios.post(url,formData);
  reset();
  setOpen(true);
  setTimeout(()=>{
    navigate("/");
  },1000)
 }

  return (
    <Box  sx={{
        height: "94.8vh",
        overflowY: "auto",
        overflowX: "hidden",
        
      }}>
      <Typography variant="body1" sx={{ mb: "20px" }}>
        Users / Add User
      </Typography>
      <Typography variant="h3" component={"h3"}>
        Add User
      </Typography>
      <Typography variant="h6" component={"h6"} sx={{ color: "gray" }}>
        Create a new user by filling out this form.
      </Typography>
      <Box
        component={"form"}
        sx={{
          width: { xs: "88%", sm: "80%", md: "80%" },
          boxShadow: 5,
          borderRadius: 3,
          height: "max-content",
          mt: "20px",
          padding: "20px",
          mb:"30px"
        }}
        onSubmit={handleSubmit(submitForm)}
      >
        <Box sx={{ display: "flex", flexDirection: "column", mb: "10px" }}>
          <Typography variant="h6" component={"label"} htmlFor="name">
            Name
          </Typography>
          <TextField
            variant="outlined"
            id="name"
            name="name"
            type="text"
            label="Enter full name"
            size="small"
            sx={{ mt: "10px", mb: "5px" }}
            fullWidth
            {...register("name")}
          />
          {errors.name && (
            <Typography variant="p" component={"p"} color="error">
              {errors.name.message}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", mb: "10px" }}>
          <Typography variant="h6" component={"label"} htmlFor="email">
            Email
          </Typography>
          <TextField
            variant="outlined"
            id="email"
            name="email"
            type="text"
            label="Enter email address"
            size="small"
            sx={{ mt: "10px", mb: "5px" }}
            fullWidth
            {...register("email")}
          />
          {errors.email && (
            <Typography variant="p" component={"p"} color="error">
              {errors.email.message}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", mb: "10px" }}>
          <Typography variant="h6" component={"label"}>
            Role
          </Typography>
          <FormControl fullWidth sx={{ mt: "10px", mb: "5px" }} size="small">
            <InputLabel id="demo-simple-select-label">
              Select your role
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Select your role"
              {...register("role")}
              value={watch("role")}
            >
              <MenuItem value={"Admin"}>Admin</MenuItem>
              <MenuItem value={"Editor"}>Editor</MenuItem>
              <MenuItem value={"User"}>User</MenuItem>
            </Select>
          </FormControl>
          {errors.role && (
            <Typography variant="p" component={"p"} color="error">
              {errors.role.message}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", mb: "10px" }}>
          <Typography variant="h6" component={"label"}>
            Status
          </Typography>
          <FormControl fullWidth sx={{ mt: "10px", mb: "10px" }} size="small">
            <InputLabel id="demo-simple-select-label">Select status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Select status"
              {...register("status")}
              value={watch("status")}
            >
              <MenuItem value={"Active"}>Active</MenuItem>
              <MenuItem value={"Inactive"}>Inactive</MenuItem>
              <MenuItem value={"Blocked"}>Blocked</MenuItem>
            </Select>
          </FormControl>
          {errors.status && (
            <Typography variant="p" component={"p"} color="error">
              {errors.status.message}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: "5px",
            justifyContent: "flex-end",

          }}
        >
          <Button
            type="button"
            variant="outlined"
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              background: "linear-gradient(180deg, #2A1E8C 0%, #1A124F 100%)",
              color:"white",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            // onClick={handleAdd}
          >
            <TiUserAdd size={20} />
            Add User
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          User Added Successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddUser;
