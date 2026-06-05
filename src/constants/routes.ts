export const ROUTES = {
  login: "/login",
  dashboard: "/dashboard",
  pets: "/pets",
  petsCreate: "/pets/create",
  adopters: "/adopters",
  adoptionRequests: "/adoption-requests",
  shelterRecords: "/shelter-records",
  reports: "/reports",
  contactMessages: "/contact-messages",
  settings: "/settings",
} as const;

export type RouteKey = keyof typeof ROUTES;

export const NAV_ITEMS = [
  { label: "Dashboard", href: ROUTES.dashboard, icon: "dashboard" },
  { label: "Pet Management", href: ROUTES.pets, icon: "pets" },
  { label: "Adopter Management", href: ROUTES.adopters, icon: "adopters" },
  { label: "Adoption Requests", href: ROUTES.adoptionRequests, icon: "requests" },
  { label: "Shelter Records", href: ROUTES.shelterRecords, icon: "records" },
  { label: "Reports", href: ROUTES.reports, icon: "reports" },
  { label: "Messages", href: ROUTES.contactMessages, icon: "messages" },
] as const;

export const PAGE_TITLES: Record<string, string> = {
  [ROUTES.dashboard]: "Admin Dashboard",
  [ROUTES.pets]: "Pet Management",
  [ROUTES.petsCreate]: "Add New Pet",
  [ROUTES.adopters]: "Adopter Management",
  [ROUTES.adoptionRequests]: "Adoption Requests",
  [ROUTES.shelterRecords]: "Shelter Records",
  [ROUTES.reports]: "Reports",
  [ROUTES.contactMessages]: "Messages",
  [ROUTES.settings]: "Settings",
};
