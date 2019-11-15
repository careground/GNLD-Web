import React, { Component } from 'react';
import axios from "axios";
import "./Care.css";
import CareList from "./care_list";

class Care extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get('http://13.125.105.66:3100/api/list').then(res => {
      this.setState({
        data : res.data.data
      });
      console.log(res.data.data)
    });
  }

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
      <div className="cares">
      {this.state.data.map((care, index) => (
              <CareList
                key={index}
                user_id={care.user_id}
                name={care.name}
                birth={care.birth}
                address={care.address}
                phone={care.phone}
                emergency_phone={care.emergency_phone}
              />
            ))}
      </div>
    </section>

    );
  }
}

  export default Care;

