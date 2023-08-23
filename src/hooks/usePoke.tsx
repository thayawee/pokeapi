import { useEffect, useState } from "react";
import { IPokemon } from "../types/pokemon";
import { host } from "../constant";

const usePoke = (name: string) => {
  const [poke, setPoke] = useState<IPokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${host}/${name}`);

        const data = await res.json();

        setPoke(data);

        // console.log(poke);
      } catch (err) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return { poke, loading, error };
};

export default usePoke;
