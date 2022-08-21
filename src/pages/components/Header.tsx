import Image from "next/image";
import { ButtonAuthenticate } from "./ButtonAuthenticate";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-4 w-full max-w-7xl h-24 mx-auto">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={140}
          height={80}
          layout="fixed"
        />
        <ButtonAuthenticate />
      </div>
    </header>
  );
};
