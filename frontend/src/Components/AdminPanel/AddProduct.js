// import React from "react";
// import styled from "styled-components";

// const AddProduct = () => {
//     return (
//         <Container>
//             <Title>Add Product Page</Title>
//             {/* Add form here to add product */}
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

// export default AddProduct;


import React, { useState } from "react";
import styled from "styled-components";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  // const [image, setImage] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Title>Add Product Page</Title>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </FormField>
        {/* <FormField>
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            accept=".jpg, .jpeg, .png"
            required
          />
        </FormField> */}

        <Button type="submit">Add Product</Button>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 50%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input,
  textarea {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid gray;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 0.25rem;
  background-color: #27ae60;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

export default AddProduct;