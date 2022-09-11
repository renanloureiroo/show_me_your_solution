import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useRouter } from "next/router";

import { Books, AddressBook, House } from "phosphor-react";
import { Avatar } from "./Avatar";

export const MenuUser = () => {
	const router = useRouter();

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

			{
				router.asPath !== '/' ?
				<House className="transition-all opacity-20 cursor-pointer hover:opacity-80" size={25} onClick={() => router.push('/')} />
				: null
			}
			

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
						<Avatar width={40} height={40} />
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
				<MenuItem>Minha conta</MenuItem>
				<Divider />
				<MenuItem>
					<ListItemIcon>
						<AddressBook size={22} />
					</ListItemIcon>
					Meus Desafios
				</MenuItem>
				<MenuItem onClick={() => router.push('/challengers')}>
					<ListItemIcon>
						<Books size={22} />
					</ListItemIcon>
					Desafios
				</MenuItem>
			</Menu>
		</div>
	);
};
