import { act } from "react";
import Body from "../components/Body";
import jsonData from "../mocks/mockResList.json";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: jest.fn(() => Promise.resolve(jsonData)),
  })
);

it("should load shimmer on page", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const shimmer = screen.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(7);
});
it("should load restaurant data with act method", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const resList = screen.getByTestId("res-list");
  expect(resList.children.length).toBe(8);
});
it("should load restaurant data with waitFor", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  await waitFor(() =>
    expect(screen.getByTestId("res-list")).toBeInTheDocument()
  );
  const resList = screen.getByTestId("res-list");
  expect(resList.children.length).toBe(8);
});
it("should search restaurant on click search button", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  await waitFor(() =>
    expect(screen.getByTestId("res-list")).toBeInTheDocument()
  );
  const searchButton=screen.getByTestId("search-btn");
  const inputBox=screen.getByPlaceholderText("Search Restaurants");
  fireEvent.change(inputBox,{target:{value:"chinese"}});
  fireEvent.click(searchButton);
  expect(screen.getByTestId('res-list').children.length).toBe(1);

});
it("should get top rated restaurants on clicking top rated button", async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
    await waitFor(() =>
      expect(screen.getByTestId("res-list")).toBeInTheDocument()
    );
    const searchButton=screen.getByTestId("rating-btn");
    fireEvent.click(searchButton);
    expect(screen.getByTestId('res-list').children.length).toBe(7);
  
  });
