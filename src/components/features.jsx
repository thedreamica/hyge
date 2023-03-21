import React from "react";
import styled from 'styled-components';

const LocalContainer = styled.div`
  padding: 5% 0;
`

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <LocalContainer className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Services</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </LocalContainer>
    </div>
  );
};
