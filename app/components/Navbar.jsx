const Navbar = () => {
  return (
    <nav className="w-full bg-cyan-600 ">
      <div className=" justify-around hidden md:flex sticky z-50 shadow-lg py-8 border-b-1">
        <div className="">Islam Aboamh</div>
        <div className="flex justify-between space-x-6 ">
          <div>Home</div>
          <div>About</div>
        </div>
        <div className="flex space-x-4">
          <div className="">matrix</div>
          <div className="">matrix</div>
        </div>
      </div>
      {/* <div className="flex justify-around md:hidden ">
        <div className="">Islam Aboamh</div>
        <div className="flex justify-between space-x-6 ">
          <div>Home</div>
          <div>About</div>
        </div>
        <div className="flex space-x-4">
          <div className="">matrix</div>
          <div className="">matrix</div>
        </div>
      </div> */}
      <div className="md:hidden  ">
        <div className="grid grid-rows-2">
          <div className="flex ">
            <div className="">Islam Aboamh</div>
          </div>
          <div className="transform-x-full w-full border-b-2 border-black"></div>

          <div className="flex justify-center ">
            <div>Home</div>
            <div>About</div>
          </div>
        </div>
        <div className="flex space-x-4 justify-end">
          <div className="">matrix</div>
          <div className="">matrix</div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
