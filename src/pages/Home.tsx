import { useState } from "react"
import { DropdownSort, PostCard, SearchBar, UserInfoCard } from "../components"

export const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSubmit = () => {
    console.log("Input Value:", searchValue);
  };

  return <>
    <UserInfoCard name="A" />
    <div className="
      flex
      gap-3
      mb-4
    ">
      <div className="w-40">
        <DropdownSort />
      </div>
      <SearchBar value={searchValue} onChange={handleSearchValueChange} onClick={handleSubmit}/>
    </div>
    <PostCard name="A" isImg={true} />
    <PostCard name="B" />
    <PostCard name="C" isImg={true} />
    <PostCard name="D" />
  </>
}