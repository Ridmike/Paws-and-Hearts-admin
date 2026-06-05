import PageHeader from "@/components/ui/PageHeader";

export default function ContactMessagesPage() {
  return (
    <div>
      <PageHeader title="Messages" description="Contact form submissions from the public site." />
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
        Message inbox will render here.
      </div>
    </div>
  );
}
