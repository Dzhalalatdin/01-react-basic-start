import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button
        isActive={active === "main"}
        buttonCLicked={() => onChange("main")}
      >
        Главная
      </Button>
      <Button
        isActive={active === "feedback"}
        buttonCLicked={() => onChange("feedback")}
      >
        Обратная связь
      </Button>
      <Button
        isActive={active === "effects"}
        buttonCLicked={() => onChange("effects")}
      >
        Effect
      </Button>
    </section>
  );
}
