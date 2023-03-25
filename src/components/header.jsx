import React from "react";
import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const LocalContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(0, 0, 0, 0.73)),
    url(${({ bg }) => bg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 10% 8%;
  align-items: center;
`

const StyledH1 = styled.h1`
font-size: 32px;
color: white;
@media (min-width: 768px) {
  font-size: 52px;
}
`
const StyledSec = styled.p`
font-size: 16px;
line-height: 20px;
color: white;
@media (min-width: 768px) {
  font-size: 22px;
  line-height: 30px;
}
`

const StyledButton = styled.a`
  width: 180px;
`

export const Header = ({ data = {} }) => {
  return (
    <header id="header">
      <Carousel interval={4000} autoPlay infiniteLoop showArrows={false} swipeable={false}>
        {
          data?.carousel?.map((item, index) => (
            <LocalContainer bg={item?.img}>
              <StyledH1>
                {item.title ? item.title : "Loading"}
              </StyledH1>
              <StyledSec>{item.paragraph ? item.paragraph : "Loading"}</StyledSec>
              <StyledButton
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
              >
                Learn More
              </StyledButton>{" "}
            </LocalContainer>
          ))
        }

      </Carousel>
    </header>
  );
};
