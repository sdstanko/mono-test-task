import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
				<Link to="/">
					<Button>Models</Button>
				</Link>
				<Link to="makes">
					<Button>Makes</Button>
				</Link>
            </nav>
        </header>
    );
};

export default Header;
