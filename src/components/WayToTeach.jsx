export default function WayToTeach({ title, description }) {
  // console.log(props);
  return (
    <li>
      <p>
        <strong>{title}</strong>
        {description}
      </p>
    </li>
  );
}