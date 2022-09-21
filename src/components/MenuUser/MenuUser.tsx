import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useSession } from "next-auth/react";

import { House, UserCircle } from "phosphor-react";
import { Avatar } from "../Avatar";

import { MenuItems } from './MenuItems';

export const MenuUser = () => {
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
		<div className="flex items-center">
			{router.asPath !== "/" ? (
				<House
					className="transition-all opacity-20 cursor-pointer hover:opacity-80"
					size={25}
					weight="thin"
					onClick={() => router.push("/")}
				/>
			) : null}

			<Box>
				<Tooltip title="Conta">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
					>
						
						<span className="rounded-full border-2 border-bastille-100">
							{status === 'authenticated' ? <Avatar width={35} height={35} size={35}/> : <UserCircle size={35} className='text-white' weight="thin" />}
						</span>

					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
			<MenuItems/>

			</Menu>
		</div>
	);
};