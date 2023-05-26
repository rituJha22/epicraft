import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container>
      <Banner>
        {/* <h1>About Us</h1> */}
      </Banner>
      <Content>
        <h2>Our Story</h2>
        <p>
          Welcome to our handicraft and handloom eCommerce website, where we bring you the best of India's traditional and authentic crafts. We are passionate about showcasing the rich heritage of India's skilled artisans and craftsmen who create exquisite pieces of handicrafts and handlooms.

          Our story began with a vision to promote and preserve the indigenous crafts of India. We believe that each piece of handicraft and handloom represents the rich history, culture, and traditions of our country. We strive to provide a platform for these skilled artisans to showcase their creativity and talent to the world.
        </p>
        <p>
          Welcome to our handicraft and handloom eCommerce website, where we bring you the best of India's traditional and authentic crafts. We are passionate about showcasing the rich heritage of India's skilled artisans and craftsmen who create exquisite pieces of handicrafts and handlooms.

          Our story began with a vision to promote and preserve the indigenous crafts of India. We believe that each piece of handicraft and handloom represents the rich history, culture, and traditions of our country. We strive to provide a platform for these skilled artisans to showcase their creativity and talent to the world.

          At our eCommerce store, you will find a wide range of handmade products, including clothing, accessories, home decor, and much more. We source our products directly from artisans across India, ensuring that each item is unique and of the highest quality.

          We are committed to supporting local artisans and promoting sustainable practices. By choosing our products, you are not only supporting the livelihoods of these skilled craftsmen but also contributing to the conservation of India's cultural heritage.

          Thank you for choosing us as your shopping destination. We hope that our collection of beautiful handicrafts and handlooms will inspire you to explore India's vibrant culture and heritage.
        </p>
        <h2>Our Team</h2>
        <Team>
          <TeamMember>
            <img src="/teammember1.jpg" alt="Team Member 1" />
            <h3>Ritu Jha</h3>
            {/* <p>CEO</p> */}
          </TeamMember>
          <TeamMember>
            <img src="/teammember2.jpg" alt="Team Member 2" />
            <h3>Nandini Gurav</h3>
            {/* <p>CFO</p> */}
          </TeamMember>
          <TeamMember>
            <img src="/teammember3.jpg" alt="Team Member 3" />
            <h3>Ritu Jha</h3>
            {/* <p>CTO</p> */}
          </TeamMember>
        </Team>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
`;

const Banner = styled.div`
  height: 400px;
  background-image: url("/India.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

//   h1 {
//     font-size: 48px;
//     text-align: center;
//   }
`;

const Content = styled.div`
  margin-top: 50px;
  font-size: 18px;
  line-height: 1.5;

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 20px;
  }
`;

const Team = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
`;

const TeamMember = styled.div`
  flex-basis: calc(33.33% - 20px);
  margin-bottom: 20px;
  text-align: center;

  img {
    border-radius: 50%;
    max-width: 200px;
    max-height: 100px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    ;
}

p {
font-size: 18px;
line-height: 1.5;
}
`;

export default AboutUs;