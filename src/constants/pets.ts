import type { Pet, PetStatus } from "@/types/pet.types";

export const PET_BREEDS = [
  "Beagle Mix",
  "Border Collie",
  "Domestic Shorthair",
  "Golden Retriever",
  "Siamese",
  "Tabby Kitten",
  "Terrier Mix",
  "Yellow Lab",
  "Calico",
  "Poodle",
] as const;

export const PET_STATUS_OPTIONS: { value: PetStatus; label: string }[] = [
  { value: "available", label: "Available" },
  { value: "medical_hold", label: "Medical Hold" },
  { value: "adopted", label: "Adopted" },
];

export const PET_STATUS_STYLES: Record<PetStatus, string> = {
  available: "bg-emerald-100 text-emerald-800",
  medical_hold: "bg-sky-100 text-sky-800",
  adopted: "bg-amber-100 text-amber-900",
};

export const DEFAULT_PETS: Pet[] = [
  {
    id: "1",
    name: "Buddy",
    species: "Dog",
    breed: "Beagle",
    age: "2 Years",
    gender: "male",
    status: "available",
    description: "Friendly and energetic, loves walks and belly rubs.",
    location: "Hope Animal Center",
    imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=120&h=120&fit=crop",
  },
  {
    id: "2",
    name: "Luna",
    species: "Cat",
    breed: "Calico",
    age: "1 Year",
    gender: "female",
    status: "medical_hold",
    description: "Gentle cat recovering from a minor procedure. Very affectionate.",
    location: "Hope Animal Center",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=120&h=120&fit=crop",
  },
  {
    id: "3",
    name: "Max",
    species: "Dog",
    breed: "Golden Retriever",
    age: "5 Years",
    gender: "male",
    status: "adopted",
    description: "Loyal family dog recently adopted. Calm and well-trained.",
    location: "Hope Animal Center",
    imageUrl: "https://images.unsplash.com/photo-1552053831-7154a086a932?w=120&h=120&fit=crop",
  },
  {
    id: "4",
    name: "Daisy",
    species: "Dog",
    breed: "Poodle",
    age: "4 Months",
    gender: "female",
    status: "available",
    description: "Playful puppy looking for a patient home to grow up in.",
    location: "Hope Animal Center",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=120&h=120&fit=crop",
  },
  {
    id: "5",
    name: "Shalow",
    species: "Dog",
    breed: "Poodle",
    age: "4 Months",
    gender: "female",
    status: "available",
    description: "Playful puppy looking for a patient home to grow up in.",
    location: "Hope Animal Center",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=120&h=120&fit=crop",
  },
];

export const PETS_STORAGE_KEY = "paws-hearts-pets";
