import React, { PureComponent } from 'react';
const styles = require('./header.module.scss');

export class Header extends PureComponent<{}> {
    render () {
        return (
            <div className={styles.header}>
                <div className={styles.banner}>
                    <h1>Neck Band Calculator</h1>
                </div>
                <div className={styles.image}>
                    <img
                        sizes="(max-width: 4000px) 100vw, 4000px"
                        srcSet={`
                            ${require('../../assets/fabric_w_430.jpg')} 430w,
                            ${require('../../assets/fabric_w_1302.jpg')} 1302w,
                            ${require('../../assets/fabric_w_1864.jpg')} 1864w,
                            ${require('../../assets/fabric_w_2353.jpg')} 2353w,
                            ${require('../../assets/fabric_w_2743.jpg')} 2743w,
                            ${require('../../assets/fabric_w_3094.jpg')} 3094w,
                            ${require('../../assets/fabric_w_3414.jpg')} 3414w,
                            ${require('../../assets/fabric_w_3709.jpg')} 3709w,
                            ${require('../../assets/fabric_w_3990.jpg')} 3990w,
                            ${require('../../assets/fabric_w_4000.jpg')} 4000w,
                        `}
                        src={require('../../assets/fabric_w_4000.jpg')}
                    />
                </div>
            </div>
        );
    }
}
