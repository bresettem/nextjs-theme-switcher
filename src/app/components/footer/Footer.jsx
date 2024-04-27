import { Container } from "react-bootstrap";
import styles from "@/app/components/footer/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`footer text-center ${styles.footer}`}>
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} Create Next App All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
