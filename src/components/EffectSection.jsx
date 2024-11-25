import { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useEffect } from "react";
import { useCallback } from "react";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Effects</h3>

      <Button
        style={{ marginBottom: "1rem" }}
        buttonCLicked={() => setModal(true)}
      >
        Открыть информацию
      </Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum odit
          alias amet reprehenderit nemo exercitationem laborum animi. Asperiores
          similique ipsam nisi illo. Voluptatum error suscipit ad molestiae
          mollitia consequatur laudantium!
        </p>
        <Button buttonCLicked={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className="control" {...input} />

          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
