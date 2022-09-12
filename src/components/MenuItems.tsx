import * as React from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import { Books, AddressBook,  CircleNotch, UserCircle  } from "phosphor-react";

import { Login } from "./Login";
import { Logout } from "./Logout";

export const MenuItems = () => {
	const router = useRouter();
	const { data: session, status } = useSession();


	return (
		<>
			{status === "authenticated" ? (
				<>
					<MenuItem onClick={() => router.push("/user")}>
						<ListItemIcon>
							<UserCircle size={22} />
						</ListItemIcon>
						Minha conta
					</MenuItem>
					
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

					<MenuItem >
						<Logout/>
					</MenuItem>
				</>
			) : status === "unauthenticated" ? (
				<MenuItem >
					<Login/>
				</MenuItem>
			) : (
				<CircleNotch size={32} className="animate-spin" />
			)}
		</>
	);
};

