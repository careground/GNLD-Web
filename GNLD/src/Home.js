import React, { Component } from 'react';
import "./Home.css";

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

        </section>
        
      )
    }
}

export default User;
