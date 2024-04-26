"use client";

import { useEffect } from "react";
import { trackEvent } from "@/utils/va";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => {
            trackEvent("Error - Try again", {
              name: "Try again",
              action: "click",
              category: "error",
              data: "Try again",
            });
            reset();
          }
        }
      >
        Try again
      </button>
    </div>
  );
}
