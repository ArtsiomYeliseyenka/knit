import { withModal } from 'components/modal/modalContainer';
import { compose } from 'redux';
import { PRODUCT_MODAL, ProductModalPure } from './';

const enhance = compose(withModal(PRODUCT_MODAL));
export const ProductModalEnhanced = enhance(ProductModalPure);
