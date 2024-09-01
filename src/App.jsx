import AppRoutes from "./routes";
import Navbar from "./navbar";
import AuthContextProvider from "./Context/AuthContextProvider";
import Footer from "./Footer";

function App() {
  return (
    
    <AuthContextProvider>
    <div className="d-flex flex-column min-vh-100"> {/* Ensures footer stays at the bottom */}
      <Navbar />
      <div className="flex-grow-1"> {/* Allows content to grow and push footer down */}
        <AppRoutes />
      </div>
      <Footer /> {/* Footer placed after the content */}
    </div>
  </AuthContextProvider>
     
    
  );
}

export default App;
