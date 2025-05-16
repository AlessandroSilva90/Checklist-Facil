const CadastroCheck = () => {
    
  return (
    <>
      <form className="m-4 p-4 bg-white rounded-2xl drop-shadow-xl shadow black space-y-4">
        <div className="">
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
              Checklist
            </label>
            <input
              type="text" 
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00B353] focus:border-[#00B353] focus:outline-none focus:ring-2 block w-full p-2.5 "
              placeholder="Nome do checklist"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
              Usuário
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00B353] focus:border-[#00B353] focus:outline-none focus:ring-2 block w-full p-2.5 "
              placeholder="Usuário Responsável"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
              Unidade
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00B353] focus:border-[#00B353] focus:outline-none focus:ring-2 block w-full p-2.5 "
              placeholder="Unidade"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
              Assunto
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00B353] focus:border-[#00B353] focus:outline-none focus:ring-2 block w-full p-2.5 "
              placeholder="Assunto"
              required
              aria-label=""
            />
            <label aria-label="" className="text-gray-400 text-sm">
              Digite e maneira objetiva para melhor resultado
            </label>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 text-left">
              Data e Hora
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00B353] focus:border-[#00B353] focus:outline-none focus:ring-2 block w-full p-2.5 "
              placeholder="John"
              required
            />
          </div>
        </div>
        <div className="flex justify-end pr-10">
          <button className="py-2 px-3 p-3 text-white font-bold bg-[#00B353] rounded hover:bg-[rgb(89,158,82)] focus:outline-2 focus:outline-offset-2 focus:outline-[rgb(89,158,82)]">
            CADASTRAR
          </button>
        </div>
      </form>
    </>
  );
};

export default CadastroCheck;
