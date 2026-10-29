import { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <article
      onClick={() => setClicked((previousClicked) => !previousClicked)}
      className={`cursor-pointer rounded-lg p-5 shadow-md transition-colors duration-200 ${
        clicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="mb-3 text-base font-bold text-gray-800">{title}</h2>
      <p className="text-sm leading-relaxed text-gray-600">{body}</p>
    </article>
  );
}

export default PostCard;
