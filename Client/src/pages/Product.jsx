import styled from "styled-components";
import Announc from "../components/Announc";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: black;
  color: white;
  ${mobile({padding:"10px",flexDirection:"column"})}

`;
const ImageContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({height:"40vh"})}

`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 5px;
  ${mobile({padding:"10px"})}

`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({width:"100%"})}

`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOptions = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #f03636;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid #f03636;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announc />
      <Wrapper>
        <ImageContainer>
          <Image src="https://www.hublot.com/sites/default/files/styles/watch_item_desktop_1x_scale_no_crop_600_6000_/public/2022-03/spirt-of-big-bang-red-magic-42-mm-soldier-shot.png?itok=2PLbZm0e" />
        </ImageContainer>
        <InfoContainer>
          <Title>Spirit Of Big Bang Red Magic</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            libero saepe, fugit architecto consequuntur aperiam nulla
            reprehenderit doloremque ratione labore nemo molestias quibusdam,
            repellat voluptas sequi similique aut dicta tempora!
          </Desc>
          <Price>34,201.75€</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color:</FilterTitle>
              <FilterColor style={{ border: "1px solid #fff" }} color="black" />
              <FilterColor color="#878681" />
              <FilterColor color="gold" />
              <FilterColor color="red" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOptions>33</FilterSizeOptions>
                <FilterSizeOptions>38</FilterSizeOptions>
                <FilterSizeOptions>39</FilterSizeOptions>
                <FilterSizeOptions>40</FilterSizeOptions>
                <FilterSizeOptions>41</FilterSizeOptions>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
