import sum from "../components/sum";

test("Sum of the two numbers is tested here",()=>{
    const result=sum(1,2);
    //Asserstion
    expect(result).toBe(3);
});