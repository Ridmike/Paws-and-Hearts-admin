"use client";

import Image from "next/image";
import Link from "next/link";
import StatusBadge from "@/components/ui/StatusBadge";
import { ROUTES } from "@/constants/routes";
import type { Pet } from "@/types/pet.types";

type PetDetailProps = {
  pet: Pet;
};

export default function PetDetail({ pet }: PetDetailProps) {
  const statusLabel =
    pet.status === "available" ? "Available for Adoption" : pet.status === "medical_hold" ? "Medical Hold" : "Adopted";

  return (
    <div>
      <Link href={ROUTES.pets} className="mb-4 inline-flex text-sm font-medium text-brand hover:text-brand-dark">
        ← Back to Manage Residents
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
          <Image src={pet.imageUrl} alt={pet.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          {pet.status === "available" ? (
            <span className="absolute left-4 top-4 rounded-lg bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              {statusLabel}
            </span>
          ) : null}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{pet.name}</h2>
              <p className="mt-1 text-lg font-medium text-brand-dark">{pet.breed}</p>
            </div>
            <button type="button" className="text-slate-300 hover:text-red-400" aria-label="Favorite">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-wide text-slate-400">AGE</p>
              <p className="mt-1 text-lg font-bold text-brand-dark">{pet.age}</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-semibold tracking-wide text-slate-400">GENDER</p>
              <p className="mt-1 text-lg font-bold capitalize text-brand-dark">{pet.gender}</p>
            </div>
          </div>

          <div className="mt-4">
            <StatusBadge status={pet.status} />
          </div>

          <div className="mt-6">
            <h3 className="font-bold text-slate-800">About {pet.name}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{pet.description}</p>
          </div>

          <div className="mt-6 rounded-xl bg-sky-50 p-4">
            <p className="text-xs font-semibold tracking-wide text-slate-400">LOCATED AT</p>
            <p className="mt-1 flex items-center gap-2 font-semibold text-slate-800">
              <svg className="h-4 w-4 text-brand" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              {pet.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
