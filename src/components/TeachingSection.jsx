import WayToTeach from "../components/WayToTeach";
import { ways } from "../data";

// Рефакторинг

export default function TeachingSection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>

      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}