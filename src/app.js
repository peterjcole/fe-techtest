import styled from 'styled-components';

import MultiplicationGrid from './MultiplicationGrid';

function App() {
  return (
    <Wrapper>
      <header>
        <h1>Multipli-what?</h1>
      </header>
      <p>Choose a number below to see its multiples!</p>
      <MultiplicationGrid />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 820px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 100px;
  margin: 0 auto;
`;

export default App;
