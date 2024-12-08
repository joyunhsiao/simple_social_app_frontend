import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onClick
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClick = () => {
    onClick();
  };

  return <>
    <div className="
      w-full
      flex
      ring-2
      ring-custom-black
    ">
      <input
        type="text"
        placeholder="Search Posts"
        value={value}
        onChange={handleChange}
        className="
          w-full
          bg-custom-white
          border-r-2
          border-custom-black
          py-3
          px-4
          placeholder:text-custom-gray
          focus:outline-none
          focus:ring-inset
          focus:ring-2
      "/>
      <button
        type="button"
        title="search"
        onClick={handleClick}
        className="
          text-custom-white
          bg-custom-blue
          p-3
          hover:bg-custom-yellow
      ">
        <FiSearch size={20} />
      </button>
    </div>
  </>
}