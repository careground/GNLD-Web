import React, { Component } from 'react';
import axios from "axios";
import "./Care.css";
import CareList from "./care_list";

class Care extends Component {

  constructor(props) {
    super(props);

    // Quiz 자체에 state를 할당하고, items에 기본값을 줍니다.
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

//     render() {
//         console.log(this.props);
//         const { data } = this.state;

//           return (

//             <section className="container">
//             <div className="sideBar">
//             <ul className="menu_sub">
//               <h3 className="menu_title"> <a href="/home"> 그느르다 </a></h3> 
//                 <h4><a href="/user">로그인</a></h4>
//                 <h4><a href="/care">돌봄 대상 리스트</a></h4>
//                 <h4><a href="/danger">위험 대상 리스트</a></h4>
//             </ul>
//             </div>
//             <div className="care">
//             <img src={this.props.image} alt={this.props.name} title={this.props.name} />
//             <div className="care_data">
//               <h3 className="care_name">{this.props.name}</h3>
//               <div className = "care_button">
//                 <input type="submit" value="확인"/>
//               </div>
//               <h5 className="care_brith">{this.prop.birth}</h5>
//               <h5 className="care_address">{this.prop.address}</h5>
//               <h5 className="care_phone1">{this.prop.phone}</h5>
//               <h5 className="care_phone2">{this.prop.emergency_phone}</h5>
//             </div>
//           </div>
//         </section>
//             // ))}
//           )
          
//         // })

//     }
// }


  export default Care;


    // //부모 컴포넌트에게서 받는 정보의 종류가 무엇인지, 있는지 없는지 체크할 수 있음
    // //isRequired : 해당 props를 제공하는 것을 필수로 설정 (필수요건)
    // static propTypes = {
    //   name: PropTypes.string,
    //   birth: PropTypes.string,
    //   address: PropTypes.string,
    //   phone: PropTypes.string,
    //   emergency_phone: PropTypes.string
    // }

//     render() {
//         console.log(this.props);
//         const { data } = this.state;

//         // return data.map(data => {
//           return (
//             // {this.state.data.map(data => (
//             <section className="container">
//             <div className="sideBar">
//             <ul className="menu_sub">
//               <h3 className="menu_title"> <a href="/home"> 그느르다 </a></h3> 
//                 <h4><a href="/user">로그인</a></h4>
//                 <h4><a href="/care">돌봄 대상 리스트</a></h4>
//                 <h4><a href="/danger">위험 대상 리스트</a></h4>
//             </ul>
//             </div>
//             <div className="care">
//             {/* <img src={this.props.image} alt={this.props.name} title={this.props.name} /> */}
//             <div className="care_data">
//               <h3 className="care_name">{this.props.name}</h3>
//               <div className = "care_button">
//                 <input type="submit" value="확인"/>
//               </div>
//               <h5 className="care_brith">{this.prop.birth}</h5>
//               <h5 className="care_address">{this.prop.address}</h5>
//               <h5 className="care_phone1">{this.prop.phone}</h5>
//               <h5 className="care_phone2">{this.prop.emergency_phone}</h5>
//             </div>
//           </div>
//         </section>
//             // ))}
//           )
          
//         // })

//     }
// }

//   render() {
//     console.log(this.props);
//     // const { data } = this.state;


//       return (
//         <section className="container">
//         <div className="sideBar">
//         <ul className="menu_sub">
//           <h3 className="menu_title"> <a href="/home"> 그느르다 </a></h3> 
//             <h4><a href="/user">로그인</a></h4>
//             <h4><a href="/care">돌봄 대상 리스트</a></h4>
//             <h4><a href="/danger">위험 대상 리스트</a></h4>
//         </ul>
//         </div>
//         <div className="care">
//         {/* <img src={} alt={this.props.name} title={this.props.name} /> */}
//         <div className="care_data">

//           {this.state.data.map(item => {  

            
//          return <div className="care_data">
//           <h3 className="care_name">{item.name}</h3>
//           <div className = "care_button">
//               <input type="submit" value="확인"/>
//           </div>
//           <h5 className="care_brith">{item.birth}</h5>
//             <h5 className="care_address">{item.address}</h5>
//           <h5 className="care_phone1">{item.phone}</h5>
//             <h5 className="care_phone2">{item.emergency_phone}</h5>
//           </div>
//           })}

//         </div>
//       </div>
//     </section>

//       )
//    }

// }

// function Movie({ year, title, summary, poster, genres, pp }) {
//   return (
//     <div className="movie">
//       <img src={poster} alt={title} title={title} />
//       <div className="movie__data">
//         <h3 className="movie__title">{title}</h3>
//         <div className = "movie__button">
//           <input type="submit" value="확인"/>
//         </div>
//         <h5 className="movie__year">{year}</h5>
//         <h5 className="movie__genres">{genres}</h5>
//         <h5 className="movie__summary">{summary}</h5>
//         <h5 className="movie__summary">{pp}</h5>
//       </div>
//     </div>
//   );
// }

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   year: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
//   pp: PropTypes.string.isRequired
// };