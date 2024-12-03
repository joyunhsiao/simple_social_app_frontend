import { ReactNode } from 'react';

interface AuthBoxProps {
  children: ReactNode;
}

export const AuthBox: React.FC<AuthBoxProps> = ({ children }) => {
  return <>
    <div className="
      flex
      flex-col
      md:flex-row
      bg-custom-gray-light
      border-2
      border-custom-black
      py-16
      px-12
    ">
      <img
        src="../src/assets/auth_side_illustration.svg"
        alt="An illustration of people chatting on social media."
        className="
          hidden
          sm:block
          md:mr-12
      "/>
      <div>
        <h1 className="
          font-paytone
          text-6xl
          text-center
          text-custom-blue
        ">
          MetaWall
        </h1>
        {children}
      </div>
    </div>
  </>
}