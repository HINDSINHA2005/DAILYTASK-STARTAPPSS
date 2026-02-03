// // import { Routes, Route, Link } from "react-router-dom";
// // import Home from "./pages/Home";
// // import About from "./pages/about";
// // import Contact from "./pages/contact";


// // function App() {
// //   return (
// //     <>
// //       <nav>
// //         <Link to="/">Home</Link> | 
// //         <Link to="/about">About</Link> | 
// //         <Link to="/contact">Contact</Link>
// //       </nav>

// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;


// import { ThemeProvider } from "./pages/themecontext";
// import ThemeToggle from "./pages/themetoggle";

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemeToggle />
//     </ThemeProvider>
//   );
// }

// export default App;


// import ErrorBoundary from "./pages/ErrorBoundary";
// import BuggyComponent from "./pages/BuggyComponent";

// function App() {
//   return (
//     <ErrorBoundary>
//       <BuggyComponent />
//     </ErrorBoundary>
//   );
// }

// export default App;

import MovieList from "./pages/MovieList";

function App() {
  return (
    <div>
      <h1>🎬 Movie List App</h1>
      <MovieList />
    </div>
  );
}

export default App;

