import "./App.css";
import { Route } from "react-router";
import { Routes } from "react-router";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import About from "./Components/About";
import MainPanel from "./Components/MainPanel";
import { useMemo, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState(()=>(
    localStorage.getItem("themeMode") || "light"
));

  const darkLightTheme = useMemo(() => {
    return createTheme({
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              background: {
                default: "#121212",
                paper: "#1E1E1E",
              },
            }
          : {
              background: {
                default: "#F5F5F5",
                paper: "#FFFFFF",
              },
            }),
      },
    });
  }, [mode]);

  const toggleTheme=()=>{
    setMode((prevMode)=>{
      const currentMode=prevMode==="light" ? "dark" : "light";
      localStorage.setItem("themeMode",currentMode);
      return currentMode;  
    })
  }

  return (
    <ThemeProvider theme={darkLightTheme}>
      <CssBaseline/>
      <Routes>
        <Route
          path="/"
          element={<MainPanel mode={mode} toggleTheme={toggleTheme} />}
        >
          <Route index element={<UserList />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="update-user/:userId" element={<UpdateUser />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
