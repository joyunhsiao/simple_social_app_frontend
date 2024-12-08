import { useState } from "react"
import { PostCard, SearchBar } from "../components"

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", searchValue);
  };

  return <>
    <div className="
      mb-4
    ">
      <SearchBar value={searchValue} onChange={handleSearchValueChange} onClick={handleSubmit}/>
    </div>
    <PostCard name="A" isImg={true} />
    <PostCard name="B" />
    <PostCard name="C" isImg={true} />
    <PostCard name="D" />
  </>
}