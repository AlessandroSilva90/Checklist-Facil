import { createContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type LoginType = {
  user: string;
  pass: string;
};

interface contextInterface {
  user: string | null;
  login: (data: LoginType) => void;
  logout: () => void;
}

export const AuthContext = createContext<contextInterface>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface ProviderProp {
  children: ReactNode;
}

export const AuthProvider = ({ children }: ProviderProp) => {
  const [user, setUser] = useState<string | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved).user : null;
  });
  //   const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = (data: LoginType) => {
    const obj = { ...data };
    setUser(data.user);
    localStorage.setItem("user", JSON.stringify(obj));
    navigate("/home");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
