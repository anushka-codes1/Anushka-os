"use client";

import { useState } from "react";
import BootLoader from "../components/loader/BootLoader";
import Core from "../sections/Core";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <BootLoader
          onComplete={() => setLoaded(true)}
        />
      )}

      {loaded && (
        <main className="bg-black text-white">
          <Core />
        </main>
      )}
    </>
  );
}