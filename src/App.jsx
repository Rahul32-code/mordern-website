import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import TrustedBy from "./pages/TrustedBy";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  // Custom cursor animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${
          mouse.current.x - 6
        }px, ${mouse.current.y - 6}px, 0)`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${
          position.current.x - 20
        }px, ${position.current.y - 20}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate(); // Start animation loop

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="dark:bg-black relative">
      <Toaster position="top-center" />
      <Navbar theme={theme} setTheme={setTheme} />

      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      {/* Custom Cursor Ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[999] "
        style={{ transition: "transform 0.1s ease-in-out" }}
      ></div>

      {/* Custom Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[999]"
      ></div>
    </div>
  );
};

export default App;
