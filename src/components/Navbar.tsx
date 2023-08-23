import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar sticky top-0 z-50 bg-black flex justify-center items-center px-[40px] pt-[40px] pb-[20px] max-w-[1280px] m-auto">
      <Link to="/">
        <img
          className="img-logo w-[250px]"
          src="/pokemon_logo.png"
          alt="img-logo-pokemon"
        />
      </Link>
    </div>
  );
};

export default Navbar;
