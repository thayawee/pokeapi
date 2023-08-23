import { useParams } from "react-router-dom";
import usePoke from "../hooks/usePoke";
import Types from "./Types";
import Loading from "./Loading";

const PokeCard = () => {
  const { id: name } = useParams();
  const { poke, loading, error } = usePoke(name || "");

  // console.log(poke);

  if (loading || !poke) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className="poke-card-container flex flex-col justify-center items-center px-[40px] pb-[40px] max-w-[1280px] m-auto mt-[90px]">
      <div className="poke-card relative flex flex-col justify-center items-center border-[1px] border-white/20 bg-neutral-900 w-[400px] md:w-[500px] lg:w-[600px] px-[20px] pb-[40px] pt-[90px] rounded-[20px] gap-[20px]">
        <p className="capitalize font-bold text-center text-stone-200 text-[18px] md:text-[20px] lg:text-[24px]">
          {poke?.name}
        </p>
        <div className="absolute top-[-84px]">
          <div className="relative flex flex-col justify-center items-center animate-wiggle animate-infinite">
            <div className="border-[6px] border-b-[3px] w-[150px] h-[75px] md:w-[160px] md:h-[80px] lg:w-[170px] lg:h-[83px] border-black bg-red-600 shadow-xl shadow-white/90 rounded-t-[100px]"></div>
            <div className="border-[6px] border-t-[3px] w-[150px] h-[75px] md:w-[160px] md:h-[80px] lg:w-[170px] lg:h-[83px] border-black bg-white shadow-lg shadow-white/40 rounded-b-[100px]"></div>
            <p className="text-center absolute top-[50px] border-[6px] border-black bg-white rounded-full px-[10px] py-[10px] font-bold text-black text-[14px] md:text-[16px] lg:text-[18px]">
              &#35;
              {poke?.id && poke?.id <= 9
                ? `0000${poke?.id}`
                : poke?.id && poke?.id <= 99
                ? `000${poke?.id}`
                : poke?.id && poke?.id <= 999
                ? `00${poke?.id}`
                : poke?.id && poke?.id <= 9999
                ? `0${poke?.id}`
                : poke?.id}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-evenly w-full">
          {poke.base_experience ? (
            <p className="flex flex-col items-center">
              <span className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">
                {poke?.base_experience}
              </span>
              <span className="text-[10px] md:text-[12px] lg:text-[14px] border-t-[1px] border-gray-500 w-[60px] md:w-[70px] lg:w-[80px] text-center mt-[6px]">
                Base Exp
              </span>
            </p>
          ) : (
            <p className="flex flex-col items-center">
              <span className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">
                ?
              </span>
              <span className="text-[10px] md:text-[12px] lg:text-[14px] border-t-[1px] border-gray-500 w-[60px] md:w-[70px] lg:w-[80px] text-center mt-[6px]">
                Base Exp
              </span>
            </p>
          )}

          {poke.height ? (
            <p className="flex flex-col items-center ">
              <span className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">
                {poke?.height && poke?.height / 10}
                <span className="text-gray-400">m</span>
              </span>
              <span className="text-[10px] md:text-[12px] lg:text-[14px] border-t-[1px] border-gray-500 w-[60px] md:w-[70px] lg:w-[80px] text-center mt-[6px]">
                Height
              </span>
            </p>
          ) : (
            <p className="flex flex-col items-center">
              <span className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">
                ?
              </span>
              <span className="text-[10px] md:text-[12px] lg:text-[14px] border-t-[1px] border-gray-500 w-[60px] md:w-[70px] lg:w-[80px] text-center mt-[6px]">
                Height
              </span>
            </p>
          )}

          {poke.weight ? (
            <p className="flex flex-col items-center">
              <span className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">
                {poke?.weight && poke?.weight / 10}
                <span className="text-gray-400">kg</span>
              </span>
              <span className="text-[10px] md:text-[12px] lg:text-[14px] border-t-[1px] border-gray-500 w-[60px] md:w-[70px] lg:w-[80px] text-center mt-[6px]">
                Weight
              </span>
            </p>
          ) : (
            <p className="flex flex-col items-center">
              <span className="font-bold text-[14px] md:text-[16px] lg:text-[18px]">
                ?
              </span>
              <span className="text-[10px] md:text-[12px] lg:text-[14px] border-t-[1px] border-gray-500 w-[60px] md:w-[70px] lg:w-[80px] text-center mt-[6px]">
                Weight
              </span>
            </p>
          )}
        </div>

        <img
          className="animate-jump-in animate-delay-[2ms] w-[50%] "
          src={poke?.sprites.other["official-artwork"].front_default}
          alt={poke.name}
        />

        <div className="flex items-center gap-[10px]">
          {poke?.types.map((type) => (
            <Types key={type.type.name} type={type} />
          ))}
        </div>

        {poke.abilities.length > 0 ? (
          <div className="flex justify-center items-center gap-[10px] text-[14px] md:text-[16px] lg:text-[18px]">
            <span>Ability:</span>
            {poke?.abilities.map((ability) => (
              <div
                key={ability.ability.name}
                className="flex flex-col border-[1px] border-white bg-neutral-900 rounded-full px-[10px] text-[10px] md:text-[12px] lg:text-[14px]"
              >
                {ability.ability.name}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}

        {poke.held_items.length > 0 ? (
          <div className="flex justify-center items-center gap-[10px] text-[14px] md:text-[16px] lg:text-[18px]">
            <span>Item:</span>
            {poke?.held_items.map((item) => (
              <div
                key={item.item.name}
                className="flex flex-col border-[1px] border-white bg-neutral-900 rounded-full px-[10px] text-[10px] md:text-[12px] lg:text-[14px]"
              >
                {item.item.name}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PokeCard;
