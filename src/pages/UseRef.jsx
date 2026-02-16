import { useRef } from "react";
import TextInput from "@/components/TextInput";
import NewTextInput from "@/components/NewTextInput";

function UseRefPage() {
  const clickCountRef = useRef(0);
  const inputRef = useRef(null);
  const newInputRef = useRef(null);

  const handleClick = () => {
    clickCountRef.current++;
    if (clickCountRef.current % 5 === 0) {
      alert(`Click ${clickCountRef.current} lần!`);
    }
  };

  const handleRemove = () => {
    inputRef.current?.remove();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-xl space-y-6">
        <h1 className="text-center text-3xl font-bold">useRef Demo</h1>

        {/* CARD */}
        <div className="space-y-6 rounded-2xl border bg-white p-8 shadow-md">
          {/* click counter */}
          <button
            onClick={handleClick}
            className="rounded-xl bg-blue-500 px-5 py-2.5 font-medium text-white transition hover:bg-blue-600 active:scale-95"
          >
            Click me
          </button>

          {/* TextInput */}
          <div className="space-y-3">
            <TextInput
              ref={inputRef}
              label="Email"
              placeholder="Enter email..."
            />

            <div className="flex gap-3">
              <button
                onClick={() => inputRef.current?.focus()}
                className="flex-1 rounded-xl bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
              >
                Focus
              </button>

              <button
                onClick={handleRemove}
                className="flex-1 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>

          {/* NewTextInput */}
          <div className="space-y-3">
            <NewTextInput
              ref={newInputRef}
              label="New Input"
              placeholder="Only expose focus()"
            />

            <button
              onClick={() => newInputRef.current?.focus()}
              className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-4 py-2 font-medium text-white transition hover:opacity-90"
            >
              Focus NewInput
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseRefPage;
