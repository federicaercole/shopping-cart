import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ProductDetails from '../components/productDetails';
import { Router } from "react-router-dom";
import App from '../App';
import Header from "../components/Header"
import Page from "../components/Page"
import { products } from '../components/products/products';

test('Renders page elements', () => {
  render(<App />);
  expect(screen.getByRole("banner")).not.toBe(null);
  expect(screen.getByRole("article")).not.toBe(null);
  expect(screen.getByRole("contentinfo")).not.toBe(null);
});

describe("Add to cart", () => {

  test("Click add to cart button should print number of object", async () => {
    const user = userEvent.setup();
    render(<Router><Page /></Router>);
    const button = screen.getByRole("button", { name: "Add to Cart" });
    await user.click(button);
    render(<Header />);
    expect(screen.getByText("Cart").textContent).toMatch(/1/i);
  })

})
