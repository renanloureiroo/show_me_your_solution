import { ButtonAuthenticate } from "./ButtonAuthenticate";

import { LogoInput } from "./Logo";
import { MenuUser } from "./MenuUser";

export const Header = () => {
	return (
		<header className="w-full transition-all  absolute ">
			<div className="container flex items-center h-24 mx-auto p-4">
				<div className="flex-1">
					<LogoInput  width={150} />
				</div>

				<div className="flex w-20 justify-between">
					<MenuUser />
					<ButtonAuthenticate />
				</div>
			</div>
		</header>
	);
};
