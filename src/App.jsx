import { Route, BrowserRouter as Router, Routes } from "react-router";

import routes from "./routes";

function App() {
  return (
    <Router basename="/f8-fullstack-day37">
      <Routes>
        {routes.map((route, index) => {
          // Viết hoa nó mới thành component được nhé
          const Layout = route.layout;
          return (
            <Route key={index} element={<Layout />}>
              {route.children.map((child, index) => {
                const Component = child.component;
                return (
                  <Route
                    key={index}
                    path={child.path}
                    element={<Component />}
                  ></Route>
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
