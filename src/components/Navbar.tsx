import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="bg-white w-full border-b border-[#999999]">
      <div className="max-w-screen-xl  mx-auto p-4 flex items-center space-x-3 rtl:space-x-reverse">
        <span onClick={()=>{navigate(-1)}}>
          {pathname != "/home" ? (
            <svg
              fill="#000000"
              height="24"
              width="24"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              enable-background="new 0 0 512 512"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <polygon points="213.3,205.3 213.3,77.3 0,248 213.3,418.7 213.3,290.7 512,290.7 512,205.3 "></polygon>{" "}
              </g>
            </svg>
          ) : (
            ""
          )}
        </span>
        <span className="self-center text-2xl font-bold whitespace-nowrap  text-[#00B353]">
          {pathname.replace("/", "").toUpperCase()}
        </span>

        <div className="hidden w-full " id="navbar-default">
          {/* <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 p-3 text-white font-bold bg-[#00B353] rounded"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button className="block py-2 px-3 p-3 text-white font-bold bg-[#00B353] rounded">
                Cadastrar Tasks
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 p-3 text-white font-bold bg-[#00B353] rounded"
              >
                Módulos
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
