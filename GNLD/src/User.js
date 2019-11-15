import React, { Component } from 'react';
import "./User.css";
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

class User extends Component{
  render() {
      return (
        <section className="container">
          <div className="sideBar">
          <ul className="menu_sub">
            <h3 className="menu_title"> <a href="/home"> 그느르다 </a></h3> 
              <h4><a href="/user">로그인</a></h4>
              <h4><a href="/care">돌봄 대상 리스트</a></h4>
              <h4><a href="/danger">위험 대상 리스트</a></h4>
          </ul>
          </div>
        <div className="login">
          <form className="form-signin">
            <h2 className="form-signin-heading">Please Login</h2>
            <label for="inputEmail" className="sr-only1">Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control1" placeholder="Email address" required autofocus /><br/><br/>

            <label for="inputPassword" className="sr-only2">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control2" placeholder="Password" required /><br/><br/>

            <Link to = '/care'>
              <button className="btn" onClick={() => 
                alert("그느르다에 오신 것을 환영합니다.")
                } type="button">Login</button> <br/>
            </Link>

          </form>
          <div>
            {/* <Link to="/">{'Signin'}</Link> */}
          </div>
        </div>
        </section>
        
      )
    }
}

export default User;
