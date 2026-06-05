import PageHeader from "@/components/ui/PageHeader";

export default function SettingsPage() {
  return (
    <div>
      <PageHeader title="Settings" description="System and account preferences." />
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
        Settings form will render here.
      </div>
    </div>
  );
}
