import Routes from "./routes";
import Navbar from "./navbar";
import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Navbar />

        <Routes />
      </div>
    </AuthContextProvider>
  );
}

export default App;
