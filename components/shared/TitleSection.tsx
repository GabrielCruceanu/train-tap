import React from 'react';

export default function TitleSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-3 text-3xl font-semibold md:text-5xl lg:mb-4  lg:text-5xl lg:leading-tight">
      {children}
    </h2>
  );
}
