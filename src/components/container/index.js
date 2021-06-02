import Containerstyle from './style';
import PropTypes from 'prop-types';

const Container = ({ children }) => <Containerstyle>{children}</Containerstyle>;
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
