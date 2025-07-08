import styled from "styled-components"; 
import { createGlobalStyle } from "styled-components";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import GridExample from "../src/Components/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import MentorPage from "./pages/Mentor";
import {BrowserRouter,Route,Routes} from "react-router-dom";


const Body=styled.body`
  background-color: #FFF2EB;
`;
const Container=styled.div`
`;

const Arrow=styled.button`
  position: fixed;
  right: 30px;
  top: 90vh;
  width: 30px;
  background-color: #F68537;
  color: white;
  border: none;
  border-radius: 30%;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #d96d20;
  }
`

 const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif; 
  }
`;



 const App=()=>{
  return (
    <Body>
      <BrowserRouter>
      <GlobalStyle/>
        <Container>
          <Navbar/>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutMe />
                  <Arrow onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</Arrow>
                  <GridExample />
                  <Footer />
                </>
              }
            />
            <Route path="/mentor" element={<MentorPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Body>
  )
}

export default App;