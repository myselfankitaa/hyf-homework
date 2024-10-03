"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Note({ params }) {
  const path = usePathname();
  const query = useSearchParams();
  return (
    <main>
      {path}
      <p>{JSON.stringify(params)}</p>
      <p>{query.get("noteTaker")}</p>
    </main>
  );
}
