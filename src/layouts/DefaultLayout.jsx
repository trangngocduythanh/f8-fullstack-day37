import { Outlet } from "react-router";

import Header from "@/components/Header";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <main
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default DefaultLayout;
