// import { StrictMode, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App.jsx";
// import "./styles/global.css";

// import AOS from "aos";
// import "aos/dist/aos.css";

// function Root() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       offset: 120,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return <App />;
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Root />
//     </BrowserRouter>
//   </StrictMode>
// );

// import { StrictMode, useEffect } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// import App from "./App.jsx";
// import "./styles/global.css";

// import AOS from "aos";
// import "aos/dist/aos.css";

// function Root() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,        // smoother animation
//       once: true,            // animate only once
//       offset: 100,           // trigger earlier
//       easing: "ease-in-out",
//     });

//     AOS.refresh(); // 🔥 important when using dynamic React content
//   }, []);

//   return <App />;
// }

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Root />
//     </BrowserRouter>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);