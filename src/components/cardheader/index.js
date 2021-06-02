import CardHeaderstyle from './style';
import PropTypes, { string } from 'prop-types';

const CardHeader = ({ children, flat }) => (
  <CardHeaderstyle flat={flat}>{children}</CardHeaderstyle>
);
CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  flat: string.isRequired,
};

export default CardHeader;
