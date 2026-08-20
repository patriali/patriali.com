"use client";

import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Count each browser once per session; otherwise just read the total.
    const counted = sessionStorage.getItem("counted");
    const method = counted ? "GET" : "POST";

    fetch("/api/views", { method })
      .then((res) => res.json())
      .then((data: { count: number }) => {
        setCount(data.count);
        if (!counted) sessionStorage.setItem("counted", "1");
      })
      .catch(() => {
        /* stay silent if the counter is unreachable */
      });
  }, []);

  if (count === null) return null;

  return (
    <p className="views" aria-label={`${count} visitors`}>
      {count.toLocaleString()} visits
    </p>
  );
}
