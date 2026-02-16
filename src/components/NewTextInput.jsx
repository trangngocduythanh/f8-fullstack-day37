import { forwardRef, useImperativeHandle, useRef } from "react";

const NewTextInput = forwardRef(({ label, type = "text", ...props }, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      <input
        ref={inputRef}
        type={type}
        {...props}
        className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
});

NewTextInput.displayName = "NewTextInput";

export default NewTextInput;
