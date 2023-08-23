import { ITypes } from "../types/pokemon";
import { RiEmotionHappyLine } from "react-icons/ri";
import { GrCircleQuestion } from "react-icons/gr";
import { TbInnerShadowBottomLeftFilled } from "react-icons/tb";
import {
  GiPunchBlast,
  GiLibertyWing,
  GiSurprisedSkull,
  GiGroundbreaker,
  GiFallingRocks,
  GiBee,
  GiGhost,
  Gi3DHammer,
  GiSmallFire,
  GiWaterDrop,
  GiHighGrass,
  GiElectric,
  GiPsychicWaves,
  GiMeltingIceCube,
  GiSpikedDragonHead,
  GiMoon,
  GiFairyWand,
} from "react-icons/gi";

interface TypesProps {
  type: ITypes;
}

const Types = ({ type }: TypesProps) => {
  return (
    <div className="flex items-center justify-center animate-fade">
      <>
        {type.type.name == "normal" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <RiEmotionHappyLine className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-white" />
            </button>
          </div>
        ) : type.type.name == "fighting" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiPunchBlast className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-orange-400" />
            </button>
          </div>
        ) : type.type.name == "flying" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiLibertyWing className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-cyan-300" />
            </button>
          </div>
        ) : type.type.name == "poison" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiSurprisedSkull className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-indigo-500" />
            </button>
          </div>
        ) : type.type.name == "ground" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiGroundbreaker className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-yellow-600" />
            </button>
          </div>
        ) : type.type.name == "rock" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiFallingRocks className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-zinc-400" />
            </button>
          </div>
        ) : type.type.name == "bug" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiBee className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-lime-500" />
            </button>
          </div>
        ) : type.type.name == "ghost" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiGhost className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-teal-600" />
            </button>
          </div>
        ) : type.type.name == "steel" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <Gi3DHammer className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-slate-400" />
            </button>
          </div>
        ) : type.type.name == "fire" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiSmallFire className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-red-400" />
            </button>
          </div>
        ) : type.type.name == "water" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiWaterDrop className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-sky-400" />
            </button>
          </div>
        ) : type.type.name == "grass" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiHighGrass className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-green-500" />
            </button>
          </div>
        ) : type.type.name == "electric" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiElectric className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-yellow-400" />
            </button>
          </div>
        ) : type.type.name == "psychic" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiPsychicWaves className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-blue-500" />
            </button>
          </div>
        ) : type.type.name == "ice" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiMeltingIceCube className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-cyan-200" />
            </button>
          </div>
        ) : type.type.name == "dragon" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiSpikedDragonHead className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-orange-500" />
            </button>
          </div>
        ) : type.type.name == "dark" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiMoon className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-gray-500" />
            </button>
          </div>
        ) : type.type.name == "fairy" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GiFairyWand className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-rose-300" />
            </button>
          </div>
        ) : type.type.name == "unknown" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <GrCircleQuestion className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-white" />
            </button>
          </div>
        ) : type.type.name == "shadow" ? (
          <div className="tooltip" data-tip={type.type.name}>
            <button>
              <TbInnerShadowBottomLeftFilled className="border-none rounded-full w-[50px] h-[50px] p-[8px] text-black bg-slate-500" />
            </button>
          </div>
        ) : (
          ""
        )}
      </>
    </div>
  );
};

export default Types;
