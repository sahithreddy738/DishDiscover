import RestaurantMenu from "../components/RestaurantMenu";
import jsonData from "../mocks/mockResMenu.json";
import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(jsonData);
    },
  });
});

it("should render with restaurant menu", async () => {
  await act(async () => {
    render(<RestaurantMenu />);
  });
  expect(screen.getAllByTestId("accrodion")[0]).toBeInTheDocument();
});

it("should render food items on clicking accrodian", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    );
  });
  const accordian = screen.getByText("Noodles Non Veg - Half-(6)");
  fireEvent.click(accordian);
  expect(screen.getAllByTestId("food-item").length).toBe(6);
});

it("should add item to cart on clicking add button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });
  expect(screen.getByText("Cart-0")).toBeInTheDocument();
  const accordian = screen.getByText("Noodles Non Veg - Half-(6)");
  fireEvent.click(accordian);
  const addButtons = screen.getAllByTestId("add-food-btn");
  fireEvent.click(addButtons[0]);
  expect(screen.getByText("Cart-1")).toBeInTheDocument();
  const clearCart=screen.getByRole("button",{name:"Clear Cart"});
  fireEvent.click(clearCart);
  expect(screen.getByText("Cart-0")).toBeInTheDocument();
});

it("should render cart item in cart page on clicking add button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });
    const accordian = screen.getByText("Noodles Non Veg - Half-(6)");
    fireEvent.click(accordian);
    expect(screen.getAllByTestId("food-item").length).toBe(6);
    const addButtons = screen.getAllByTestId("add-food-btn");
    fireEvent.click(addButtons[0]);
    expect(screen.getAllByTestId("food-item").length).toBe(7);
    const clearCart=screen.getByRole("button",{name:"Clear Cart"});
    fireEvent.click(clearCart);
    expect(screen.getByText("Cart-0")).toBeInTheDocument();
  });

it("should remove cart item on clicking remove button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      );
    });
    const accordian = screen.getByText("Noodles Non Veg - Half-(6)");
    fireEvent.click(accordian);
    const addButtons = screen.getAllByTestId("add-food-btn");
    fireEvent.click(addButtons[0]);
    expect(screen.getAllByTestId("food-item").length).toBe(7);
    const removebutton=screen.getAllByTestId("remove-food-btn");
    fireEvent.click(removebutton[0]);
    expect(screen.getAllByTestId("food-item").length).toBe(6);
  });