import React, { Component } from 'react';
import { Calculator } from '../calculator/calculator';
import { Header } from '../header/header';
const styles = require('./app.module.scss');

export class App extends Component {
  render () {
    return (
      <div className={styles.app}>
        <Header />
        <Calculator />
      </div>
    );
  }
}
