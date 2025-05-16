const Checklists = () => {
  interface checklist {
    checklist: String;
    usuario: String;
    unidade: String;
    data_hora?: Date;
  }

  const usuario: checklist = {
    checklist: "Checklist diário",
    usuario: "João Silva",
    unidade: "Unidade Centro",
    data_hora: undefined,
  };
  
  return (
    // aqui é o corpo
    <div className="pt-1 m-4">
      {/* isso aqui é um card */}
      <div className="border-2 rounded-2xl border-[#00B353]  flex flex-col justify-start w-full bg-white ">
        {/* aqui vai ficar o titulo com numeração */}
        <div className="text-2xl text-[#00B353] font-bold flex justify-between p-4 ">
          <div className="flex items-center gap-3">
            <span className="bg-[#00B353] text-white rounded-full w-8 h-8 flex items-center justify-center">
              1
            </span>
            <label>{usuario.checklist}</label>
          </div>

          <span className="block py-2 px-3 text-white font-bold bg-[#00B353] rounded text-sm md:text-base">
            CONCLUÍDA
          </span>
        </div>

        <div className="flex flex-row justify-between p-4">
          {/* informações em lista */}
          <div className="text-black flex flex-col justify-start text-left">
            <ul>
              <li>
                <label className="font-bold text-black ">Checklist: </label>{" "}
                {usuario.checklist}
              </li>
            </ul>
            <ul>
              <li>
                <label className="font-bold text-black ">Usuário: </label>
                {usuario.usuario}
              </li>
            </ul>
            <ul>
              <li>
                <label className="font-bold text-black ">Unidade: </label>
                {usuario.unidade}
              </li>
            </ul>
            <ul>
              <li>
                <label className="font-bold text-black ">Data/Hora: </label>
                {usuario.unidade}
              </li>
            </ul>

          </div>
          <div className=" font-bold text-[#00B353] flex items-end">
            VISUALIZAR
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklists;
