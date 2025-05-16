import { useState, type FormEvent } from "react";
import { useContext } from "react";
import { AuthContext } from "../services/routeProvider";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const handleLogout = (e: FormEvent) => {
    e.preventDefault();
    logout();
  };

  const BtnActive = () => {
    return (
      <div
        className={`bg-[#ebf8f1] flex items-center justify-center w-18 h-18 border-r border-[#999999] ${
          isOpen ? "" : "lg:border-b border-b"
        } `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>
    );
  };

  return (
    <>
      <BtnActive />

      <aside
        id="cta-button-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } -translate-x-full`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3  overflow-y-auto bg-[#ebf8f1] ">
          <BtnActive />
          <div className="mt-2">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-black rounded-lg  hover:bg-[#15b35957] 0 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#15b35a"
                  >
                    <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
                  </svg>
                  <span className="ms-3">Início</span>
                </a>
              </li>
              <li
                className="flex items-center p-2 text-black rounded-lg  hover:bg-[#15b35957]"
                onClick={handleLogout}
              >
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  fill="#15b35a"
                >
                  <path d="M13 2v-2l10 3v18l-10 3v-2h-9v-7h1v6h8v-18h-8v7h-1v-8h9zm-2.947 10l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z" />
                </svg>
                <span className="ms-3">Sair</span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenu;
