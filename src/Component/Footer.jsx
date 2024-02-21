import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-100 bg-light text-center mt-5">
        <p>
          © {new Date().getFullYear()} Sumon Ahamed. All Rights Resrved| Tems
          and conditions.
        </p>
      </footer>
    </>
  );
};

export default Footer;
