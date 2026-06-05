import type { Pet } from "@/types/pet.types";

type PetStatsProps = {
  pets: Pet[];
};

export default function PetStats({ pets }: PetStatsProps) {
  const totalDogs = pets.filter((p) => p.species === "Dog").length;
  const totalCats = pets.filter((p) => p.species === "Cat").length;
  const adoptionsToday = pets.filter((p) => p.status === "adopted").length;

  const cards = [
    {
      label: "TOTAL DOGS",
      value: totalDogs,
      iconBg: "bg-emerald-500",
      icon: (
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <circle cx="6" cy="8" r="2" />
          <circle cx="12" cy="6" r="2.2" />
          <circle cx="18" cy="8" r="2" />
          <ellipse cx="12" cy="16" rx="5" ry="4" />
        </svg>
      ),
    },
    {
      label: "TOTAL CATS",
      value: totalCats,
      iconBg: "bg-sky-500",
      icon: (
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <circle cx="6" cy="8" r="2" />
          <circle cx="12" cy="6" r="2.2" />
          <circle cx="18" cy="8" r="2" />
          <ellipse cx="12" cy="16" rx="5" ry="4" />
        </svg>
      ),
    },
    {
      label: "ADOPTIONS TODAY",
      value: adoptionsToday,
      iconBg: "bg-orange-300",
      icon: (
        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${card.iconBg}`}>
            {card.icon}
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wide text-slate-400">{card.label}</p>
            <p className="text-2xl font-bold text-slate-800">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
