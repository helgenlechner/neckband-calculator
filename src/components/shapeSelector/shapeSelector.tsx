import React, { PureComponent } from 'react';

const styles = require('./shapeSelector.module.scss');

interface Props {
    selectedShape: 'circle' | 'ellipse';
    onShapeChange: (shape: 'circle' | 'ellipse') => void;
}

export class ShapeSelector extends PureComponent<Props> {
    onClick (newShape: 'circle' | 'ellipse') {
        if (newShape === this.props.selectedShape) {
            return;
        }

        this.props.onShapeChange(newShape);
    }

    render () {
        return (
            <div className={styles.container}>
                <label>Shape</label>
                <div className={styles.shapeSelector}>
                    <div
                        className={styles.button}
                        id={styles.circle}
                        data-selected={this.props.selectedShape === 'circle'}
                        onClick={() => this.onClick('circle')}
                    >
                        Circle
                    </div>
                    <div className={styles.separatorWrapper}>
                        <div className={styles.separator} />
                    </div>
                    <div
                        className={styles.button}
                        id={styles.ellipse}
                        data-selected={this.props.selectedShape === 'ellipse'}
                        onClick={() => this.onClick('ellipse')}
                    >
                        Ellipse
                    </div>
                </div>
            </div>
        );
    }
}
