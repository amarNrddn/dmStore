import Login from "./Login/Login";
import Register from "./Components/Register";
import {Link, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      
    </Routes>
  );
}

export default App;
