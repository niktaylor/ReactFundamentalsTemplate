import React from "react";

import styles from "./styles.module.css";

export const Input = ({
  placeholderText,
  labelText,
  error,
  onChange,
  "data-testid": dataTestId,
}) => (
  <>
    <label className={styles.label}>
      {labelText}
      <input
        onChange={onChange}
        placeholder={placeholderText}
        className={styles.input}
        data-testid={dataTestId}
      />
      <label className={styles.validation}>{error}</label>
    </label>
  </>
);
