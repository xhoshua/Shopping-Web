import styled from "styled-components";
import Announc from "../components/Announc";
import NavBar from "../components/Navbar";
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import {mobile} from "../responsive"


const Container = styled.div`

`;
const Title = styled.h1`
margin: 20px;
color: white;

`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`;
const Filter = styled.div`
margin: 20px;
${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})}
`;

const FilterText = styled.span`
font-style: 20px;
font-weight: 600;
margin-right: 20px;
color: white;
${mobile({marginRight:"0px"})}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0px"})}
`
const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
      
      <NavBar />
      <Announc />
      <Title>Big Bang Watch</Title>
      <FilterContainer>
        <Filter><FilterText>Filter Products:</FilterText>
        <Select>
        <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
        </Select>
        <Select>
        <Option disabled selected>
              Size
            </Option>
            <Option>33MM</Option>
            <Option>38MM</Option>
            <Option>39MM</Option>
            <Option>40MM</Option>
            <Option>41MM</Option>
            <Option>42MM</Option>
        </Select>

        </Filter>
        <Filter><FilterText>Sort Products:</FilterText>
        <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
          </Filter>
        
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
