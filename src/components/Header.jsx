const Header = () => {
  return (
    <header className="flex items-center  justify-between px-16 py-3 text-white bg-black  ">
      <h1 className="text-3xl font-mediumx">Logo</h1>

      <nav className="space-x-5">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Product</a>
        <a href="">LookBook</a>
      </nav>

      <button className="bg-amber-400 text-black/70 px-4 py-2 rounded cursor-pointer">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
