/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

//import logo from './logo.svg';
import './App.css';
import './style.css';
class App extends React.Component{
  constructor(props) {
    super(props)
    this.state={username:null,
      password:null
    }
    this.changeuser=this.changeuser.bind(this);
  }
  changeuser(event){
    if(event.target.value !==""){
      this.setState(
        {
          username:event.target.value}
        );
    }
    else{
      this.setState({
        username:null
      }
      )
    }
  }
changepass =(event) =>{
  if(event.target.value !=="")
  {
    this.setState({password:event.target.value
    }
    );
  }
  else{
    this.setState(
      {
        username:null
      }
      )
  }
}
showuserpass=()=>{ 
  var h ="The Username is :" + this.state.username ;
  var x = " And passward is :"+this.state.password ;
  var show =h.concat(x);
  return alert(show);

}
  render(){
  return (
    <div className="App">
        <br></br>
      <br>
      </br>
      <br></br>
      <div class="container">
    <div id="content">
        <form>
            <h1>Login</h1>
            <div>
                <input type="text" onChange={this.changeuser} placeholder="Username" required="" id="username" />
            </div>
            <div>
                <input type="password" placeholder="Password" required="" id="password" onChange={this.changepass} />
            </div>
         
            <div>
                <input type="submit" value="Log in"  onClick={this.showuserpass} />
           
                </div>
             
        </form>

    </div>
</div>
  
</div>
    
  );
      }

      }
export default App;
