import { Button } from "../../../../common";
import styles from "./styles.module.css";

export const EmptyCourseList = ({ handleAddCourse }) => {
  return (
    <div className={styles.center} data-testid="emptyContainer">
      <h2>Your list is Empty</h2>
      <p>Please use 'Add New Course' button to add your first course</p>
      <Button
        buttonText={"ADD NEW COURSE"}
        handleClick={handleAddCourse}
      ></Button>
    </div>
  );
};
