import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../responsive"

const Container = styled.div`
  height: 60px;
  ${mobile({padding:"10px 0px"})}

  background-color: #f03636;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  align-items: center;
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display:"none"})}

`
const SearchContainer = styled.div`
border:0.5px solid black;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input = styled.input `
border: none;
background-color: transparent;
${mobile({width:"50px"})}

`

const Center = styled.div`
flex:1;
text-align: center;
`

const Logo = styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}

`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({justifyContent:"center",flex:"2"})}


`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 12px;
${mobile({fontSize:"12px",marginLeft:"10px"})}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Language>EN</Language>
        <SearchContainer>
  <Input placeholder="Search"/>
            <SearchIcon style={{color:"black",fontSize:16}}></SearchIcon>
        </SearchContainer>
        </Left>
        <Center><Logo>Xhoi's Watches.</Logo></Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlinedIcon/>
    </Badge>
            </MenuItem>
            </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
