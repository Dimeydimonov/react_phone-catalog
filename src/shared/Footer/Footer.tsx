import styles from './Footer.module.scss';

export const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a
          className={styles.githubLink}
          href="https://github.com/Dimeydimonov/react_phone-catalog"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" /> GitHub
        </a>
        <button
          type="button"
          className={styles.backToTop}
          onClick={handleBackToTop}
        >
          <i className="fas fa-arrow-up" /> Back to top
        </button>
      </div>
    </footer>
  );
};
