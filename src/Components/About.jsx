import {
  Box,
  Paper,
  Typography,
  Grid,
  Chip,
  Divider,
} from "@mui/material";

import {
  FaReact,
  FaUserEdit,
  FaUsers,
  FaFilter,
  FaMoon,
} from "react-icons/fa";

import { MdDelete, MdDashboard } from "react-icons/md";

import { AiOutlineApi } from "react-icons/ai";

import {
  SiMui,
  SiReactrouter,
  SiAxios,
  SiReacthookform,
  SiZod,
} from "react-icons/si";

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
      {/* HEADING */}

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
          A modern and fully responsive CRUD Admin Dashboard built using React
          JS and Material UI.
        </Typography>
      </Box>

      {/* MAIN CARD */}

      <Paper
        elevation={4}
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
        }}
      >
        {/* PROJECT OVERVIEW */}

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 2 }}
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
            developed using React JS. Users can add, update, delete, search,
            and filter users dynamically. The application also supports Dark
            and Light theme switching, responsive layouts, form validation,
            API integration, toast notifications, and local storage persistence.
          </Typography>
        </Box>

        {/* FEATURES */}

        <Box sx={{ mb: 6 }}>
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
            {/* ADD USER */}

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
                  Easily create and manage new users dynamically.
                </Typography>
              </Paper>
            </Grid>

            {/* UPDATE USER */}

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
                  Edit user information dynamically using forms and APIs.
                </Typography>
              </Paper>
            </Grid>

            {/* DELETE USER */}

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

            {/* FILTER USERS */}

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
                <FaFilter size={40} color="#ed6c02" />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Filter Users
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    lineHeight: 1.8,
                  }}
                >
                  Filter and search users efficiently based on roles.
                </Typography>
              </Paper>
            </Grid>

            {/* DARK MODE */}

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
                <FaMoon size={40} color="#7b1fa2" />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Dark / Light Mode
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    lineHeight: 1.8,
                  }}
                >
                  Seamlessly switch between dark and light themes.
                </Typography>
              </Paper>
            </Grid>

            {/* RESPONSIVE */}

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
                <MdDashboard size={40} color="#0288d1" />

                <Typography variant="h6" sx={{ mt: 2 }}>
                  Responsive Design
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    lineHeight: 1.8,
                  }}
                >
                  Optimized for desktop, tablet, and mobile devices.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ mb: 5 }} />

        {/* TECHNOLOGIES */}

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 3 }}
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

            <Chip
              icon={<SiMui />}
              label="Material UI"
              color="secondary"
            />

            <Chip
              icon={<SiAxios />}
              label="Axios"
              color="success"
            />

            <Chip
              icon={<SiReactrouter />}
              label="React Router"
              color="warning"
            />

            <Chip
              icon={<AiOutlineApi />}
              label="MockAPI"
              color="error"
            />

            <Chip
              icon={<SiReacthookform />}
              label="React Hook Form"
              color="info"
            />

            <Chip
              icon={<SiZod />}
              label="Zod Validation"
              color="primary"
            />
          </Box>
        </Box>

        <Divider sx={{ mb: 5 }} />

        {/* DEVELOPER NOTES */}

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
            This project was created to strengthen React JS concepts including
            CRUD operations, routing, API handling, reusable components,
            responsive layouts, form handling, validation, theme management,
            and local storage persistence.
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
              Modern Admin Dashboard UI
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