import React from "react";

import styles from "./styles.module.css";
import { Button } from "../../../../common";

export const AuthorItem = ({ author, mode, handleClick }) => {
  return (
    <div className={styles.authorItem} data-testid="authorItem">
      <span>{author.name}</span>

      {mode === "add"}
      <Button
        buttonText={mode === "add" ? "Add" : "Delete"}
        handleClick={handleClick}
        data-testid="addAuthor"
      />
    </div>
  );
};
