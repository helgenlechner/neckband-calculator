import React, { PureComponent } from 'react';
const styles = require('./form.module.scss');

export class Form extends PureComponent<{}> {
  render () {
    return (
      <div className={styles.form}>
        {this.props.children}
      </div>
    );
  }
}
