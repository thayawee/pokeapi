import { useEffect, useState } from "react";
import { IPokemon } from "../types/pokemon";
import { all, host } from "../constant";

const usePokeList = () => {
  const [pokeList, setPokeList] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pokeListPerPage] = useState<number>(100);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${host}${all}`);
        // console.log(res);

        const data = await res.json();
        // console.log(data.results);

        data.results.forEach(async (pokemon: IPokemon) => {
          const res = await fetch(`${host}/${pokemon.name}`);
          // console.log(res);

          const data = await res.json();
          // console.log(data);

          setPokeList((poke) => [...poke, data]);
        });
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // get current pokelist
  const indexOfLastPoke = currentPage * pokeListPerPage;
  const indexOfFirstPoke = indexOfLastPoke - pokeListPerPage;
  const currentPokeList = pokeList.slice(indexOfFirstPoke, indexOfLastPoke);

  // change page
  const pagination = (number: number) => setCurrentPage(number);

  return {
    pokeList,
    loading,
    error,
    currentPokeList,
    pokeListPerPage,
    currentPage,
    pagination,
  };
};

export default usePokeList;
