import { useContext, useState, type FormEvent } from "react";
import { AuthContext } from "../services/routeProvider";

const Login = () => {
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const { login } = useContext(AuthContext);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    login({ user: user, pass: pass });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <form onSubmit={handleLogin} className="w-full space-y-6 max-w-md ">
        <h1 className="text-2xl font-bold text-center text-gray-800">Login</h1>
        <div className="">
          <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
            Usuário
          </label>
          <input
            type="text"
            id="usuario"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#00B353] focus:border-[#00B353] focus:outline-none block  p-2.5 "
            placeholder="Usuário"
            required
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-[#00B353] focus:border-[#00B353] focus:outline-none block  p-2.5 "
            placeholder="Senha"
            required
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#00B353] hover:bg-[#009245] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B353] transition duration-200"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
