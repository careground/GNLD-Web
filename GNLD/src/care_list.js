import React from "react";
import PropTypes from "prop-types";
import "./care_list.css";

function CareList({ name, birth, address, phone, emergency_phone }) {
  return (
            <div className="care">
            <img src={"https://icon-library.net/images/default-user-icon/default-user-icon-5.jpg"} alt={name} title={name} />
            <div className="care_data">
              <h3 className="care_name">{name}</h3>
              <h5 className="care_brith">{birth}</h5>
              <h5 className="care_address">{address}</h5>
              <h5 className="care_phone1">본인 연락처: {phone}</h5>
              <h5 className="care_phone2">비상 연락처: {emergency_phone}</h5>
              
            </div>
          </div>
  );
}

CareList.propTypes = {
  user_id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  emergency_phone: PropTypes.string.isRequired

};

export default CareList;
