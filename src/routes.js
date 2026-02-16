import DefaultLayout from "@/layouts/DefaultLayout";
import NoLayout from "@/layouts/NoLayout";

import paths from "./configs/paths";
import EditAvatar from "./pages/EditAvatar";
import UseRef from "./pages/UseRef";
import ReactMemo from "./pages/ReactMemo";
import NotFound from "./pages/NotFound";

const routes = [
  {
    layout: DefaultLayout,
    children: [
      { path: paths.home, component: EditAvatar },
      { path: paths.editAvatar, component: EditAvatar },
      { path: paths.useRef, component: UseRef },
      { path: paths.reactMemo, component: ReactMemo },
    ],
  },
  {
    layout: NoLayout,
    children: [{ path: paths.notFound, component: NotFound }],
  },
];

export default routes;
