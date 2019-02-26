import React, { ChangeEvent, PureComponent } from 'react';
const styles = require('./input.module.scss');

interface Props {
  label: string;
  onValueChange: (value: number) => void;
  testId: string;
}

interface State {
  value: string;
}

export class Input extends PureComponent<Props, State> {
  constructor (props: Props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange (event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    this.setState({ value });

    if (value === '' || Number.isNaN(Number(value))) {
      return;
    }

    const numericValue = Number(value);

    if (numericValue >= 0) {
      this.props.onValueChange(numericValue);
    }
  }

  render () {
    return (
      <p className={styles.container}>
        <label>
          {this.props.label}
        </label>
        <span className={styles.unit}>
            <input
              type="number"
              value={this.state.value}
              onChange={this.onValueChange}
              data-test-id={this.props.testId}
            />
            cm
        </span>
      </p>
    );
  }
}
