import { memo, useCallback, useState } from "react";

/* ================= CHILD 1 ================= */
const ChildComponent1 = memo(({ value, onIncrease }) => {
  console.log("Child 1 re-render");

  return (
    <div className="space-y-3 rounded-2xl border bg-white p-6 shadow-md">
      <h2 className="text-lg font-semibold text-blue-600">
        Child 1 Count: {value}
      </h2>
      <button
        onClick={onIncrease}
        className="rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      >
        Tăng Count 1
      </button>
    </div>
  );
});

ChildComponent1.displayName = "ChildComponent1";

/* ================= CHILD 2 ================= */
const ChildComponent2 = memo(({ value, onIncrease }) => {
  console.log("Child 2 re-render");

  return (
    <div className="space-y-3 rounded-2xl border bg-white p-6 shadow-md">
      <h2 className="text-lg font-semibold text-green-600">
        Child 2 Count: {value}
      </h2>
      <button
        onClick={onIncrease}
        className="rounded-xl bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
      >
        Tăng Count 2
      </button>
    </div>
  );
});

ChildComponent2.displayName = "ChildComponent2";

/* ================= PARENT ================= */
function ReactMemo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // dùng functional update → không cần dependency → function giữ nguyên reference
  const handleIncrease1 = useCallback(() => {
    setCount1((c) => c + 1);
  }, []);

  const handleIncrease2 = useCallback(() => {
    setCount2((c) => c + 1);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-center text-3xl font-bold">
          React memo + useCallback
        </h1>

        <ChildComponent1 value={count1} onIncrease={handleIncrease1} />
        <ChildComponent2 value={count2} onIncrease={handleIncrease2} />
      </div>
    </div>
  );
}

export default ReactMemo;
