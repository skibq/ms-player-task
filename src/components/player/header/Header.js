import React from "react"
import styled from "styled-components"
import { ReactComponent as BackButtonIcon } from "../../../images/player/back_ico.svg"
import { ReactComponent as SeeMoreIcon } from "../../../images/player/more_ico.svg"

const BackButton = styled.div`
  
`;
const AlbumInfo = styled.div`
  text-align: center;
  font-family: "Gilroy Light";
`;
const Label = styled.p`
   margin: 0;
   color: ${ (props) => props.theme.colors.lightViolet };
   text-transform: uppercase;
   line-height: 18px;
   font-size: 18px;
   line-height: 14px;
`;
const AlbumTitle = styled.h3`
  color: ${ (props) => props.theme.colors.white };
  margin: 0;
  font-weight: 200;
  font-size: 24px;
  line-height: 19px;
  margin-top: 13px;
`;
const HeaderWrapper = styled.div`
  padding: 44px 63px 0 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SeeMoreButton = styled.div`
  
`;

const Header = ({ albumTitle }) => {
  return(
    <HeaderWrapper>
      <BackButton>
        <BackButtonIcon width="16px" />
      </BackButton>
      <AlbumInfo>
        <Label>Album</Label>
        <AlbumTitle>{ albumTitle }</AlbumTitle>
      </AlbumInfo>
      <SeeMoreButton>
        <SeeMoreIcon width="4px"/>
      </SeeMoreButton>
    </HeaderWrapper>
  );
};

export default Header;
