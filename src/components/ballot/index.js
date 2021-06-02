import Ballotstyle from './style';
import PropTypes, { string } from 'prop-types';

const Ballot = ({ children, flat }) => <Ballotstyle flat={flat}>{children}</Ballotstyle>;
Ballot.propTypes = {
  children: PropTypes.node.isRequired,
  flat: string.isRequired,
};

export default Ballot;
