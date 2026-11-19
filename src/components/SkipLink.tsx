/**
 * The first thing in every page's tab order. Hidden until focused
 * (styles: `.skip-link` in tokens.css). Jumps past the sidebar to <main>.
 */
export function SkipLink() {
  return (
    <a href="#content" className="skip-link">
      Skip to content
    </a>
  );
}
