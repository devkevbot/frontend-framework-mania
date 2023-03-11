import { createSignal, For } from "solid-js";

const initialData = [
  { id: 1, desc: "Walk dog", done: false },
  { id: 2, desc: "Buy groceries", done: false },
  { id: 3, desc: "Wash dishes", done: false },
];

function ListItem({
  id,
  desc,
  done,
  toggleDone,
  deleteTodo,
}: {
  id: number;
  desc: string;
  done: boolean;
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
}) {
  return (
    <div>
      <h2>
        {id} - {desc}
      </h2>
      <span>Done? {String(done)}</span> <br />
      <br />
      <button type="button" onClick={[toggleDone, id]}>
        Toggle done
      </button>{" "}
      <button class="danger" type="button" onClick={[deleteTodo, id]}>
        Delete todo
      </button>
    </div>
  );
}

export function List() {
  const [todos, setTodos] = createSignal(initialData);
  const [todoCreationCount, setTodoCreationCount] = createSignal(
    initialData.length
  );
  const [createDesc, setCreateDesc] = createSignal("");

  function toggleDone(id: number) {
    setTodos((prev) => {
      return prev.map((prevTodo) => {
        if (prevTodo.id === id) {
          return {
            ...prevTodo,
            done: !prevTodo.done,
          };
        }
        return prevTodo;
      });
    });
  }

  function createTodo() {
    setTodoCreationCount((count) => count + 1);
    setTodos([
      ...todos(),
      {
        id: todoCreationCount(),
        desc: createDesc(),
        done: false,
      },
    ]);
    setCreateDesc("");
  }

  function deleteTodo(id: number) {
    setTodos((prev) => {
      return prev.filter((prevTodo) => prevTodo.id !== id);
    });
  }

  return (
    <div
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
    >
      <h1>We have created {todoCreationCount()} TODOS so far</h1>
      <form>
        <fieldset>
          <legend>Create a TODO!</legend>
          <label id="description">
            Enter description:{" "}
            <input
              type="text"
              value={createDesc()}
              onInput={(e) => {
                setCreateDesc(e.currentTarget.value);
              }}
            ></input>
          </label>{" "}
          <button
            type="button"
            onClick={createTodo}
            disabled={createDesc().length === 0}
          >
            Create
          </button>
        </fieldset>
      </form>
      <For each={todos()}>
        {(todo) => (
          <ListItem {...todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        )}
      </For>
    </div>
  );
}
