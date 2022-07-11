import styled from "styled-components";
import {mobile} from "../responsive"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://img1.goodfon.com/wallpaper/nbig/a/eb/hublot-chasy-watch-2872.jpg") center;
background-repeat:no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;

`;
const Wrapper = styled.div`
padding: 20px;
width: 50%;
background-color: white;
${mobile({width:"75%"})}

`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;

`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #f03636;
cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="first name" />
          <Input placeholder="last name" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            architecto quae est fugit adipisci ipsam fugiat veniam labore sed
            consequuntur, hic tenetur vero ex ullam voluptatem. Asperiores,
            ipsa! Minus, suscipit.
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
