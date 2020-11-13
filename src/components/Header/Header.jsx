import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src='https://png.pngtree.com/element_pic/00/16/07/115783931601b5c.jpg' alt='Logo' />

			<div className={classes.loginBlock}>
				{props.isAuth ? props.login
					: <NavLink to={'/login'}>Login</NavLink>}
			</div>
		</header>
	);
}

export default Header;