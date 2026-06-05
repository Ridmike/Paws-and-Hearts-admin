"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { PET_BREEDS, PET_STATUS_OPTIONS } from "@/constants/pets";
import { ROUTES } from "@/constants/routes";
import { addPet } from "@/lib/pets";
import type { PetFormData, PetGender, PetSpecies, PetStatus } from "@/types/pet.types";

const emptyForm: PetFormData = {
  name: "",
  species: "Dog",
  breed: PET_BREEDS[0],
  age: "",
  gender: "male",
  status: "available",
  description: "",
  location: "Hope Animal Center",
  imageUrl: "",
};

type PetFormProps = {
  initialData?: PetFormData;
  submitLabel?: string;
};

export default function PetForm({ initialData, submitLabel = "Save Pet" }: PetFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<PetFormData>(initialData ?? emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof PetFormData, string>>>({});
  const [saving, setSaving] = useState(false);

  function updateField<K extends keyof PetFormData>(key: K, value: PetFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof PetFormData, string>> = {};
    if (!form.name.trim()) next.name = "Pet name is required";
    if (!form.age.trim()) next.age = "Age is required";
    if (!form.breed) next.breed = "Breed is required";
    if (!form.description.trim()) next.description = "Description is required";
    if (!form.location.trim()) next.location = "Location is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSaving(true);
    const pet = {
      ...form,
      id: crypto.randomUUID(),
      imageUrl:
        form.imageUrl.trim() ||
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=120&h=120&fit=crop",
    };
    addPet(pet);
    router.push(ROUTES.pets);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label="Pet Name"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          placeholder="e.g. Duke"
          error={errors.name}
          required
        />
        <Select
          label="Species"
          value={form.species}
          onChange={(e) => updateField("species", e.target.value as PetSpecies)}
          options={[
            { value: "Dog", label: "Dog" },
            { value: "Cat", label: "Cat" },
          ]}
        />
        <Select
          label="Breed"
          value={form.breed}
          onChange={(e) => updateField("breed", e.target.value)}
          options={PET_BREEDS.map((b) => ({ value: b, label: b }))}
          error={errors.breed}
        />
        <Input
          label="Age"
          value={form.age}
          onChange={(e) => updateField("age", e.target.value)}
          placeholder="e.g. 2 Years, 4 Months"
          error={errors.age}
          required
        />
        <Select
          label="Gender"
          value={form.gender}
          onChange={(e) => updateField("gender", e.target.value as PetGender)}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
        <Select
          label="Status"
          value={form.status}
          onChange={(e) => updateField("status", e.target.value as PetStatus)}
          options={PET_STATUS_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
        />
        <Input
          label="Location"
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
          placeholder="Hope Animal Center"
          error={errors.location}
          className="md:col-span-2"
        />
        <Input
          label="Photo URL (optional)"
          value={form.imageUrl}
          onChange={(e) => updateField("imageUrl", e.target.value)}
          placeholder="https://..."
          className="md:col-span-2"
        />
        <div className="md:col-span-2">
          <Textarea
            label="Description"
            value={form.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Tell adopters about this pet's personality, needs, and history..."
            error={errors.description}
            required
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-6">
        <Link
          href={ROUTES.pets}
          className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          Cancel
        </Link>
        <Button type="submit" disabled={saving}>
          {saving ? "Saving..." : submitLabel}
        </Button>
      </div>
    </form>
  );
}
