import React, { PureComponent } from 'react';
import { CircleForm } from '../circleForm/circleForm';
import { EllipseForm } from '../ellipseForm/ellipseForm';
import { Form } from '../form/form';
import { Input } from '../input/input';
import { Result } from '../result/result';
import { ShapeSelector } from '../shapeSelector/shapeSelector';
const styles = require('./calculator.module.scss');

interface State {
  length: number | undefined;
  width: number | undefined;
  seamAllowance: number | undefined;
  shape: 'circle' | 'ellipse';
}

export class Calculator extends PureComponent<{}, State> {
  constructor (props: {}) {
    super(props);

    this.state = {
      length: undefined,
      seamAllowance: undefined,
      shape: 'circle',
      width: undefined,
    };

    this.onLengthChange = this.onLengthChange.bind(this);
  }

  onLengthChange (length: number | undefined) {
    this.setState({ length });
  }

  get circleForm () {
    if (this.state.shape !== 'circle') {
      return null;
    }

    return (
      <CircleForm
        onLengthChange={this.onLengthChange}
        seamAllowance={this.state.seamAllowance}
        width={this.state.width}
      />
    );
  }

  get ellipseForm () {
    if (this.state.shape !== 'ellipse') {
      return null;
    }

    return (
      <EllipseForm
        onLengthChange={this.onLengthChange}
        seamAllowance={this.state.seamAllowance}
        width={this.state.width}
      />
    );
  }

  render () {
    return (
      <div className={styles.calculator}>
        <ShapeSelector
          selectedShape={this.state.shape}
          onShapeChange={shape => this.setState({ shape })}
        />
        <Form>
          <Input
            label="Neck Band Width"
            onValueChange={width => this.setState({ width })}
          />
          <Input
            label="Seam Allowance"
            onValueChange={seamAllowance => this.setState({ seamAllowance })}
          />
        </Form>
        {this.circleForm}
        {this.ellipseForm}
        <Result
          length={this.state.length}
        />
      </div>
    );
  }
}
