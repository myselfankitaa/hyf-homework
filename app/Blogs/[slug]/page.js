export default function BlogPost({ params }) {
  const slug = params.slug;

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
