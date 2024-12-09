import { useState } from "react";
import { PostSortOrder } from "../constants";
import { IoIosArrowDown } from "react-icons/io";

export const DropdownSort: React.FC = () => {
  const [isOptionsShow, setIsOptionsShow] = useState(false);
  const [sortOrder, setSortOrder] = useState<PostSortOrder>(PostSortOrder.Latest);

  const handleSortChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    order: PostSortOrder
  ) => {
    e.preventDefault();
    setIsOptionsShow(prev => !prev);
    setSortOrder(order);
    // todo
  };
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsOptionsShow(prev => !prev);
  };

  return <>
    <div className="
      w-full
      relative
    ">
      <a onClick={(e) => handleClick(e)} className="
        flex
        justify-between
        items-center
        bg-custom-white
        ring-2
        ring-custom-black
        py-3
        px-4
        cursor-pointer
      ">
        <p className="
          font-azeret
        ">
          {sortOrder.split(" ")[0]}
        </p>
        <IoIosArrowDown size={20} />
      </a>
      <div className={`
        absolute
        left-0
        z-10
        mt-2
        w-40
        bg-white
        ring-2
        ring-custom-black
        focus:outline-none
        ${isOptionsShow ? "" : "hidden"}
      `}>
        <a href="#" onClick={(e) => handleSortChange(e, PostSortOrder.Latest)} className="
          block
          px-4
          py-2
          text-sm
          text-custom-black
          border-b-2
          border-custom-black
          hover:bg-custom-gray-light
        ">
          { PostSortOrder.Latest }
        </a>
        <a href="#" onClick={(e) => handleSortChange(e, PostSortOrder.Oldest)} className="
          block
          px-4
          py-2
          text-sm
          text-custom-black
          hover:bg-custom-gray-light
        ">
          { PostSortOrder.Oldest }
        </a>
      </div>
    </div>
  </>
}