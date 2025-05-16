import { Link } from "react-router-dom";

const Home = () => {
  const cardData = [
    {
      id: 1,
      titulo: "Crie um checklist",
      description:
        "Construa um checklist do zero ou use modelos para suas auditorias.",
      link: "/checklist/cadastro",
    },
    {
      id: 2,
      titulo: "Crie uma unidade",
      description:
        "Adicione as unidades que serão avaliadas nos seus checklists",
      link: "/checklist/cadastro",
    },
    {
      id: 3,
      titulo: "Crie usuários",
      description: "Traga mais pessoas da sua operação para usa o sistema",
      link: "/checklist/cadastro",
    },
  ];

  const atividades = [
    {
      id: 1,
      titulo: "Checklist criados",
      qtd: 10,
    },
    {
      id: 2,
      titulo: "Unidades criadas",
      qtd: 5,
    },
    {
      id: 3,
      titulo: "Usuários criados",
      qtd: 4,
    },
  ];
  return (
    <div className="rootbd flex flex-col gap-6 mt-4 p-4">
      
      <section className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-medium">Olá, FRANCISCO</h1>
        <p className="text-gray-500 text-base md:text-lg">
          Explore as ações abaixo e descubra as possibilidades para garantir a
          sua <strong>produtividade e crescimento!</strong>
        </p>
      </section>

      <section className="w-full">
        <h2 className="text-xl md:text-2xl font-bold pb-4">Ações rápidas</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-3">
            {cardData.map((card) => (
                <Link to={card.link}>
              <div
                key={card.id}
                className="cards-stylized bg-white flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <span className="bg-[#95d8af]  text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {card.id}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">
                    {card.titulo}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 auto-rows-fr">
            <div className="cards-stylized bg-white flex items-stretch hover:bg-gray-50 rounded-lg transition-colors row-span-2">
              <div className="bg-[#95d8af] rounded-l-md w-38 flex-shrink-0"></div>
              <div className="flex flex-col justify-center gap-1 p-4">
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  Aplique um checklist!
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  Traga mais pessoas da sua operação para usar o Checklist
                  Fácil!
                </p>
              </div>
            </div>

            <div className="cards-stylized bg-white flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <span className="bg-[#95d8af] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                1
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  Central de Ajuda
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section className="w-full mt-6">
        <h2 className="text-xl md:text-2xl font-bold pb-4">Atividade</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {atividades.map((atividade) => (
            <div
              key={atividade.id}
              className="cards-stylized bg-white flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors h-full"
            >
              <span className="bg-[#95d8af] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                {atividade.id}
              </span>
              <div className="flex flex-col gap-1 flex-grow">
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  {atividade.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

    // </div>
  );
};

export default Home;
