import React from "react";
import Card from "react-bootstrap/Card";
import CardLink from "react-bootstrap/CardLink";
import styles from "./AboutUs.module.css";
import { faUnderline } from "@fortawesome/free-solid-svg-icons";

export default function CustomCard({ name, description, linkedIn, github, image }) {
  return (
    <Card className={styles.customCard}>
      <div className={styles.imageContainer}>
        <Card.Img variant="top" src={image} className={styles.profileImage} />
      </div>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{name}</Card.Title>
        <Card.Text className={styles.cardDescription}>{description}</Card.Text>
      </Card.Body>
      <div className={styles.cardLinks}>
        <CardLink href={linkedIn} target="_blank" className={styles.cardLink}>
          LinkedIn
        </CardLink>
        <span>|</span>
        <CardLink href={github} target="_blank" className={styles.cardLink2}>
          GitHub
        </CardLink>
      </div>
    </Card>
  );
}
