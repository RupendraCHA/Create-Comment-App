import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#40bd61] p-4 mx-auto">
      <div className="container mx-auto">
          <div className='flex items-center justify-between font-bold text-white'>
            <h1 className="text-4xl text-[#fff]">Comments</h1>
            <div className="flex items-center justify-between gap-20 hidden md:inline-flex">
              <p>Home</p>
              <p>About</p>
              <p>Contact</p>
            </div>
            <p>View All</p>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
