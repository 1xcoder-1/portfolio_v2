// @ts-nocheck
import React from "react";

export default function HighlightBox({ children }) {
  return (
    <span
      className="relative inline-block z-0 my-0"
      style={{ marginTop: "0px", marginBottom: "0px" }}
    >
      <span
        className="relative z-10 p-0"
        style={{ marginTop: "0px", marginBottom: "0px" }}
      >
        {children}
      </span>
      <span
        className="absolute bottom-0 left-0 right-0 h-2 inline-block bg-green-200 dark:bg-green-600/70 -z-10"
      />
    </span>
  );
}

