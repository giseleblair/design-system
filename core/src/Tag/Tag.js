import React from "react";
import cx from "classnames";

import styles from "./Tag.less";
export function Tag(props) {
  return (
    <span className={styles.Tag}>
      <span className={styles.Content}>{props.children}</span>
      <i
        className={cx("fa fa-times-circle", styles.Remove)}
        onClick={(evt) => {
          evt.stopPropagation();
          evt.preventDefault();
          if (props.onRemove) {
            return props.onRemove(props.name, props.value);
          }
        }}
      />
    </span>
  );
}
