import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.header)}>
        <img className={css(styles.logo)} src={logo} alt='logo' />
        <h1 className={css(styles.title)}>School dashboard</h1>
        {user.isLoggedIn && (
          <p id='logoutSection' className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}
      </header>
    );
  }
}

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    color: '#e0344a',

