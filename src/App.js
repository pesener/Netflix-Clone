import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import { AuthContextProvider } from "./context/AuthContext";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import Account from "./screens/Account";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/account" element={<Account />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
