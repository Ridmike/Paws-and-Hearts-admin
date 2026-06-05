import { PET_STATUS_OPTIONS, PET_STATUS_STYLES } from "@/constants/pets";
import type { PetStatus } from "@/types/pet.types";

type StatusBadgeProps = {
  status: PetStatus;
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const label = PET_STATUS_OPTIONS.find((o) => o.value === status)?.label ?? status;

  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${PET_STATUS_STYLES[status]}`}>
      {label}
    </span>
  );
}
