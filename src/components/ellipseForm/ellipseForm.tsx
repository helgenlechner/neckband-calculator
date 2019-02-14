import React, { PureComponent } from 'react';
import { Form } from '../form/form';
import { Input } from '../input/input';
import { calculateLength } from './calculateLength';

interface Props {
  onLengthChange: (length: number | undefined) => void;
  seamAllowance: number | undefined;
  width: number | undefined;
}

interface State {
  diameterOne: number | undefined;
  diameterTwo: number | undefined;
}

export class EllipseForm extends PureComponent<Props, State> {
  constructor (props: Props) {
    super(props);

    this.state = {
      diameterOne: undefined,
      diameterTwo: undefined,
    };
  }

  componentDidUpdate () {
    const { diameterOne, diameterTwo } = this.state;
    const { seamAllowance, width } = this.props;

    if (!diameterOne || !diameterTwo || !width || !seamAllowance) {
      this.props.onLengthChange(undefined);
      return;
    }

    this.props.onLengthChange(calculateLength(diameterOne, diameterTwo, width, seamAllowance));
  }

  render () {
    return (
      <Form>
        <Input
          label="Diameter 1"
          onValueChange={diameterOne => this.setState({ diameterOne })}
        />
        <Input
          label="Diameter 2"
          onValueChange={diameterTwo => this.setState({ diameterTwo })}
        />
      </Form>
    );
  }
}
