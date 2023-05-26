// import React from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";

// const DeleteProduct = () => {
//     const { id } = useParams();

//     return (
//         <Container>
//             <Title>Delete Product Page</Title>
//             <SubTitle>Deleting Product with ID: {id}</SubTitle>
//             {/* Add form here to delete product */}
//         </Container>
//     );
// };

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Title = styled.h1`
//   font-size: 2rem;
//   margin-top: 2rem;
// `;

// const SubTitle = styled.h2`
//   font-size: 1.5rem;
//   margin-top: 1rem;
// `;

// export default DeleteProduct;
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const DeleteProduct = () => {
    const { id } = useParams();

    return (
        <Container>
            <Title>Delete Product Page</Title>
            <SubTitle>Are you sure you want to delete Product with ID: {id}?</SubTitle>
            <ButtonContainer>
                <Button>Yes</Button>
                <Button>No</Button>
            </ButtonContainer>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #222;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

export default DeleteProduct;
