"use client";

import { useRouter } from "next/navigation";

const blogPosts = [
  { title: "My First Post", slug: "my-first-post" },
  { title: "Learning React", slug: "learning-react" },
  { title: "Confusing React", slug: "confusing-react" },
  { title: "My Last Post", slug: "my-last-post" },
];
export default function Blog() {
  const router = useRouter();

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {blogPosts.map((post, index) => (
          <li
            key={index}
            onClick={() => {
              router.push(`/Blogs/${post.slug}`);
            }}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
