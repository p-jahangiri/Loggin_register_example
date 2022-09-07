import React from "react";
import cn from "classnames";

import styles from "./card.module.scss";

const Card = ({ children, className, ...otherProps }) => (
      <div className={cn(styles.card, className)} {...otherProps}>
            {children}
      </div>
);

export default Card;
