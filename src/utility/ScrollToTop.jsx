import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force the browser layout engine to snap back to the very top coordinates
    window.scrollTo(0, 0);
  }, [pathname]); // This array ensures the code fires every single time the path changes

  return null; // This component doesn't render any UI; it only handles logic
}