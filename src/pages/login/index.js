import { useYupValidationResolver } from "lib/useYupValidationResolver";
import React, { useContext, useEffect, useState } from "react";
import { Card, Input, Button } from "components/common";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./login.module.scss";
import { LoginDate } from "static/data";
import { Context } from "store";
import * as Yup from "yup";

function Login() {
      const { setUserContext } = useContext(Context);

      const navigate = useNavigate();

      const [isLogin, setIsLogin] = useState(
            JSON.parse(localStorage.getItem("isLogin")) || false,
      );

      const schema = Yup.object().shape({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
                  .required("Password is required")
                  .min(8, "Password must be at least 8 characters"),
      });
      const resolver = useYupValidationResolver(schema);

      const {
            control,
            handleSubmit,
            formState: { errors, isValid },
      } = useForm({
            resolver,
            mode: "all",
      });

      const onSubmit = (data) => {
            const userData = JSON.parse(localStorage.getItem("userData"));
            if (
                  userData &&
                  userData.email === data.email &&
                  userData.password === data.password
            ) {
                  setUserContext(data);
                  localStorage.setItem("isLogin", true);
                  setIsLogin(true);
                  navigate("/profile");
            } else {
                  alert("Email or password is incorrect");
            }
      };

      function handelCancel() {
            localStorage.setItem("isLogin", false);
            setUserContext({});
            navigate("/register");
      }
      useEffect(() => {
            localStorage.setItem("isLogin", JSON.stringify(isLogin));
      }, [isLogin]);

      return (
            <Card className={styles.card}>
                  {LoginDate.map((item, idx) => {
                        return (
                              <React.Fragment key={idx}>
                                    <Input
                                          control={control}
                                          name={item.name}
                                          type={item.type}
                                          className={styles[item.className]}
                                          placeholder={item.placeholder}
                                    />
                                    {errors[item.name] && (
                                          <span>
                                                {errors[item.name].message}{" "}
                                          </span>
                                    )}
                              </React.Fragment>
                        );
                  })}
                  <div className={styles.containerBtn}>
                        <Button
                              title="Register"
                              isDisable={!isValid}
                              onClick={handleSubmit((d) => onSubmit(d))}
                        />
                        <Button
                              title="cancel"
                              btype="danger"
                              onClick={() => handelCancel()}
                        />
                  </div>
            </Card>
      );
}
export default Login;
