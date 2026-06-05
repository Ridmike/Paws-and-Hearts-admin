import PageHeader from "@/components/ui/PageHeader";

export default function ShelterRecordsPage() {
  return (
    <div>
      <PageHeader title="Shelter Records" description="Medical, intake, and care records for shelter animals." />
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
        Shelter records table will render here.
      </div>
    </div>
  );
}
