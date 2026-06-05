import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

export default function Textarea({ label, error, id, className = "", ...props }: TextareaProps) {
  const textareaId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div>
      <label htmlFor={textareaId} className="mb-1.5 block text-sm font-medium text-slate-600">
        {label}
      </label>
      <textarea
        id={textareaId}
        rows={4}
        className={`w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand focus:ring-1 focus:ring-brand ${error ? "border-red-300" : ""} ${className}`}
        {...props}
      />
      {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
    </div>
  );
}
