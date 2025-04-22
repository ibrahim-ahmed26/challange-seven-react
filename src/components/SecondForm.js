export default function SecondForm({ children }) {
  if (!children) return <p>No Items Passed</p>;
  return <>{children}</>;
}
