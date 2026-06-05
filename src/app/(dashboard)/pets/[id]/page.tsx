"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PetDetail from "@/components/pets/PetDetail";
import { ROUTES } from "@/constants/routes";
import { loadPets } from "@/lib/pets";
import type { Pet } from "@/types/pet.types";

export default function PetDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [pet, setPet] = useState<Pet | null | undefined>(undefined);

  useEffect(() => {
    const found = loadPets().find((p) => p.id === id) ?? null;
    setPet(found);
  }, [id]);

  if (pet === undefined) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center text-slate-500">
        Loading...
      </div>
    );
  }

  if (pet === null) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
        <p className="text-slate-500">Pet not found.</p>
        <Link href={ROUTES.pets} className="mt-4 inline-block text-sm font-medium text-brand hover:text-brand-dark">
          Back to Manage Residents
        </Link>
      </div>
    );
  }

  return <PetDetail pet={pet} />;
}
