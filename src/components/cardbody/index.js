import CardBodystyle from './style';
import PropTypes, { string } from 'prop-types';

const CardBody = ({ children, flat }) => <CardBodystyle flat={flat}>{children}</CardBodystyle>;
CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  flat: string,
};

CardBody.defaultProps = {
  flat: '',
};
export default CardBody;
