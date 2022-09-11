

import { LogoInput } from "./Logo";
import { MenuUser } from "./MenuUser";

export const Header = () => {
	return (
		<header className="w-full transition-all absolute ">
			<div className="flex items-center h-24 p-4 container mx-auto">
				<div className="flex-1">
					<LogoInput  width={150} />
				</div>

				<div className="flex space-x-2">
					<MenuUser />
				</div>
			</div>
		</header>
	);
};
