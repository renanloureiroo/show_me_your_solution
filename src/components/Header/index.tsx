import React from 'react'
import { LogoShowMeYouSolution } from "../LogoShowMeYouSolution";
import { MenuUser } from "../MenuUser/MenuUser";


export const Header = () => {

	return (
		<header className="w-full transition-all absolute ">
			<div className="flex items-center h-24 p-4 container mx-auto justify-between">

			<LogoShowMeYouSolution  width={150} height={150} url="/" />

				<div className="flex space-x-2">
					<MenuUser />
				</div>


			</div>
		</header>
	);
};
