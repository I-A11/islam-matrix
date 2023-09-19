const Navbar = () => {
  return (
    <nav className="h-12 w-full bg-cyan-600 ">
      <div className="flex justify-around items-center ">
        <div className="">Logo</div>
        <div className="flex justify-between ">
          <div>Home</div>
          <div>About</div>
          <div>Archive</div>
        </div>
        <div className="">mode</div>
      </div>
    </nav>
  );
};
export default Navbar;
