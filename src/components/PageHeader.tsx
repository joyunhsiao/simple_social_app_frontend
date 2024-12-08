interface PageHeaderProps {
  text: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  text
}) => {
  return <>
    <div className="
      bg-custom-white
      text-center
      text-xl
      font-bold
      ring-2
      ring-custom-black
      py-5
      mb-4
    ">
      {text}
    </div>
  </>
}