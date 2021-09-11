import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import MultiplicationGrid from './MultiplicationGrid';
import { BUTTON_STYLES } from './constants';

function getButtons() {
  return Array(144)
    .fill(null)
    .map((_, index) => {
      return screen.getByText(index + 1);
    });
}

describe('MultiplicationGrid', () => {
  it('starts with no highlighted buttons', () => {
    render(<MultiplicationGrid />);
    getButtons().forEach((button) => {
      expect(button).toHaveStyle(BUTTON_STYLES.default);
      expect(button).not.toHaveStyle(BUTTON_STYLES.selected);
      expect(button).not.toHaveStyle(BUTTON_STYLES.highlighted);
    });
  });

  describe('when the user clicks on the 1 button', () => {
    let oneButton;

    beforeEach(() => {
      render(<MultiplicationGrid />);
      oneButton = screen.getByText(1);
      fireEvent.click(oneButton);
    });

    it('shows the 1 button as selected', () => {
      expect(oneButton).toHaveStyle(BUTTON_STYLES.selected);
    });

    it('shows the other buttons as highlighted', () => {
      getButtons().forEach((button) => {
        if (button.textContent === '1') return;
        expect(button).toHaveStyle(BUTTON_STYLES.highlighted);
      });
    });
  });

  describe('when the user clicks on the 12 button', () => {
    let twelveButton;

    beforeEach(() => {
      render(<MultiplicationGrid />);
      twelveButton = screen.getByText(12);
      fireEvent.click(twelveButton);
    });

    it('shows the 12 button as selected', () => {
      expect(twelveButton).toHaveStyle(BUTTON_STYLES.selected);
    });

    it('shows the multiples of 12 as highlighted, and non-multiples of 12 as the default style', () => {
      getButtons().forEach((button) => {
        if (button.textContent !== '12') {
          if (Number.parseInt(button.textContent) % 12 === 0) {
            expect(button).toHaveStyle(BUTTON_STYLES.highlighted);
          } else {
            expect(button).toHaveStyle(BUTTON_STYLES.default);
          }
        }
      });
    });
  });
});
