import PageHeader from "@/components/ui/PageHeader";

export default function ReportsPage() {
  return (
    <div>
      <PageHeader title="Reports" description="Analytics and exportable adoption reports." />
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
        Charts and report exports will render here.
      </div>
    </div>
  );
}
