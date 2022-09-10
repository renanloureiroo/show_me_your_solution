import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Link from 'next/link'


import { Avatar } from "./Avatar";

export const MenuUser = () => {

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div >
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<Avatar width={40} height={40} />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
                <MenuItem id="profile" onClick={handleClose}>
                    <Link href="/challengers">
                        <a>Perfil</a>
                    </Link>
                </MenuItem>

				<MenuItem  onClick={handleClose}>
                    <Link href="/challengers">
                        <a>Desafios</a>
                    </Link>
                </MenuItem>
			</Menu>
		</div>
	);
};
