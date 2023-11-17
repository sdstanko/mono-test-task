import React from "react";
import List from "../../components/List";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import styles from './Makes.module.css'

const Makes = () => {
  return (
      <div className={styles.makes}>
          <Link to="/create/makes">
              <Button>Create make</Button>
          </Link>
          <List />
      </div>
  );
};

export default Makes;
