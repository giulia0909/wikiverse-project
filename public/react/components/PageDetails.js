import React from "react";
import { Page } from "./Page";

export const PageDetails = ({ page, onBackToList }) => {
  return (
    <div>
      <button onClick={onBackToList}>Back to Wiki</button>
      <h3>{page.title}</h3>
      <p>Author: {page.author}</p>
      <p>Content: {page.content}</p>
      <p>Tags: {page.tags.join(", ")}</p>
      <p>Created At: {page.createdAt}</p>
    </div>
  );
};
