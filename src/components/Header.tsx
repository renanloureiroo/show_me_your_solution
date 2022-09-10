
import { ButtonAuthenticate } from "./ButtonAuthenticate";
import { Avatar } from "./Avatar";
import { LogoInput } from "./Logo";
export const Header = () => {
	return (
		<header className="w-full bg-bastille-800 shadow-xl">
			<div className="container flex items-center  max-w-7xl h-24 mx-auto p-4">
				<div className="flex-1">
					<LogoInput  width={150} />
				</div>

				<div className="flex w-20 justify-between">
					<Avatar width={40} height={40} />
					<ButtonAuthenticate />
				</div>
			</div>
		</header>
	);
};
