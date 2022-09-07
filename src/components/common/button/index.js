import React from "react";
import cn from "classnames";

import styles from "./button.module.scss";

const Button = ({
      btype = "primary",
      title,
      isDisable = false,
      children,
      height = 42,
      onClick,
      className = "",
      textClassNames = "",
      ...otherProps
}) => {
      return (
            <>
                  <button
                        disabled={isDisable}
                        onClick={onClick}
                        style={{ height }}
                        className={cn(
                              styles.button,
                              btype === "primary" && styles.primary,
                              btype === "secondary" && styles.secondary,
                              btype === "danger" && styles.danger,
                              isDisable && styles.disabled,
                              className,
                        )}
                        {...otherProps}
                  >
                        <div className={cn(styles.text, textClassNames)}>
                              <>
                                    {title}
                                    {children}
                              </>
                        </div>
                  </button>
            </>
      );
};

export default Button;
