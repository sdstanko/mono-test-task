import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import styles from './Header.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <nav className={styles.header__nav}>
				<Link to="models">
					<Button>Models</Button>
				</Link>
				<Link to="brands">
					<Button>Brands</Button>
				</Link>
            </nav>
        </header>
    );
};

export default Header;
