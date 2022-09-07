import { useYupValidationResolver } from "lib/useYupValidationResolver";
import { Button, Card, Input } from "components/common";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.scss";
import { RegisterData } from "static/data";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

function Register() {
      const navigate = useNavigate();

      const schema = Yup.object().shape({
            name: Yup.string().required("Name is required"),
            familyName: Yup.string().required("Family Name is required"),
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
                  .required("Password is required")
                  .min(8, "Password must be at least 8 characters")
                  .matches(/[A-Z]+/, "One uppercase character")
                  .matches(/\d+/, "One number"),
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

      const userData = JSON.parse(localStorage.getItem("userData"));

      const onSubmit = (data) => {
            if (userData?.name === data.name) {
                  alert("user already exist");
            } else {
                  localStorage.setItem("userData", JSON.stringify(data));
                  navigate("/login");
            }
      };
      return (
            <Card className={styles.card}>
                  {RegisterData.map((item, idx) => {
                        return (
                              <React.Fragment key={idx}>
                                    <Input
                                          name={item.name}
                                          type={item.type}
                                          control={control}
                                          className={styles[item.className]}
                                          placeholder={item.placeholder}
                                    />
                                    {errors[item.name] && (
                                          <span>
                                                {errors[item.name].message}
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
                              onClick={() => navigate("/")}
                        />
                  </div>
            </Card>
      );
}

export default Register;
