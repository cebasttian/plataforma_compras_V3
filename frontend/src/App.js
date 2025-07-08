import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProveedorInicio from "./pages/proveedor/inicio_proveedor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/proveedor" element={<ProveedorInicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
