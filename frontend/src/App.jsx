import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <SearchProvider>
          <Navbar />
          <AppRoutes />
          <Footer />
        </SearchProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
