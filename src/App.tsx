import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AppWrapper from './AppWrapper';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
import Login from './authorization/Login';

const  App = () => {
  const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
  const isLoggedIn: boolean = storedIsLoggedIn ? JSON.parse(storedIsLoggedIn): false;
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/app/*"
            element={isLoggedIn ? <AppWrapper /> : <Navigate to="/login" />}
          />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
