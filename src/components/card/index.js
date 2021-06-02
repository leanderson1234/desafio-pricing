import CardBody from '../cardbody';
import CardHeader from '../cardheader';
import Container from './style';
import CardTitleContainer from '../cardtitlecontainer';
import CardTitle from '../cardtitle';
import HorizontalBar from '../horizontalbar';
import Button from '../button';
import Ballot from '../ballot';
import Info from '../info';
import { object, string } from 'prop-types';

const Card = ({ Price, flat, storage, usersAllowed, send }) => {
  Card.propTypes = {
    Price: object.isRequired,
    flat: string.isRequired,
    storage: string.isRequired,
    usersAllowed: string.isRequired,
    send: string.isRequired,
  };
  return (
    <Container>
      <CardBody flat={flat}>
        <CardHeader flat={flat}>{flat}</CardHeader>
        <CardTitleContainer>
          <Ballot flat={flat}>$</Ballot>
          <CardTitle flat={flat}>{Price[flat]}</CardTitle>
        </CardTitleContainer>
        <HorizontalBar />
        <Info flat={flat}>{storage}</Info>
        <HorizontalBar />
        <Info flat={flat}>{usersAllowed}</Info>
        <HorizontalBar />
        <Info flat={flat}>{send}</Info>
        <HorizontalBar />
        <Button flat={flat}>LEARN MORE</Button>
      </CardBody>
    </Container>
  );
};

export default Card;
