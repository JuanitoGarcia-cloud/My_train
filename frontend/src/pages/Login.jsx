import { useState, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/login', form);
    login(res.data.token);
  };

  return (
    <div className="container mt-5">
      <h1>Connexion</h1>

      <form onSubmit={handleSubmit} className="col-md-4">
        <label className="form-label">Username</label>
        <input
          className="form-control"
          required
          onChange={e => setForm({ ...form, username: e.target.value })}
        />

        <label className="form-label mt-3">Password</label>
        <input
          type="password"
          className="form-control"
          required
          onChange={e => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  );
}