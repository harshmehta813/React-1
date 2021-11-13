import logo from './Images/logo.png';
import './App.css';
import Button from './Component/Button'
import styles from './Images/masailogo.module.css';

function App() {
  return (
    <div className="App App-header">
      <Button type="success" title="A"/>
      <Button type="warning" title="B"/>
      <Button type="error" title="C"/>
      <Button type="error" disabled={true} title="D"/>
      <img className={styles.masaiLogo} src={logo} alt="logo"/>
    </div>
  );
  }

export default App;
