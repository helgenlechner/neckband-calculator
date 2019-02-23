import React, { PureComponent } from 'react';
import { Form } from '../form/form';
import { Input } from '../input/input';

interface Props {
  onLengthChange: (length: number | undefined) => void;
  seamAllowance: number | undefined;
  width: number | undefined;
}

interface State {
  diameter: number | undefined;
}

export class CircleForm extends PureComponent<Props, State> {
  constructor (props: Props) {
    super(props);

    this.state = {
      diameter: undefined,
    };
  }

  componentDidUpdate () {
    const { diameter } = this.state;
    const { seamAllowance, width } = this.props;

    if (!diameter|| !width || seamAllowance === undefined) {
      this.props.onLengthChange(undefined);
      return;
    }

    const finishedNeckbandWidth = width / 2 - seamAllowance;
    const innerDiameter = diameter + 2 * seamAllowance - finishedNeckbandWidth * 2;
    const innerCircumference = Math.PI * innerDiameter;
    const bandLength = innerCircumference + 2 * seamAllowance;

    this.props.onLengthChange(bandLength);
  }

  render () {
    return (
      <Form>
        <Input
          label="Diameter"
          onValueChange={diameter => this.setState({ diameter })}
        />
      </Form>
    );
  }
}
