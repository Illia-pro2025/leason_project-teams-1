export function NavigationItem({ icon, title }) {
  return (
    <button type="button">
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
}
