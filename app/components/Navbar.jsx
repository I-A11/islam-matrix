const Navbar = () => {
  return (
    <nav className="w-full bg-cyan-600 py-8 ">
      <div className=" justify-around hidden md:flex  ">
        <div className="">Logo</div>
        <div className="flex justify-between space-x-6 ">
          <div>Home</div>
          <div>About</div>
          <div>Archive</div>
        </div>
        <div className="">mode</div>
        <div className="">matrix</div>
      </div>
      <div className="flex justify-around md:hidden ">
        <div className="">LogoMobile</div>
        <div className="flex justify-between space-x-6 ">
          <div>Home</div>
          <div>About</div>
          <div>Archive</div>
        </div>
        <div className="">mode</div>
        <div className="">matrix</div>
      </div>
    </nav>
  );
};
export default Navbar;
