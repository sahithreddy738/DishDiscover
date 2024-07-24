import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("testing header component", () => {
  it("should render header with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton=screen.getByRole("button",{name:"Login"});
    expect(loginButton).toBeInTheDocument();
  });
  it("should render logout button on Click of login button",() =>{
    render(<BrowserRouter><Provider store={appStore}>
           <Header></Header>
        </Provider></BrowserRouter>);
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
  })
  it("should render header with cart items",()=>{
    render(<BrowserRouter><Provider store={appStore}>
        <Header></Header>
     </Provider></BrowserRouter>);
     const cartItem=screen.getByText(/Cart/);
     expect(cartItem).toBeInTheDocument();
  })
});
