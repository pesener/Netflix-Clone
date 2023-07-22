import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
