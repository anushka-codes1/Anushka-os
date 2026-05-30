"use client";

import { useState } from "react";

import BootLoader from "../components/loader/BootLoader";
import Navbar from "../components/navigation/Navbar";

import Core from "../sections/Core";
import Stack from "../sections/Stack";
import Projects from "../sections/Projects";
import Memory from "../sections/Memory";
import Contact from "../sections/Contact";
import SmoothScroll from "../components/providers/SmoothScroll";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <BootLoader onComplete={() => setLoaded(true)} />}

      {loaded && (
        <>
          <Navbar />
          <SmoothScroll>
            <main className="bg-black text-white">
              <Core />
              <Stack />
              <Projects />
              <Memory />
            <Contact />
          </main>
          </SmoothScroll>
        </>
      )}
    </>
  );
}
