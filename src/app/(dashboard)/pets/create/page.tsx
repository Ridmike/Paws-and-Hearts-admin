import Link from "next/link";
import PetForm from "@/components/pets/PetForm";
import { ROUTES } from "@/constants/routes";

export default function CreatePetPage() {
  return (
    <div>
      <div className="mb-6">
        <Link href={ROUTES.pets} className="text-sm font-medium text-brand hover:text-brand-dark">
          ← Back to Manage Residents
        </Link>
        <h2 className="mt-2 text-2xl font-bold text-slate-800">Add New Pet</h2>
        <p className="mt-1 text-slate-500">Register a new resident with breed, age, description, and more.</p>
      </div>
      <PetForm submitLabel="Add New Pet" />
    </div>
  );
}
