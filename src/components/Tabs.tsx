import { ReactNode, useState } from "react";

interface TabsProps {
  tabOne: string;
  tabTwo: string;
  childrenOne: ReactNode;
  childrenTwo: ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  tabOne,
  tabTwo,
  childrenOne,
  childrenTwo
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabsTitleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, index:number) => {
    e.preventDefault();
    setActiveTab(index);
  };

  return <>
    <div className="
      pt-4
    ">
      <div className="
        flex
        px-4
      ">
        <a href="#" onClick={(e) => handleTabsTitleClick(e, 0)} className={`
          block
          border-2
          border-custom-black
          rounded-t-lg
          px-6
          py-2
          ${activeTab === 1 ? "bg-custom-white" : "bg-custom-black"}
          ${activeTab === 1 ? "text-custom-black" : "text-custom-white"}
        `}>{tabOne}</a>
        <a href="#" onClick={(e) => handleTabsTitleClick(e, 1)} className={`
          block
          border-2
          border-custom-black
          rounded-t-lg
          px-6
          py-2
          ${activeTab === 1 ? "bg-custom-black" : "bg-custom-white"}
          ${activeTab === 1 ? "text-custom-white" : "text-custom-black"}
        `}>{tabTwo}</a>
      </div>
      <div className="
        bg-custom-white
        ring-2
        ring-custom-black
        rounded-lg
        py-8
        px-24
        sm:px-28
      ">
        {activeTab === 1 ? childrenTwo : childrenOne}
      </div>
    </div>
  </>
}