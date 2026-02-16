import { useEffect, useRef, useState } from "react";
import placeholderAvatar from "@/assets/images/placeholder-avatar.png";

function EditAvatar() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (avatarUrl) {
      URL.revokeObjectURL(avatarUrl);
    }

    const blobUrl = URL.createObjectURL(file);
    setAvatarUrl(blobUrl);
  };

  useEffect(() => {
    return () => {
      if (avatarUrl) {
        URL.revokeObjectURL(avatarUrl);
      }
    };
  }, [avatarUrl]);

  const handleRemove = () => {
    if (avatarUrl) {
      URL.revokeObjectURL(avatarUrl);
    }
    setAvatarUrl(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Update Avatar</h1>

        {/* CARD — vuông, cân đối avatar */}
        <div className="flex aspect-square w-72 flex-col items-center justify-center gap-5 rounded-2xl border bg-white p-6 shadow-md">
          <label className="group cursor-pointer">
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />

            <div className="relative">
              <img
                src={avatarUrl || placeholderAvatar}
                alt="avatar"
                className="h-40 w-40 rounded-full border-4 border-slate-200 object-cover transition group-hover:opacity-80"
              />

              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 transition group-hover:bg-black/40">
                <span className="text-sm font-medium text-white opacity-0 group-hover:opacity-100">
                  Đổi ảnh
                </span>
              </div>
            </div>
          </label>

          {avatarUrl && (
            <button
              onClick={handleRemove}
              className="w-full rounded-xl bg-red-500 px-4 py-2 font-medium text-white transition hover:bg-red-600 active:scale-95"
            >
              Xóa ảnh
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditAvatar;
