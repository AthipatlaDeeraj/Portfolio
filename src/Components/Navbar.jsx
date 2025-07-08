import styled from "styled-components"; 
import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { useLocation ,Link } from "react-router-dom";
import MentorPage from "../pages/Mentor";


const Container=styled.div`
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #FFF2EB;
`;

const Wrapper=styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    margin: 30px 120px;
    @media (max-width: 768px) {
        margin: 20px 20px;
    }
`

const NavLeft=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const NavRight=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

const Logo=styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`

const UserName=styled.h4`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

const Hr=styled.hr`
    border: 1px solid #ada8a8eb;
    width: 90%;
    margin: -7px auto 2px auto;
`

const handleGitHubClick = () => {
  window.open('https://github.com/AthipatlaDeeraj', '_blank');
};
const handleLinkedInClick = () => {
  window.open('https://www.linkedin.com/in/athipatla-deeraj-kumar/', '_blank');
};


 const Navbar=()=>{
    const location = useLocation(); const isMentorPage = location.pathname === "/mentor";
  const targetPath = isMentorPage ? "/" : "/mentor";
  const buttonLabel = isMentorPage ? "Home" : "MentorShip";

  const handleGitHubClick = () => {
    window.open('https://github.com/AthipatlaDeeraj', '_blank');
  };
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/athipatla-deeraj-kumar/', '_blank');
  };
    const [name,setName]=useState("DEERAJ PORTFOLIO");

  return (
    <Container>
        <Wrapper>
            <NavLeft>
                <Logo src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg"/>
                <UserName>{name}</UserName>
            </NavLeft>
            <NavRight>
                <DeveloperModeIcon />
                <GitHubIcon style={{ cursor: 'pointer' }}  onClick={handleGitHubClick}/>
                <LinkedInIcon style={{ cursor: 'pointer' }}  onClick={handleLinkedInClick}/>
                <a href="https://leetcode.com/u/AthipatlaDeeraj/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" width="24" alt="LeetCode" style={{ marginTop: '7px' }} />
                </a>
                <Link to={targetPath} style={{ textDecoration: "none", color: "inherit" }}>
                    <button style={{ backgroundColor: "#F68537", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" }}>
                        {buttonLabel}
                    </button>
                </Link>
            </NavRight>
        </Wrapper>
        <Hr/>
        <Hr/>
        <Hr/>
    </Container>
  )
}

export default Navbar;