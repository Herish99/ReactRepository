import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {
  return (
    <>
      <div className="container">
        {/* <NavbarCompo/> */}
        <RouterProvider router={router} />

      </div>
    </>
  );
}

export default App;
