import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
      
    console.log("Child constructor")
    // to render the json data we need to create state variable 
    this.state = {
        // userInfo is a state variable
        userInfo : {
            name: "Dummy",
            location: "Default",
            avatar_url:"http//dummy_photos"
        }  
    }
}

    async componentDidMount() {
        console.log("Child Component Did Mount")
        // api call
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json()
        //once we get the json data than we update the state variable(userInfo) with the json data
        this.setState(
            {
                userInfo: json,
            }
        );
        console.log(json)
    }
    componentDidUpdate(){
        console.log("component did update is called...")

    }
    componentWillUnmount(){
        console.log("component will unmount is called...")
    }
    render() {

        console.log("Child Render")

        //destucture
        const { name,location,avatar_url} = this.state.userInfo;
        return (
        <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: Amit@gmail.com</h4>
        </div> 
        );   
    }
}
export default UserClass;

/*


------------MOUNTING------------

Constructor(dummy)
Render(dummy)
     <HTML Dummy>


Component did Mount
     <API Call>
     <this.setState -> State variable is updated


------------UPDATE--------
            render(API data)
            <HTML new API data>
            ComponentDid Update


*/