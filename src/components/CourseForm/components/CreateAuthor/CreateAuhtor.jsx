import React, { useState } from "react";
import styles from "./styles.module.css";
import { Button, Input } from "../../../../common";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { saveAuthor } from "../../../../store/slices/authorsSlice";

export const CreateAuthor = () => {
  const dispatch = useDispatch();

  const [authorName, setAuthorName] = useState("");
  const [nextAuthorId, setNextAuthorId] = useState(0);
  const [error, setError] = useState("");

  const handleCreateAuthor = (event) => {
    event.preventDefault();
    setError(authorName.length < 2 ? "Author Name Required" : "");
    if (!error?.length) {
      dispatch(
        saveAuthor({
          author: {
            id: `${nextAuthorId}`,
            name: authorName,
          },
        })
      );
      setNextAuthorId((id) => id + 1);
    }
  };

  return (
    <div className={styles.newAuthorContainer}>
      <Input
        labelText="Author Name"
        placeholderText="Input Text"
        error={error}
        data-testid="createAuthorInput"
        onChange={(event) => setAuthorName(event.target.value)}
      />
      <Button
        buttonText="Create Author"
        data-testid="createAuthorButton"
        handleClick={handleCreateAuthor}
      />
    </div>
  );
};
