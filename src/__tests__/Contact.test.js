import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom";

describe("Testing Contact Component",()=>{
    it("should render contact component and have text Submit",()=>{
        render(<Contact />);
    //querying
        const element=screen.getByText("Submit");
        //assertion
        expect(element).toBeInTheDocument();
    
    })
    
    it("should render contact component and have heading",()=>{
        render(<Contact />);
    //querying
        const heading=screen.getByRole("heading");
        //assertion
        expect(heading).toBeInTheDocument();
    
    })
    it("should render contact component and have heading",()=>{
        render(<Contact />);
    //querying
        const input=screen.queryAllByRole("textbox");
        //assertion
        expect(input.length).toBe(2);
    
    })
}) 