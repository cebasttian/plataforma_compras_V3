import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProveedorInicio from "./pages/proveedor/inicio_proveedor";
import FiltroZLIST from "./pages/proveedor/zlist/filtro_zlist"
import ProveedorZLIST from "./pages/proveedor/zlist/zlist"


function App() {
  	return (
    	<BrowserRouter>
      		<Routes>
				<Route path="/proveedor" element={<ProveedorInicio />} />
				<Route path="/proveedor/filtro-zlist" element={<FiltroZLIST />} />
				<Route path="/proveedor/zlist" element={<ProveedorZLIST/>} />
				{/*
				<Route path="/proveedor/filtro-me4x" element={<FiltroME4X />} />
				<Route path="/proveedor/me4x" element={<ProveedorME4X/>} />
				<Route path="/proveedor/filtro-me4l" element={<FiltroME4L />} />
				<Route path="/proveedor/me4l" element={<ProveedorME4L/>} />
       			 */}
      		</Routes>
    	</BrowserRouter>
  	);
}

export default App;
