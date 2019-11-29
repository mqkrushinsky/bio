import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: true,
            headerClass: "header-image "
        }
    }

    toggleMenu() {
        this.setState({ displayMenu: !this.state.displayMenu });
    }

    render() {
        let path = this.props.location.pathname.slice(1);
		if (path === "") {
			path = "home";
		}
        let className = path + "-header-image";

        if (!$("#headerImage").hasClass(className)) {
            $("#headerImage").removeClass();
            $("#headerImage").addClass("header-image");

            setTimeout(function () {
                $("#headerImage").addClass(className);
            }, 1);
        }

        return (
            <header className="App-header">
                <div id="headerImage" className="header-image">

                </div>
                <nav>
                    <div className="collapse-button-area">
                        <button className="collapse-button" onClick={this.toggleMenu.bind(this)}>
                            <FontAwesomeIcon icon={faBars} size="2x" />
                        </button>
                    </div>
                    <div id="navMenu" className={this.state.displayMenu ? "collapse-menu" : "expand-menu"}>
                        <NavLink className="navigation-link" exact to="/">Home</NavLink>
                        <NavLink className="navigation-link" to="/music">Music</NavLink>
                        <NavLink className="navigation-link" to="/writing">Writing</NavLink>
                        <NavLink className="navigation-link" to="/art">Art</NavLink>
                        <NavLink className="navigation-link" to="/programming">Code</NavLink>
                        <NavLink className="navigation-link" to="/contact">Contact</NavLink>
                    </div>
                </nav>
            </header>
        )
    }
}

export default withRouter(NavBar);