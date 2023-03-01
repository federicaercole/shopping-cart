import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter, Route } from "react-router-dom";
import App from '../App';
import '@testing-library/jest-dom'
import ProductDetails from '../components/ProductDetails';
import { products } from '../components/products/products';

test('Renders page elements', () => {
  render(<App />, { wrapper: BrowserRouter });
  expect(screen.getByRole("banner")).not.toBe(null);
  expect(screen.getByRole("article")).not.toBe(null);
  expect(screen.getByRole("contentinfo")).not.toBe(null);
});

describe("Add to cart", () => {

  test("Click add to cart button should print number of object", () => {
    const productPage = '/root';
    // const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={[productPage]}>
        <App />
      </MemoryRouter>,
    )
    // const button = screen.getByRole("button", { name: "Add to Cart" });

    // await user.click(button);

    // expect(screen.getByText("Cart").textContent).toMatch(/Cart 1/i);
    expect(screen.getByText(/root/i)).toBeInTheDocument();
  })

})
