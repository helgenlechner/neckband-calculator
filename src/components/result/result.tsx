import React, { PureComponent } from 'react';

interface Props {
  length: number | undefined;
}

export class Result extends PureComponent<Props> {
  render () {
    const { length } = this.props;

    if (length === undefined) {
      return null;
    }

    return (
      <p>The neck band needs to be {length.toFixed(1)}cm long, including seam allowances.</p>
    );
  }
}
