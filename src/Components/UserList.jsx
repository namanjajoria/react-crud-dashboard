import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  boxShadow: "none",
  padding: "10px",
  height: "max-content",
}));

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState({ nameEmail: "", role: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSearch((pre) => ({ ...pre, [name]: value }));
  };

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const getApiData = async () => {
    try {
      const url = "https://641d322b1a68dc9e4618d8d4.mockapi.io/users";
      const response = await axios.get(url);
      console.log("ApiData=", response.data);
      setUsers(response.data);
      setFilteredUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getApiData();
  }, []);

  useEffect(() => {
    let updatedData = users;

    // Filter by name or email:-
    if (search.nameEmail) {
      updatedData = updatedData.filter(
        (user) =>
          user.name
            .toLowerCase()
            .includes(search.nameEmail.toLocaleLowerCase()) ||
          user.email.toLowerCase().includes(search.nameEmail),
      );
    }

    if (search.role) {
      updatedData = updatedData.filter((user) => user.role === search.role);
    }
    setFilteredUsers(updatedData);
  }, [search.nameEmail, search.role, users]);

  const handleReset = () => {
    setSearch({ nameEmail: "", role: "" });
    setFilteredUsers(users);
  };

  const handleDelete = async (id) => {
    await axios.delete(
      `https://641d322b1a68dc9e4618d8d4.mockapi.io/users/${id}`,
    );
    getApiData();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "role", headerName: "Role", width: 150 },
    { field: "status", headerName: "Status", width: 150 },

    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <>
          <Box
            sx={{ display: "flex", gap: 2, mt: "5px", alignItems: "center" }}
          >
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={() => navigate(`update-user/${params.row.id}`)}
            >
              <MdOutlineEdit size={25} />
            </Button>

            <Button
              type="button"
              variant="contained"
              color="error"
              onClick={() => handleDelete(params.row.id)}
            >
              <RiDeleteBin5Fill size={25} />
            </Button>
          </Box>
        </>
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Box sx={{ height: "94.8vh", overflowY:"auto", overflowX:"hidden" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h3"
            component={"h3"}
            sx={{ fontSize: { xs: "xxx-large", md: "55px", sm: "55px" } }}
          >
            Users
          </Typography>
          <Typography
            variant="h6"
            component={"h6"}
            sx={{
              color: "gray",
              fontSize: { xs: "large", md: "20px", sm: "20px" },
            }}
          >
            Manage all users in the system
          </Typography>
        </Box>
        <Box sx={{ ml: { xs: "13px" } }}>
          <Button
            type="button"
            variant="contained"
            sx={{
              background: "linear-gradient(180deg, #2A1E8C 0%, #1A124F 100%)",
              display: "flex",
              alignItems: "center",
              gap: { xs: 0, md: 1 },
            }}
            onClick={() => navigate("/add-user")}
          >
            <FaPlus />
            Add User
          </Button>
        </Box>
      </Box>
      <hr />

      <Grid container sx={{ mt: "15px" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Item>
            <TextField
              variant="outlined"
              size="small"
              label="Search by name or email..."
              sx={{ width: { xs: "100%", sm: "70%", md: "50%" } }}
              value={search.nameEmail}
              onChange={(event) => handleChange(event)}
              name="nameEmail"
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Item>
            <FormControl
              sx={{ width: { xs: "65.3%", sm: "65%", md: "65%" } }}
              size="small"
            >
              <InputLabel id="demo-simple-select-label">
                Filter by role
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Filter By Role"
                value={search.role}
                onChange={handleChange}
                name="role"
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Editor"}>Editor</MenuItem>
                <MenuItem value={"User"}>User</MenuItem>
              </Select>
            </FormControl>
            <Button
              color="secondary"
              type="button"
              sx={{
                background: "linear-gradient(180deg, #2A1E8C 0%, #1A124F 100%)",
                color: "white",
                ml: { xs: "28px", sm: "21px", md: "21px" },
                pl: "20px",
                pr: "20px",
              }}
              onClick={handleReset}
            >
              Reset
            </Button>
          </Item>
        </Grid>
      </Grid>

      {loading ? (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <CircularProgress size={60} />

          <Typography variant="h6">Loading Users...</Typography>
        </Box>
      ) : (
        <Paper
          sx={{
            height: "400px",
            width: "100%",
            mt: "25px",
            mb: { xs: "30px", sm: "30px", md: "53px" },
          }}
        >
          <DataGrid
            rows={filteredUsers}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      )}
      
    </Box>
  );
};

export default UserList;
