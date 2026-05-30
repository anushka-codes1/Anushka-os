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
import CustomCursor from "../components/cursor/CustomCursor";

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
);

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <BootLoader onComplete={() => setLoaded(true)} />}
      <>
        <CustomCursor />
        {!loaded && <BootLoader onComplete={() => setLoaded(true)} />}
        ...
      </>

      {loaded && (
        <>
          <Navbar />
          <SmoothScroll>
            <main className="bg-black text-white">
              <Core />
              <Divider />

              <Stack />
              <Divider />

              <Projects />
              <Divider />

              <Memory />
              <Divider />
              
              <Contact />
            </main>
          </SmoothScroll>
        </>
      )}
    </>
  );
}
