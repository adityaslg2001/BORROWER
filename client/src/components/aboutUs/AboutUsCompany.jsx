import React from 'react'; 
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./AboutUs.module.css";
import { FaGithub } from 'react-icons/fa';

export default function AboutUsCompany() {
  const githubLink = () => {
    window.open("https://github.com/RonitBaranwal/Borrower", "_blank");
  };

  return (
    <Card className={styles.companyCard}>
      <Card.Body>
        <div className={styles.cardHeaderSection}>
          <Card.Title className={styles.companyTitle}>
            Your Marketplace for Buying, Selling, and Renting with Freedom and Trust
          </Card.Title>
        </div>

        <div className={styles.cardBodySection}>
          <Card.Text className={styles.companyDescription}>
            Borrower is a cutting-edge platform designed to seamlessly connect individuals and businesses for buying, selling, and renting items. From household appliances to vehicles, Borrower empowers owners to monetize their possessions while ensuring fair and flexible access for users.
          </Card.Text>
          <Card.Text className={styles.companyDescription}>
            Our mission is to foster community trust, convenience, and accessibility, revolutionizing how resources are shared and utilized in local neighborhoods.
          </Card.Text>
        </div>

        <div className={styles.cardFooterSection}>
          <Button variant="primary" className={styles.githubButton} onClick={githubLink}>
            <FaGithub size={20} style={{ marginRight: "8px" }} /> Explore on GitHub
          </Button>
        </div>
      </Card.Body>
      <Card.Footer className={styles.technologyFooter}>
        <div className={styles.technologyLogos}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" title="Bootstrap" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" title="Express.js" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" title="MySQL" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" className={styles.techIcon} />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" title="Docker" className={styles.techIcon} />
        </div>
      </Card.Footer>
    </Card>
  );
}
