import { Link } from "react-router-dom";

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    top: 0
  },
};

const Home = () => {
    return (
        <div style={styles.container}>
      <h1 style={styles.title}>
        Phone book welcome page{' '}
        <p> <span role="img" aria-label="Greeting icon" style={{ textDecoration: "none" }}>
          <Link to="/register" style={{textDecoration:"none"}}>🤳</Link>
        </span></p>
           
      </h1>
    </div>
    )
}

export default Home