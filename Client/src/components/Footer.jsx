import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import {mobile} from "../responsive"

const Container = styled.div`
display: flex;
background-color: black;
${mobile({flexDirection:"column"})}
`;

const Left = styled.div`
flex:1;
flex-direction: column;
padding: 20px;
color: white;
`;
const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`
const Center = styled.div`
flex:1;
padding: 20px;
color: white;
${mobile({display:"none"})}
`;


const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right = styled.div`
flex:1;
padding: 20px;
color: white;
${mobile({backgroundColor:"#363636"})}
`;
const ContantItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
<Logo>Xhoi's Watches.</Logo>
<Desc>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab itaque ipsa suscipit consequuntur delectus vel iure. Illo minima nostrum saepe voluptatum quas quos, optio, quasi amet impedit consectetur suscipit.
</Desc>
<SocialContainer>
    <SocialIcon  color="3B5999">
<FacebookIcon/>
    </SocialIcon>
    <SocialIcon color="E4405F">
<InstagramIcon/>
    </SocialIcon >
    <SocialIcon color="55ACEE">
<TwitterIcon/>
    </SocialIcon >
    <SocialIcon color="E60023">
<PinterestIcon/>
    </SocialIcon>
</SocialContainer>
      </Left>
      <Center>
<Title>Usefull Linka</Title>
<List>
  <ListItem>Home</ListItem>
  <ListItem>Cart</ListItem>
  <ListItem>Man Category</ListItem>
  <ListItem>Woman Category</ListItem>
  <ListItem>My account</ListItem>
  <ListItem>Order Tracking</ListItem>
  <ListItem>Wishlist</ListItem>
  <ListItem>Wishlist</ListItem>
  <ListItem>Terms</ListItem>
</List>

      </Center>
      <Right >
        <Title>Contact</Title>
        <ContantItem>
      <LocationOnIcon style={{marginRight:"10px"}}/> Skanderbeg Square,Tiran 1001
        </ContantItem>
        <ContantItem>
         <LocalPhoneIcon style={{marginRight:"10px"}}/> +355 673761902
        </ContantItem >
        <ContantItem>
          <EmailIcon style={{marginRight:"10px"}}/>xhoi.work@gmail.com
        </ContantItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
