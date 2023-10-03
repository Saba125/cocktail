import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/ContextApi";
type Props = {};

const Searchform = (props: Props) => {
  const { setSearchTerm } = useGlobalContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    if(inputRef.current !== null) {
      inputRef.current.focus()
    } 
  }, [])
  return (
    <form className="flex justify-center mt-20 w-full]">
      <div className="w-[600px] bg-[#F1F5F8FF] px-5 py-10 flex justify-center  rounded-md  flex-col items-center    ">
        <h3 className="text-5xl ">Search cocktail here...</h3>
        <input
          type="text"
          className="mt-10 rounded-md py-2 px-2"
          onChange={handleChange}
          ref={inputRef}
        />
      </div>
    </form>
  );
};

export default Searchform;
