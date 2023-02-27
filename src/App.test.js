import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders page elements', () => {
  render(<App />);
  expect(screen.getByRole("banner")).not.toBe(null);
  expect(screen.getByRole("article")).not.toBe(null);
  expect(screen.getByRole("contentinfo")).not.toBe(null);
});
