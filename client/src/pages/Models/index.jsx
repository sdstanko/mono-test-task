import React from 'react';
import List from '../../components/Grid';
import ListItem from '../../components/ListItem';
import styles from './Models.module.css'

const Models = () => {
    return (
        <div className={styles.models}>
            <List>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
            </List>
        </div>
    );
};

export default Models;
