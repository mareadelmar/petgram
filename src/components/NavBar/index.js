import React from "react";
import { Nav, Link } from "./styles";
import {
	MdOutlineHome,
	MdFavorite,
	MdFavoriteBorder,
	MdPerson,
	MdPersonOutline,
	MdHome,
} from "react-icons/md";
import { useRouteMatch } from "react-router-dom";

const ICONS_SIZE = "32px";

const NavBar = () => {
	const matchHome = useRouteMatch("/");
	const matchFavs = useRouteMatch("/favs");
	const matchUser = useRouteMatch("/user");

	const homeIcon = matchHome ? (
		matchHome.isExact ? (
			<MdHome size={ICONS_SIZE} />
		) : (
			<MdOutlineHome size={ICONS_SIZE} />
		)
	) : (
		<MdOutlineHome size={ICONS_SIZE} />
	);

	const favsIcon = matchFavs ? (
		matchFavs.isExact ? (
			<MdFavorite size={ICONS_SIZE} />
		) : (
			<MdFavoriteBorder size={ICONS_SIZE} />
		)
	) : (
		<MdFavoriteBorder size={ICONS_SIZE} />
	);

	const userIcon = matchUser ? (
		matchUser.isExact ? (
			<MdPerson size={ICONS_SIZE} />
		) : (
			<MdPersonOutline size={ICONS_SIZE} />
		)
	) : (
		<MdPersonOutline size={ICONS_SIZE} />
	);

	return (
		<Nav>
			<Link to='/'>
				{/* <HomeIcon size={ICONS_SIZE} /> */}
				{homeIcon}
			</Link>
			<Link to='/favs'>
				{/* <FavsIcon size={ICONS_SIZE} />{" "} */}
				{favsIcon}
			</Link>
			<Link to='/user'>
				{/* <MdPersonOutline size={ICONS_SIZE} /> */}
				{userIcon}
			</Link>
		</Nav>
	);
};

export default NavBar;
