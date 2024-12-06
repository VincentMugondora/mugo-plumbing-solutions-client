import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./pages/Navbar";
import AppRoutes from "./Routes";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          {/* <Navbar /> */}
          <main className="flex-1">
            <AppRoutes />
          </main>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
