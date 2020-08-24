import React, {Component} from "react"
class BadgeForm extends Component {
    constructor() {
        super()
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            placeOfBirth:"",
            phoneNumber:"",
            favoriteFood:"",
            textarea:"",
            nameBadges:[],
        }
    }
    handleChange=(e) => {
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    handleSubmit=(e) => {
        e.preventDefault()
        let newUserData={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            placeOfBirth:this.state.placeOfBirth,
            phoneNumber:this.state.phoneNumber,
            favoriteFood:this.state.favoriteFood,
            textarea:this.state.textarea,
        }
        this.setState({
            nameBadges:[newUserData,...this.state.nameBadges],
            firstName:"",
            lastName:"",
            email:"",
            placeOfBirth:"",
            phoneNumber:0,
            favoriteFood:"",
            textarea:"",

        })
    }
render() {


return (
    <div>
      <form>
          <h1>Badge Card Template</h1>
        <input 
          placeholder="First Name"
          type="text" 
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          required={true}/>
           <input 
          placeholder="Last Name"
          type="text" 
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          required={true}/>
          <h1>Badge Card Template</h1>
        <input 
          placeholder="email"
          type="text" 
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          required={true}/>
           <input 
          placeholder="Place Of Birth"
          type="text" 
          name="Place Of Birth"
          value={this.state.placeOfBirth}
          onChange={this.handleChange}
          required={true}/>
           <input 
          placeholder="Phone Number"
          type="text" 
          name="Phone Number"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
          required={true}/>
           <input 
          placeholder="Favorite Food"
          type="text" 
          name="Favorite Food"
          value={this.state.favoriteFood}
          onChange={this.handleChange}
          required={true}/>
           <textarea 
          placeholder="Text Area"
          type="text" 
          name="Text Area"
          value={this.state.textArea}
          onChange={this.handleChange}
          required={true}/>
          <button onClick={this.handleSubmit}>Click Me</button>
        </form>
         <h1>{this.state.firstName}</h1>
    </div>
  )}}

  export default BadgeForm
