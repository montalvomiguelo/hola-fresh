import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Button onClick={() => setCount(count + 1)}>
        count is {count}
      </Button>
    </>
  );
}
