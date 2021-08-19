import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {header} from '../../data/dataStore.js';
import Search from '../Search/Search.js';

class Header extends React.Component {
  render () {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={header.logo} />
            </Link>
            <nav>
              {header.nav.map(link => (
                <NavLink key= '' exact to={link.path}>{link.name}</NavLink>
              ))}
              {/* <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink> */}
            </nav>
          </div>
          <Search />
        </Container>
      </header>
    );
  }    
}

export default Header;