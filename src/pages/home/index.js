import { Button, Card } from "components/common";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import React from "react";

export default function Home() {
      const navigate = useNavigate();

      const CardData = [
            {
                  title: "sign up",
                  btype: "primary",
                  url: "/register",
                  className: "button",
            },
            {
                  title: "sign in",
                  btype: "secondary",
                  url: "/login",
                  className: "button",
            },
      ];

      return (
            <Card className={styles.card}>
                  {CardData.map((item, idx) => {
                        return (
                              <React.Fragment key={idx}>
                                    <Button
                                          btype={item.btype}
                                          title={item.title}
                                          className={styles[item.className]}
                                          onClick={() => navigate(item.url)}
                                    />
                              </React.Fragment>
                        );
                  })}
            </Card>
      );
}
