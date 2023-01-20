import styled from 'styled-components';
import { COLOURS } from './constants';
import { useState } from 'react';

function MultiplicationGrid() {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [log, setLog] = useState('');

  const numbers = Array.from({ length: 144 }, (_, i) => i + 1);

  const handleClick = (number) => {
    setSelectedNumber(number);
    const multiples = numbers
      .filter((multiple) => getIsMultiple(multiple, number))
      .slice(0, 3)
      .join(', ');

    setLog(
      `The multiples of ${number} include ${multiples}. Navigate through the list of numbers to see all multiples.`
    );
  };

  return (
    <section>
      <Fieldset role="radiogroup">
        <Legend>Select a number to get its multiples:</Legend>
        {numbers.map((number) => {
          const id = `radio-${number}`;
          const isMultiple = getIsMultiple(number, selectedNumber);
          return (
            <Label htmlFor={id} key={number} isMultiple={isMultiple}>
              <Number>{number}</Number>
              <MultipleText isMultiple={isMultiple}>
                is a multiple of {selectedNumber}
              </MultipleText>
              <Input
                type="radio"
                id={id}
                name="number"
                value={number}
                checked={selectedNumber === number}
                onChange={(_) => handleClick(number)}
              />
            </Label>
          );
        })}
      </Fieldset>
      <VisuallyHiddenParagraph role="log">{log}</VisuallyHiddenParagraph>
    </section>
  );
}

const getIsMultiple = (number1, number2) =>
  number1 !== number2 && number1 % number2 === 0;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem 1rem;
  border: none;
  padding: 0;
  margin: 0;
`;

const Legend = styled.legend`
  margin-bottom: 16px;
`;

const Label = styled.label`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 2px;
  box-sizing: border-box;
  margin: 0;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  ${({ isMultiple }) =>
    isMultiple &&
    `
    border: 2px solid black;
  `}
`;

const Number = styled.span`
  font-size: 48px;
`;

const MultipleText = styled.span`
  visibility: hidden;
  ${({ isMultiple }) =>
    isMultiple &&
    `
    visibility: revert
  `}
`;

const Input = styled.input`
  width: 25px;
  height: 25px;
  accent-color: ${COLOURS.darkPurple};
`;

const VisuallyHiddenParagraph = styled.p`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default MultiplicationGrid;
