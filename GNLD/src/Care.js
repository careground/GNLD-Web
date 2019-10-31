import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import "./Care.css";

class Care extends Component {

  state = {
    isLoading: true,
    cares: [],

  };

  getCares = async () => {
    const {
      data: {
        data: { cares }
      }
    } = await axios.get(
      "서버 주소"
    );
    this.setState({ cares, isLoading: false });
  };

  componentDidMount() {
    // this.getCares();
  }

    //부모 컴포넌트에게서 받는 정보의 종류가 무엇인지, 있는지 없는지 체크할 수 있음
    //isRequired : 해당 props를 제공하는 것을 필수로 설정 (필수요건)
    static propTypes = {
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      birth: PropTypes.number.isRequired,
      address: PropTypes.string.isRequired,
      phone1: PropTypes.string.isRequired,
      phone2: PropTypes.string.isRequired
    }

    render() {
        console.log(this.props);
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
          <div className="care">
          <img src={this.props.image} alt={this.props.name} title={this.props.name} />
          <div className="care_data">
            <h3 className="care_name">{this.props.name}</h3>
            <div className = "care_button">
              <input type="submit" value="확인"/>
            </div>
            <h5 className="care_brith">{this.props.birth}</h5>
            <h5 className="care_address">{this.props.address}</h5>
            <h5 className="care_phone1">{this.props.phone1}</h5>
            <h5 className="care_phone2">{this.props.phone2}</h5>
          </div>
        </div>
      </section>

          
        )
    }
}

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

export default Care;
