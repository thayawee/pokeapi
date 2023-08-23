import PokeList from "../components/PokeList";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-[40px] py-[40px] max-w-[1280px] m-auto">
      <PokeList />
    </div>
  );
};

export default Home;
