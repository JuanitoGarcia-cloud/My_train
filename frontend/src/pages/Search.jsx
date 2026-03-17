import { useEffect, useState } from 'react';
import api from '../services/api';
import { useTranslation } from 'react-i18next';

export default function Search() {
  const { t } = useTranslation();
  const [cities, setCities] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    api.get('/cities').then(res => setCities(res.data));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await api.get(`/search?from=${from}&to=${to}`);
    setResults(res.data);
  };

  return (
    <div className="container mt-4">
      <h1>{t('search')}</h1>

      <form onSubmit={handleSearch} className="row g-3">
        <div className="col-md-5">
          <label className="form-label">{t('from')}</label>
          <select className="form-select" onChange={e => setFrom(e.target.value)}>
            <option value="">--</option>
            {cities.map(c => (
              <option key={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-5">
          <label className="form-label">{t('to')}</label>
          <select className="form-select" onChange={e => setTo(e.target.value)}>
            <option value="">--</option>
            {cities.map(c => (
              <option key={c.id}>{c.name}</option>
            ))}
          </select>
        </div>

        <div className="col-md-2 d-flex align-items-end">
          <button className="btn btn-primary w-100">{t('submit')}</button>
        </div>
      </form>

      <div className="mt-4">
        {results.map((r, i) => (
          <div key={i} className="card p-3 mb-3">
            <strong>{r.line}</strong>
            <ul>
              {r.stops.map(s => (
                <li key={s.id}>{s.StopCity.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}