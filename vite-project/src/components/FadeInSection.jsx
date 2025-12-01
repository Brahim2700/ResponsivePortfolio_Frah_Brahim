// FadeInSection.jsx
// Line 1: Import React and hooks (useRef, useState, useEffect).
import React, { useRef, useState, useEffect } from "react";

// Line 4: This component wraps any children and fades them in when visible.
function FadeInSection({ children }) {
  // Line 6: domRef will point to the actual DOM element.
  const domRef = useRef(null);
  // Line 8: isVisible controls if the element is currently in view.
  const [isVisible, setIsVisible] = useState(false);

  // Line 11: Use the browser IntersectionObserver to detect when in viewport.
  useEffect(() => {
    // Line 13: Create a new observer with a callback.
    const observer = new IntersectionObserver((entries) => {
      // Line 15: entries[0] is the element we observe.
      if (entries[0].isIntersecting) {
        setIsVisible(true);        // Line 17: Mark as visible (trigger CSS animation).
        observer.unobserve(entries[0].target); // Line 18: Stop observing (animate only once).
      }
    }, {
      threshold: 0.15, // Line 21: Trigger when ~15% of the element is visible.
    });

    // Line 24: Capture the current value of domRef
    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    // Line 29: Cleanup if component is removed.
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  // Line 37: Add CSS classes based on isVisible state.
  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}

// Line 45: Export so we can use it around each section.
export default FadeInSection;
