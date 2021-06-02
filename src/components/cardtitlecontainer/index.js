import CardTitleContainerstyle from './style';
import PropTypes from 'prop-types';

const CardTitleContainer = ({ children }) => (
  <CardTitleContainerstyle>{children}</CardTitleContainerstyle>
);
CardTitleContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardTitleContainer;
