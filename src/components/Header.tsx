import { useRouter } from "next/router";
import { LogoInput } from "./Logo";
import { MenuUser } from "./MenuUser";

export const Header = () => {
	const router = useRouter()
	return (
		<header className="w-full transition-all absolute ">
			<div className="flex items-center h-24 p-4 container mx-auto">
				<a className="flex-1 cursor-pointer" onClick={ () =>router.push('/')} >
					<LogoInput  width={150} />
				</a>

				<div className="flex space-x-2">
					<MenuUser />
				</div>
			</div>
		</header>
	);
};
