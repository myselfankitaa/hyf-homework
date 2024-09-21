"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Notes() {
  const [data, setData] = useState({
    noteTaker: "",
    noteId: "",
  });
  const router = useRouter();
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const handleClick = () => {
    router.push(`/notes/${data.noteId}?noteTaker=${data.noteTaker}`);
  };

  return (
    <main>
      <h1>notes</h1>
      <label>Note taker</label>
      <input
        type="text"
        name="noteTaker"
        id="noteTaker"
        value={data.noteTaker}
        onChange={handleChange}
      />
      <label>Note Id</label>
      <input
        type="text"
        name="noteId"
        id="noteId"
        value={data.noteId}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Go To Notes</button>
    </main>
  );
}
