"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Button from "@/components/ui/Button";
import Pagination from "@/components/ui/Pagination";
import Select from "@/components/ui/Select";
import StatusBadge from "@/components/ui/StatusBadge";
import PetStats from "@/components/pets/PetStats";
import { PET_BREEDS } from "@/constants/pets";
import { ROUTES } from "@/constants/routes";
import { loadPets, removePet } from "@/lib/pets";
import type { Pet } from "@/types/pet.types";

const PAGE_SIZE = 4;

export default function PetsManagement() {
  const [pets, setPets] = useState<Pet[]>(() => loadPets());
  const [breedFilter, setBreedFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    return pets.filter((pet) => {
      const breedMatch = breedFilter === "all" || pet.breed === breedFilter;
      const statusMatch = statusFilter === "all" || pet.status === statusFilter;
      return breedMatch && statusMatch;
    });
  }, [pets, breedFilter, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const start = filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const end = Math.min(currentPage * PAGE_SIZE, filtered.length);

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAll() {
    if (selected.size === paginated.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(paginated.map((p) => p.id)));
    }
  }

  function handleDelete(id: string) {
    if (!confirm("Remove this pet from the list?")) return;
    const next = removePet(id);
    setPets(next);
    setSelected((prev) => {
      const copy = new Set(prev);
      copy.delete(id);
      return copy;
    });
  }

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Manage Residents</h2>
          <p className="mt-1 text-slate-500">Currently housing {pets.length} animals</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" onClick={() => setShowFilters((v) => !v)}>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
            </svg>
            Filters
          </Button>
          <Link
            href={ROUTES.petsCreate}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <span className="text-lg leading-none">+</span>
            Add New Pet
          </Link>
        </div>
      </div>

      {showFilters ? (
        <div className="mb-4 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-2 md:max-w-xl">
          <Select
            label="Breed"
            value={breedFilter}
            onChange={(e) => {
              setBreedFilter(e.target.value);
              setPage(1);
            }}
            options={[
              { value: "all", label: "All breeds" },
              ...PET_BREEDS.map((b) => ({ value: b, label: b })),
            ]}
          />
          <Select
            label="Status"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            options={[
              { value: "all", label: "All statuses" },
              { value: "available", label: "Available" },
              { value: "medical_hold", label: "Medical Hold" },
              { value: "adopted", label: "Adopted" },
            ]}
          />
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <th className="w-12 px-4 py-4">
                  <input
                    type="checkbox"
                    checked={paginated.length > 0 && selected.size === paginated.length}
                    onChange={toggleSelectAll}
                    aria-label="Select all"
                    className="rounded border-slate-300"
                  />
                </th>
                <th className="px-4 py-4">Photo</th>
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Species</th>
                <th className="px-4 py-4">Breed</th>
                <th className="px-4 py-4">Age</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((pet) => (
                <tr key={pet.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={selected.has(pet.id)}
                      onChange={() => toggleSelect(pet.id)}
                      aria-label={`Select ${pet.name}`}
                      className="rounded border-slate-300"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border border-slate-200">
                      <Image src={pet.imageUrl} alt={pet.name} fill className="object-cover" sizes="44px" />
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-slate-800">{pet.name}</td>
                  <td className="px-4 py-4 text-slate-600">{pet.species}</td>
                  <td className="px-4 py-4 text-slate-600">{pet.breed}</td>
                  <td className="px-4 py-4 text-slate-600">{pet.age}</td>
                  <td className="px-4 py-4">
                    <StatusBadge status={pet.status} />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`${ROUTES.pets}/${pet.id}`}
                        className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-brand"
                        aria-label={`View ${pet.name}`}
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(pet.id)}
                        className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-500"
                        aria-label={`Delete ${pet.name}`}
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-12 text-center text-slate-500">
                    No pets match your filters.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 border-t border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing {start} to {end} of {filtered.length} entries
          </p>
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={(p) => setPage(p)}
          />
        </div>
      </div>

      <PetStats pets={pets} />
    </div>
  );
}
