import styled from "styled-components";
import Announc from "../components/Announc";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {mobile} from "../responsive"


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  background-color: black;
  ${mobile({padding:"10px"})}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: white;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  border-color: white;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "white" : "transparent"};
  color: ${(props) => props.type === "filled" && "black"};
`;
const TopTexts = styled.div`
${mobile({display:"none"})}`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  color: white;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({flexDirection:"column"})}
`;
const ProductDetail = styled.div`
 flex: 2;
 display: flex;
 color: white;
`;
const Image = styled.img`
 width: 200px;
`;
const Details = styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
`;
const ProductName = styled.span`
 
`;
const ProductId = styled.span`
 
`;
const ProductColor = styled.div`
 width: 20px;
 height: 20px;
 border-radius: 50%;
background-color: ${props=>props.color};
`;
const ProductSize = styled.span`
 
`;
const PriceDetail = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;

`;
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
color: white;
margin-bottom: 20px;
`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({margin:"5px 15px"})}

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 300;
color: white;
${mobile({marginBottom:"20px"})}
`
const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`

const Summery = styled.div`
  flex: 1;
  color: white;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummeryTitle = styled.h1`
font-weight: 200;
`
const SummeryItem = styled.div`
margin:30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`
const SummeryItemText = styled.span``
const SummeryItemPrice = styled.span``
const Button = styled.button`
cursor: pointer;
width: 100%;
  padding: 10px;
  background-color: white;
  color: black;
  font-weight: 600;`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announc />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shpping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.chronopassion.com/Public/Files/watch/rzsize_ea4f6c5b07_700.jpg"/>
                <Details>
                    <ProductName><b>Product:</b> HUBLOT BIG BANG MECA</ProductName>
                    <ProductId><b>ID:</b> 54584564</ProductId>
                    <ProductColor color="#073D5B"/>
                    <ProductSize><b>Size:</b> 42</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                    <AddIcon/>
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>25,000€</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://www.hublot.cn/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/spirit-of-big-bang-white-ceramic-45-mm-601.HX.0173.LR-soldier-shot.png?itok=iwY6bI4B"/>
                <Details>
                    <ProductName><b>Product:</b> SPIRIT OF BIG BANG</ProductName>
                    <ProductId><b>ID:</b> 3466584</ProductId>
                    <ProductColor color="white"/>
                    <ProductSize><b>Size:</b> 42</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                    <AddIcon/>
                    <ProductAmount>1</ProductAmount>
                    <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>20,000€</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summery>
            <SummeryTitle>ORDER SUMMERY </SummeryTitle>
            <SummeryItem>
                <SummeryItemText>Subtotal</SummeryItemText>
                <SummeryItemPrice>45,000€</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem>
                <SummeryItemText>Estimated Shipping</SummeryItemText>
                <SummeryItemPrice>500€</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem>
                <SummeryItemText>Shipping Discount</SummeryItemText>
                <SummeryItemPrice>200€</SummeryItemPrice>
                </SummeryItem>
                <SummeryItem>
                <SummeryItemText type="total">Total</SummeryItemText>
                <SummeryItemPrice>45,200€</SummeryItemPrice>
            </SummeryItem>
            <Button>CHECKOUT NOW</Button>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
