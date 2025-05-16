import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import CadastroCheck from "./pages/CadastroCheck";
import Checklists from "./pages/CheckLists";
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import SideMenu from "./components/SideMenu";
import Login from "./pages/Login";
import { AuthProvider } from "./services/routeProvider";
import { type ReactNode, useContext } from "react";
import { AuthContext } from "./services/routeProvider";

const Rotas = () => {
  interface ProviderProp {
    children: ReactNode;
  }
  const Private = ({ children }: ProviderProp) => {
    const { user } = useContext(AuthContext);
    // if(user){
    //     return <div className="loading">Carregando...</div>
    // }
    if (user == null) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            element={
              <>
                <div className="flex flex-row">
                  <SideMenu />
                  <Nav />
                </div>
                <div className="rootbody">
                  <Outlet />
                </div>
              </>
            }
          >
            <Route
              path="/home"
              element={
                <Private>
                  <Home />
                </Private>
              }
            />
            <Route
              path="/checklist"
              element={
                <Private>
                  <Checklists />
                </Private>
              }
            />
            <Route
              path="/checklist/cadastro"
              element={
                <Private>
                  <CadastroCheck />
                </Private>
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />{" "}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default Rotas;
