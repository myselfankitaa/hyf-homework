"use client";

import { useRef } from "react";

export default function SubmitNote() {
  const refs = {
    title: useRef(null),
    content: useRef(null),
    author: useRef(null),
    date: useRef(null),
  };

  const clickTitle = () => refs.title.current.focus();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};

    for (let key in refs) {
      formData[key] = refs[key].current.value;
    }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Take a Note</h1>
      <label onClick={clickTitle}>Note Title: </label>
      <input type="text" name="title" id="title" ref={refs.title} />
      <br className="formbr" />
      <label>Note Content: </label>
      <textarea
        type="text"
        name="content"
        id="content"
        rows={10}
        cols={50}
        ref={refs.content}
      />
      <br className="formbr" />
      <label>Note Author: </label>
      <input type="text" name="author" id="author" ref={refs.author} />
      <br className="formbr" />
      <label htmlFor="date">Note Date: </label>
      <input type="date" name="date" id="date" ref={refs.date} />
      <br className="formbr" />
      <button type="submit">Submit Note</button>
    </form>
  );
}
