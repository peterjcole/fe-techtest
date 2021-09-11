import styled from 'styled-components';
import { BUTTON_STYLES, COLOURS } from './constants';
import { useState } from 'react';

function MultiplicationGrid() {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleClick = (event, index) => {
    setSelectedNumber(index + 1);
  };

  const calculateButtonType = (index) => {
    const buttonNumber = index + 1;
    if (buttonNumber === selectedNumber) {
      return 'SELECTED';
    } else if (buttonNumber % selectedNumber === 0) {
      return 'HIGHLIGHTED';
    } else {
      return null;
    }
  };

  const buttons = Array(144)
    .fill(null)
    .map((state, index) => {
      return (
        <NumberButton
          buttonType={calculateButtonType(index)}
          key={index}
          onClick={(e) => handleClick(e, index)}
        >
          {index + 1}
        </NumberButton>
      );
    });

  return <GridContainer>{buttons}</GridContainer>;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem 1rem;
`;

const NumberButton = styled.button`
  height: 150px;
  width: 100%;
  text-align: center;
  border: 5px solid;
  border-radius: 2px;
  margin: 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  font-family: 'Bebas Neue', sans-serif;
  font-size: 64px;

  ${({ buttonType }) => getButtonTypeColours(buttonType)}
}

&:hover,
&:focus {
  background: ${COLOURS.darkPurple};
}

&:active {
  transform: scale(0.98);
  color: ${COLOURS.white};
}
`;

const getButtonTypeColours = (buttonType) => {
  switch (buttonType) {
    case 'SELECTED':
      return BUTTON_STYLES.selected;
    case 'HIGHLIGHTED':
      return BUTTON_STYLES.highlighted;
    default:
      return BUTTON_STYLES.default;
  }
};

export default MultiplicationGrid;
