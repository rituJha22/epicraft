// import React from "react";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";

// const EditProduct = () => {
//     const { id } = useParams();

//     return (
//         <Container>
//             <Title>Edit Product Page</Title>
//             <SubTitle>Editing Product with ID: {id}</SubTitle>
//             {/* Add form here to edit product */}
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

// export default EditProduct;

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const { id } = useParams();

    return (
        <Container>
            <Title>Edit Product Page</Title>
            <SubTitle>Editing Product with ID: {id}</SubTitle>
            <Form>
                <Label>
                    Name:
                    <Input type="text" placeholder="Enter product name" />
                </Label>
                <Label>
                    Price:
                    <Input type="number" placeholder="Enter product price" />
                </Label>
                <Label>
                    Description:
                    <Textarea placeholder="Enter product description"></Textarea>
                </Label>
                <Button type="submit">Save Changes</Button>
            </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  height: 10rem;
  resize: none;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #f09d51;
  color: #fff;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e86f28;
  }
`;

export default EditProduct;

