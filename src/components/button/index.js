import Buttonstyle from './style';
import PropTypes, { string } from 'prop-types';

const Button = ({ children, flat }) => <Buttonstyle flat={flat}>{children}</Buttonstyle>;
Button.propTypes = {
  children: PropTypes.node.isRequired,
  flat: string.isRequired,
};

export default Button;
