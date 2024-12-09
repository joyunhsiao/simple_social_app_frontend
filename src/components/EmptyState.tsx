export const EmptyState: React.FC = () => {
  return <>
    <div className="
      bg-custom-white
      rounded-lg
      ring-2
      ring-custom-black
    ">
      <div className="
        flex
        p-4
        border-b-2
        border-custom-black
      ">
        <div className="
          w-2
          h-2
          bg-custom-red
          rounded-full
          ring-1
          ring-custom-black
          me-2
        "></div>
        <div className="
          w-2
          h-2
          bg-custom-yellow-dark
          rounded-full
          ring-1
          ring-custom-black
          me-2
        "></div>
        <div className="
          w-2
          h-2
          bg-custom-green
          rounded-full
          ring-1
          ring-custom-black
        "></div>
      </div>
      <div className="
        text-center
        text-custom-gray
        py-8
      ">
        No posts yet. Create one to get started!
      </div>
    </div>
  </>
}