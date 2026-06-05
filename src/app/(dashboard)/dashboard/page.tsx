import PageHeader from "@/components/ui/PageHeader";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Dashboard Overview"
        description="Summary stats and recent adoption activity will appear here."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {["Total Pets", "Available", "Adopters", "Pending Requests"].map((label) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-800">—</p>
          </div>
        ))}
      </div>
    </div>
  );
}
