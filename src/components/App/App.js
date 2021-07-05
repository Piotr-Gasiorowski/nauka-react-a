import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello World!</h2>
          <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"
            alt="image"
          />
          <List title />
          <List image />
        
        </main>  
      </div>
    )
  }
}

export default App;