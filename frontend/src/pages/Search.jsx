import { useState } from "react";
import api from "../api/axios";

export default function Search() {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {

    const res = await api.get(`/search?from=${from}&to=${to}`);

    setResults(res.data);
  };

  return (
    <div className="container">

      <h2>Recherche trajet</h2>

      <input
        placeholder="Ville départ"
        onChange={(e) => setFrom(e.target.value)}
      />

      <input
        placeholder="Ville arrivée"
        onChange={(e) => setTo(e.target.value)}
      />

      <button onClick={search}>Search</button>

      <ul>
        {results.map((r, i) => (
          <li key={i}>
            {r.departureCity?.name} → {r.arrivalCity?.name}
          </li>
        ))}
      </ul>

    </div>
  );
}