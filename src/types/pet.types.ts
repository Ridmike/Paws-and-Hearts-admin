export type PetStatus = "available" | "medical_hold" | "adopted";

export type PetGender = "male" | "female";

export type PetSpecies = "Dog" | "Cat";

export type Pet = {
  id: string;
  name: string;
  species: PetSpecies;
  breed: string;
  age: string;
  gender: PetGender;
  status: PetStatus;
  description: string;
  location: string;
  imageUrl: string;
};

export type PetFormData = Omit<Pet, "id">;
