import { connect } from 'react-redux';
import { showModalAction } from 'reducers/modal';
import { compose } from 'redux';
import { ProductPure } from './';

const enhance = compose(
  connect(
    null,
    {
      showModal: showModalAction,
    },
  ),
);
export const ProductEnhanced = enhance(ProductPure);
