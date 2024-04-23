import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-4 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs text-primary-900">
      {children}
    </h4>
  );
}
