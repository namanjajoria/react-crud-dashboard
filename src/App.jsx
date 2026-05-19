import "./App.css";
import { Route } from "react-router";
import { Routes } from "react-router";
import UserList from "./Components/UserList";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";
import About from "./Components/About";
import MainPanel from "./Components/MainPanel";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPanel />}>
          <Route index element={<UserList />} />
          <Route path="add-user" element={<AddUser/>}/>
          <Route path="update-user/:userId" element={<UpdateUser/>}/>
          <Route path="about" element={<About/>}/>
          
        </Route>
      </Routes>
    </>
  );
};

export default App;
