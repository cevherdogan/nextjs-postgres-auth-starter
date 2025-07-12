
export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">📊 Mock Dashboard</h1>
      <p className="mb-2">This is a placeholder for your future metrics, reports, or user-specific data.</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">Metric A: 123</div>
        <div className="bg-white p-4 rounded shadow">Metric B: 456</div>
      </div>
    </div>
  );
}
