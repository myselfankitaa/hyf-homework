"use client";
import { usePathname, useSearchParams } from "next/navigation";

export default function BlogPost() {
  const path = usePathname();
  const slug = path.split("/")[2];

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return (
    <div>
      <h1>{title}</h1>
      <p>This is the content of the blog post titled "{title}".</p>
    </div>
  );
}
