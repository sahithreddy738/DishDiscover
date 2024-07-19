import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user:{}
    };
    console.log(" child constructor");
  }
   async componentDidMount(){
    // this.timer=setInterval(()=>{console.log("interval")},1000);
    console.log("child Component did mount");
    const data=await fetch("https://api.github.com/users/sahithreddy738");
    const json=await data.json();
    this.setState({
     user:json
    })
    console.log("child component did mount after fetch");
}

componentDidUpdate() {
  console.log("child component did update");
}

  render() {
    const { name, location,twitter_username } = this.state.user;
    const { count } = this.state;
    console.log("child render");
    return (
      <div className="flex flex-col space-y-2 mx-4 p-6 shadow-lg rounded-lg">
        <h2>Count={count}</h2>
         <button className="bg-black text-white w-32 py-2 px-2" onClick={()=>{
            this.setState({
                count:this.state.count+1
            });
         }}>Count Increase</button>
        <h2 className="font-bold">{name}</h2>
        <h3>{location}</h3>
        <h3>{twitter_username}</h3>
      </div>
    );
  }
}

export default UserClass;
