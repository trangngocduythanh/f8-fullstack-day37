import { forwardRef } from "react";

const TextInput = forwardRef(({ label, type = "text", ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      <input
        ref={ref}
        type={type}
        {...props}
        className="rounded-lg border border-gray-300 px-3 py-2 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
