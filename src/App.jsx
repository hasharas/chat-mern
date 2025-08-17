import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
