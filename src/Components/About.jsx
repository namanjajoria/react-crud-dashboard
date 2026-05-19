import { Box, Paper, Typography, Grid, Chip } from "@mui/material";
import { FaReact, FaUserEdit, FaUsers } from "react-icons/fa";
import { MdDelete, MdDashboard } from "react-icons/md";
import { AiOutlineApi } from "react-icons/ai";

const About = () => {
  return (
     <Box
      sx={{
        height: "94.8vh",
        overflowY: "auto",
        overflowX: "hidden",
        pr: 1,
      }}
    >
      {/* Heading */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h3"
          fontWeight="bold"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
          }}
        >
          About This Project
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 1,
            color: "gray",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
            },
          }}
        >
          A modern CRUD Admin Dashboard built using React JS and Material UI.
        </Typography>
      </Box>

      {/* Main Card */}
      <Paper
        elevation={3}
        sx={{
          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          borderRadius: 4,
          width: "100%",
          overflowX: "hidden",
          boxSizing: "border-box",
          boxShadow:5
        }}
      >
        {/* Project Overview */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 2, }}
            
          >
            Project Overview
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 2,
              wordBreak: "break-word",
            }}
          >
            This project is a fully functional User Management Dashboard
            developed using React JS. Users can add new users, update existing
            user details, delete users, search users, and filter users based on
            their roles. The application also includes loading states, toast
            notifications, responsive layouts, and API integration.
          </Typography>
        </Box>

        {/* Features */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            Features
          </Typography>

          <Grid
            container
            spacing={3}
            sx={{
              width: "100%",
              margin: 0,
            }}
          >
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <FaUsers size={40} color="#1976d2" />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Add Users
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    lineHeight: 1.8,
                  }}
                >
                  Easily create and manage new users in the system.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <FaUserEdit size={40} color="#2e7d32" />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Update Users
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    lineHeight: 1.8,
                  }}
                >
                  Edit user details dynamically using forms and APIs.
                </Typography>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <MdDelete size={40} color="#d32f2f" />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Delete Users
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    lineHeight: 1.8,
                  }}
                >
                  Remove users instantly with delete functionality.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Technologies */}
        <Box sx={{ mb: 5 , }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb:"20px",  mt:"80px"}}
          >
            Technologies Used
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Chip icon={<FaReact />} label="React JS" color="primary" />
            <Chip label="Material UI" color="secondary" />
            <Chip label="Axios" color="success" />
            <Chip label="React Router" color="warning" />
            <Chip label="MockAPI" color="error" />
            <Chip label="MUI DataGrid" color="info" />
          </Box>
        </Box>

        {/* Developer Notes */}
        <Box>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Developer Notes
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 2,
              wordBreak: "break-word",
            }}
          >
            This project was created to practice React JS concepts including
            CRUD operations, API handling, routing, Material UI integration,
            reusable components, loading states, and responsive layouts.
          </Typography>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <MdDashboard size={25} color="#512da8" />

            <Typography variant="body1">
              Admin Dashboard Project
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <AiOutlineApi size={25} color="#0288d1" />

            <Typography variant="body1">
              Integrated with REST API using Axios
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default About;