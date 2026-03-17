export default function AdminDashboard() {

  return (
    <div className="container">

      <h2>Admin Dashboard</h2>

      <ul>
        <li><a href="/admin/cities">Cities</a></li>
        <li><a href="/admin/lines">Lines</a></li>
        <li><a href="/admin/schedules">Schedules</a></li>
      </ul>

    </div>
  );
}