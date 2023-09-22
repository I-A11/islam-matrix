const Navbar = () => {
  return (
    <div>
      <nav className="w-full bg-cyan-600 sticky top-0 left-0 z-50">
        <div className="justify-around hidden md:flex shadow-lg py-6 border-b-1">
          <div className="">Islam Aboamh</div>
          <div className="rotate-90 w-20 border-b-2 border-gray-200"></div>
          <div className="flex justify-around space-x-6 ">
            <div>Home</div>
            <div>About</div>
          </div>
          <div className="rotate-90 w-20 border-b-2 border-gray-200"></div>
          <div className="flex space-x-4 ">
            <div className="">matrix</div>
            <div className="">matrix</div>
          </div>
        </div>
        <div className="container md:hidden bg-cyan-600 max-w-full h-32 grid grid-cols-[3fr,1fr]">
          <div className="item-1">Islam Aboamh</div>
          <div className="horizontal border-t-2 border-gray-200"></div>
          <div className="item-2">
            <div>Home</div>
            <div>About</div>
          </div>
          <div className="rotate-90 -translate-x-16 -translate-y-14 w-32 border-b-2 border-gray-200"></div>
          <div className="item-3 ml-2 ">
            <div>matrix</div>
            <div>matrix</div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
