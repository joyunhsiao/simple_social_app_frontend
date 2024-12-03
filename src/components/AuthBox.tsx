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
        <img
          src="../src/assets/meta_wall.svg"
          alt="MetaWall logo"
        />
        {children}
      </div>
    </div>
  </>
}