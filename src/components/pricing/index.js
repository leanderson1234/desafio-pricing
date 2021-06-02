import Container, {
  // ImageBack,
  Prices,
  Switch,
  Slider,
  Checkbox,
  ContainerSwitch,
  SwitchInfoRigth,
  SwitchInfoLeft,
} from './style';
import { func } from 'prop-types';
import './styles.css';
import { useState } from 'react';

const Pricing = ({ togglePrice }) => {
  Pricing.propTypes = {
    togglePrice: func.isRequired,
  };

  const [isToggleOn, setIsToggleOn] = useState(true);
  const handleChange = () => {
    setIsToggleOn(!isToggleOn);

    if (isToggleOn) {
      return togglePrice({ Basic: 19.99, Professional: 24.99, Master: 39.99 });
    } else {
      return togglePrice({ Basic: 199.99, Professional: 249.99, Master: 399.99 });
    }
  };

  return (
    <Container>
      <Prices>
        <h1>Our Pricing</h1>
        <ContainerSwitch>
          <SwitchInfoRigth>Annually</SwitchInfoRigth>
          <Switch>
            <Checkbox type="checkbox" onClick={handleChange} />
            <Slider className="slider "></Slider>
          </Switch>
          <SwitchInfoLeft>Monthly</SwitchInfoLeft>
        </ContainerSwitch>
      </Prices>
      {/* <ImageBack /> */}
    </Container>
  );
};

export default Pricing;
