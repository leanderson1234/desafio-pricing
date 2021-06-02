import CardTitlestyle from './style';
import PropTypes, { string } from 'prop-types';

const CardTitle = ({ children, flat }) => <CardTitlestyle flat={flat}>{children}</CardTitlestyle>;
CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  flat: string.isRequired,
};

export default CardTitle;
