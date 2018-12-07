import { connect } from 'react-redux';
import { hideModalAction } from 'reducers/modal';
import { compose } from 'redux';
import { ModalLayoutPure } from './';

const enhance = compose(
  connect(
    null,
    {
      hideModal: hideModalAction,
    },
  ),
);
export const ModalLayoutEnhanced = enhance(ModalLayoutPure);
