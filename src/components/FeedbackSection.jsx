import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }

  console.log(input);

  return (
    <div>
      <h1>{input.current?.value}</h1>
      <h3>Input Value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function FeedBackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "help",
  });
  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(true);
  // const [reason, setReason] = useState("help");

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }

  // function toggleError() {
  //   setHasError((prev) => !prev);
  // }

  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          name=""
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <pre>{JSON.stringify(form, null, 2)}</pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>

        <hr />

        <StateVsRef></StateVsRef>
      </form>
    </section>
  );
}
