import Infostyle from './style';
import PropTypes, { string } from 'prop-types';

const Info = ({ children, flat }) => <Infostyle flat={flat}>{children}</Infostyle>;
Info.propTypes = {
  children: PropTypes.node.isRequired,
  flat: string.isRequired,
};

export default Info;
