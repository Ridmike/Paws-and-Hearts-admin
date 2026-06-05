import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function PawLogoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <circle cx="6" cy="8" r="2.2" />
      <circle cx="12" cy="6" r="2.4" />
      <circle cx="18" cy="8" r="2.2" />
      <circle cx="8" cy="13" r="2" />
      <circle cx="16" cy="13" r="2" />
      <path d="M10 16.5c1.2 2.2 2.8 3.5 4 3.5s2.8-1.3 4-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function DashboardIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function PetsIcon(props: IconProps) {
  return <PawLogoIcon {...props} />;
}

export function AdoptersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 20c1.5-4 5-6 7-6s5.5 2 7 6" strokeLinecap="round" />
    </svg>
  );
}

export function RequestsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <path d="M9 5a2 2 0 014 0" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RecordsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" />
      <path d="M14 3v6h6M10 13h4M10 17h4" strokeLinecap="round" />
    </svg>
  );
}

export function ReportsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 19V5M10 19V9M16 19v-6M22 19V3" strokeLinecap="round" />
    </svg>
  );
}

export function MessagesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const NAV_ICON_MAP = {
  dashboard: DashboardIcon,
  pets: PetsIcon,
  adopters: AdoptersIcon,
  requests: RequestsIcon,
  records: RecordsIcon,
  reports: ReportsIcon,
  messages: MessagesIcon,
} as const;
