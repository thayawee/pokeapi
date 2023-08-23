import { Link } from "react-router-dom";
import usePokeList from "../hooks/usePokeList";
import Loading from "./Loading";

const PokeList = () => {
  const {
    pokeList,
    loading,
    error,
    currentPokeList,
    pokeListPerPage,
    currentPage,
    pagination,
  } = usePokeList();

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(pokeList.length / pokeListPerPage); i++) {
    pageNumbers.push(i);
  }

  // console.log(pokeList);

  if (loading || !pokeList) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col justify-center items-center gap-[40px]">
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-x-[20px] gap-y-[40px]">
        {currentPokeList.map((poke) => (
          <Link key={poke.id} to={`/${poke.name}`}>
            <div className="flex flex-col justify-between items-center m-auto w-full h-full border-[1px] border-white/20 bg-neutral-900 hover:bg-neutral-800 rounded-[20px] p-[10px] gap-[10px] overflow-hidden">
              <h1 className="capitalize text-[12px] text-center w-full break-words">
                &#35;{poke.id}
                <br></br>
                <span>{poke.name}</span>
              </h1>

              <img
                src={poke.sprites.other["official-artwork"].front_default}
                alt="img-pokemon"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex border-[1px] border-white/20 bg-neutral-900 rounded-[10px] overflow-hidden">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => pagination(number)}
            className={
              currentPage === number
                ? "p-[10px] bg-amber-300 text-black focus:bg-amber-300 focus:text-black"
                : "p-[10px] hover:bg-neutral-800"
            }
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PokeList;
