"use client";

import { useRouter } from "next/router";
import css from "./page.module.css";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => router.push("/"), 2000);
    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
