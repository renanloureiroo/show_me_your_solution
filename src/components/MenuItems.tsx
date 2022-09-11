import * as React from "react";
import { useRouter } from "next/router";
import { useSession, signOut, signIn } from "next-auth/react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import { Books, AddressBook, SignIn, CircleNotch, SignOut } from "phosphor-react";

export const MenuItems = () => {
	const router = useRouter();
	const { data: session, status } = useSession();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			{status === "authenticated" ? (
				<>
					<MenuItem>Minha conta</MenuItem>
					
					<Divider />

					<MenuItem>
						<ListItemIcon>
							<AddressBook size={22} />
						</ListItemIcon>
						Meus Desafios
					</MenuItem>
					<MenuItem onClick={() => router.push("/challengers")}>
						<ListItemIcon>
							<Books size={22} />
						</ListItemIcon>
						Desafios
					</MenuItem>

					<MenuItem onClick={() => signOut()}>
						<ListItemIcon>
							<SignOut size={22} />
						</ListItemIcon>
						Sair
					</MenuItem>
				</>
			) : status === "unauthenticated" ? (
				<MenuItem onClick={() => signIn()}>
					<SignIn className="mr-2" size={22} />
					Login
				</MenuItem>
			) : (
				<CircleNotch size={32} className="animate-spin" />
			)}
		</>
	);
};
