import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className=" font-bold">ABOUT</h5>
        <p className="hover:underline cursor-pointer">How Airbnb works</p>
        <p className="hover:underline cursor-pointer">Newsroom</p>
        <p className="hover:underline cursor-pointer">Investors</p>
        <p className="hover:underline cursor-pointer">Airbnb Plus</p>
        <p className="hover:underline cursor-pointer">Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="hover:underline cursor-pointer">Accessibility</p>
        <p className="hover:underline cursor-pointer">This is not a real site</p>
        <p className="hover:underline cursor-pointer">Its a pretty awesome clone</p>
        <p className="hover:underline cursor-pointer">Referrals accepted</p>
        <p className="hover:underline cursor-pointer">Papafan</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="hover:underline cursor-pointer">Papa React</p>
        <p className="hover:underline cursor-pointer">Presents</p>
        <p className="hover:underline cursor-pointer">Zero to Full Stack </p>
        <p className="hover:underline cursor-pointer">Hundreds of Students</p>
        <p className="hover:underline cursor-pointer">Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="hover:underline cursor-pointer">Papa React</p>
        <p className="hover:underline cursor-pointer">Presents</p>
        <p className="hover:underline cursor-pointer">Zero to Full Stack </p>
        <p className="hover:underline cursor-pointer">Hundreds of Students</p>
        <p className="hover:underline cursor-pointer">Join Now</p>
      </div>
    </div>
  );
}

export default Footer;
