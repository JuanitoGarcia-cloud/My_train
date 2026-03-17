import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from "./components/Footer";
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from './pages/NotFound';

import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {

  return (

    <AuthProvider>
      <ThemeProvider>

        <BrowserRouter>

          <Header />

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/search"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />

          </Routes>

          <Footer />

        </BrowserRouter>

      </ThemeProvider>
    </AuthProvider>

  );
}
