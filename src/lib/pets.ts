import { DEFAULT_PETS, PETS_STORAGE_KEY } from "@/constants/pets";
import type { Pet } from "@/types/pet.types";

export function loadPets(): Pet[] {
  if (typeof window === "undefined") return DEFAULT_PETS;

  try {
    const stored = localStorage.getItem(PETS_STORAGE_KEY);
    if (!stored) return DEFAULT_PETS;
    const parsed = JSON.parse(stored) as Pet[];
    return parsed.length > 0 ? parsed : DEFAULT_PETS;
  } catch {
    return DEFAULT_PETS;
  }
}

export function savePets(pets: Pet[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PETS_STORAGE_KEY, JSON.stringify(pets));
}

export function addPet(pet: Pet): Pet[] {
  const pets = loadPets();
  const next = [pet, ...pets];
  savePets(next);
  return next;
}

export function removePet(id: string): Pet[] {
  const next = loadPets().filter((p) => p.id !== id);
  savePets(next);
  return next;
}
