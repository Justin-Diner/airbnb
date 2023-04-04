import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./SettingsOptions/ProfileButton/ProfileButton";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { receiveSignUpModal, receiveLogInModal } from "../../store/ui";
import LogoDisplay from "./LogoDisplay/LogoDisplay.js";
import SearchBar from "./SearchBar/SearchBar";
import SettingsOptions from "./SettingsOptions/SettingsOptions";
import * as sessionAction from '../../store/session';
import './Navigation.css';

const Navigation = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector(sessionAction.sessionUser);

	let settingsDisplay;

	const showLogIn = () => {
		dispatch(receiveLogInModal(true));
	}

	const showSignUp = () => {
		dispatch(receiveSignUpModal(true));
	}

	return (
		<>
			<div id="top_nav_bar_container">
					<div id="top_nav_bar">
						<div className="nav_component" id="logo_wrapper">
							<LogoDisplay id="nav_logo" />
						</div>
						<div className="nav_component" id="search_wrapper"> 
							<SearchBar id="search_bar_comp"/>
						</div>
						<div className="nav_component" id="settings_options_wrapper">		
							<SettingsOptions user={sessionUser}/>
						</div>
					</div>
			</div>
		</>
	)

}

export default Navigation;