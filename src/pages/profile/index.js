import { ReactComponent as Logo } from "assets/svg/logout.svg";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./profile.module.scss";
import React, { useContext } from "react";
import { Card } from "components/common";
import { Context } from "store";

function Profile() {
      const userData = JSON.parse(localStorage.getItem("userData"));

      const isLogin = JSON.parse(localStorage.getItem("isLogin"));
      const { userContext } = useContext(Context);
      const navigate = useNavigate();

      function logout() {
            localStorage.removeItem("userData");
            localStorage.setItem("isLogin", false);
            navigate("/");
      }

      if (!isLogin) {
            return (
                  <div className={styles.container}>
                        pages not found please login or register
                  </div>
            );
      }

      return (
            <div>
                  <div className={styles.header}>
                        <h1>
                              {userData?.name} {userData?.familyName}
                        </h1>
                        <Logo
                              className={styles.logo}
                              onClick={() => logout()}
                        />
                  </div>
                  <Card className={styles.card}>
                        <h2>welcome to your profile</h2>
                        <h3>{userContext?.email}</h3>
                  </Card>
                  <Outlet />
            </div>
      );
}
export default Profile;
