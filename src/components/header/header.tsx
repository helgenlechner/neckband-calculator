import React, { PureComponent } from 'react';
const styles = require('./header.module.scss');

export class Header extends PureComponent<{}> {
    render () {
        return (
            <div className={styles.header}>
                <div className={styles.banner}>
                    <h1>Neck Band Calculator</h1>
                </div>
                <div className={styles.image} />
            </div>
        );
    }
}
