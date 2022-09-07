import { useController, useForm } from "react-hook-form";
import styles from "./input.module.scss";
import cn from "classnames";
import React from "react";

const Input = ({ control, className, name, ...otherProps }) => {
      const { control: defaultControl } = useForm();

      const { field } = useController({
            control: control ? control : defaultControl,
            defaultValue: otherProps.defaultValue,
            name,
      });

      return (
            <input
                  name={name}
                  {...field}
                  type="text"
                  className={cn(styles.input, className)}
                  {...otherProps}
            />
      );
};
export default Input;
