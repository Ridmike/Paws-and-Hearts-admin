"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, ROUTES } from "@/constants/routes";
import { NAV_ICON_MAP, PawLogoIcon } from "./NavIcons";

function isActive(pathname: string, href: string) {
  if (href === ROUTES.dashboard) {
    return pathname === href;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-[var(--sidebar-bg)] px-4 py-6">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
          <PawLogoIcon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-lg font-bold text-brand-dark">Shelter Hub</p>
          <p className="text-xs text-slate-500">Admin Management</p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = NAV_ICON_MAP[item.icon];

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                active
                  ? "bg-brand-green text-white shadow-sm"
                  : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href={ROUTES.petsCreate}
        className="mt-6 flex items-center justify-center rounded-xl bg-[#5c4033] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4a3329]"
      >
        + Add New Pet
      </Link>
    </aside>
  );
}
