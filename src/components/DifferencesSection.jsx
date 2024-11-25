import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";

export default function DifferencesSection() {
  const [contentType, setContent] = useState(null);

  function handleClick(type) {
    setContent(type);
  }

  return (
    <section>
      <h3>Чем мы отличаемся от других</h3>
      <Button
        isActive={contentType === "way"}
        buttonCLicked={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        buttonCLicked={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "program"}
        buttonCLicked={() => handleClick("program")}
      >
        Концентрация
      </Button>

      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  );
}
