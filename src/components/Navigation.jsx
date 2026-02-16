import paths from "@/configs/paths";
import { NavLink } from "react-router";

const items = [
  {
    path: paths.editAvatar,
    title: "2. Sử dụng useEffect cleanup",
  },
  {
    path: paths.useRef,
    title: "3. Sử dụng useRef",
  },
  {
    path: paths.reactMemo,
    title: "4. Sử dụng React memo và useCallback",
  },
];

function Navigation() {
  return (
    <nav className="py-6">
      <ul className="flex list-none justify-center gap-4">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `rounded-xl border border-violet-200 px-5 py-2 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-violet-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-violet-50 hover:text-violet-700"
                } `
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
