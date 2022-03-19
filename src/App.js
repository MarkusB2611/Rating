import styles from './App.module.sass'
import Rating from "./components/Rating/Rating";


function App() {
  return (
      <div className={styles.App}>
        <Rating />
      </div>
  );
}

export default App;
