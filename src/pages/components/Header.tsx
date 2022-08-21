import Image from "next/image";
import Link from "next/link";
import { ButtonAuthenticate } from "./ButtonAuthenticate";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-4 w-full max-w-7xl h-24 mx-auto">
        <Link href={"/"}>
          <span className="cursor-pointer">
            <Logo />
          </span>
        </Link>
        <ButtonAuthenticate />
      </div>
    </header>
  );
};
