import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export default function DashboardIndexPage() {
  redirect(ROUTES.dashboard);
}
