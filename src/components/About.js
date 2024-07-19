import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
    constructor(props) {
        super(props);
        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent Component did mount");
    }
    render() {
        console.log("Parent render");
        return (
            <div>
                <h1 className="mx-4 font-bold text-lg">About us page</h1>
                <UserClass/>
            </div>
        )
    }
}


export default About;