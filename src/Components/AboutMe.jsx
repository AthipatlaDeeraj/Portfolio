import styled from "styled-components"
import ImageCircle from "../img/LeftImages.png";
import Myimage from "../img/image.jpg";

const Container=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
     padding: 30px 90px;
      box-sizing: border-box;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;  
        align-items: center;
        text-align: center;
    }
`

const Section1=styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`
const Section2=styled.div`
    flex: 2;

`
const Section3=styled.div`
text-align: center;
    flex-direction: column;
    flex: 2;
`
const Image=styled.img`
    width: 44vh;
    border: 2px solid #F68537;
    border-radius: 48%;
    box-shadow:10px 5px 15px #F68537;
`
const LeftImage=styled.img`
    width: 30vh;
`

const Profesion = styled.h1`
  color: #F68537;
  font-family: monospace;
  font-size: 28px;
`

const Myself=styled.h1`
    font-size: xx-large;
    color: #fea260;
`

//under section3

const AboutMyself=styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Small = styled.h3`
  font-size: 16px;
  color: #fea260;
  margin: 0;
`;

const Medium = styled.h2`
  font-size: 22px;
  color: #F68537;
  margin: 0;
`;

const Large = styled.p`
  font-size: 18px; 
  line-height: 1.6;
  margin: 0;
`;


const SkillsWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  margin-top: 40px;
  position: relative;
`;

const SliderTrack = styled.div`
  display: flex;
  gap: 30px;
  min-width: max-content;
  animation: scroll 15s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
  object-fit: contain;
  filter: grayscale(0.4);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    filter: none;
  }
`;

const skills = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "AWS",
    src: "https://cdn.iconscout.com/icon/free/png-512/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=512"
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "HTML",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/330px-HTML5_logo_and_wordmark.svg.png"
  },
  {
    name: "CSS",
    src: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
  }
];


const AboutMe = () => {
  return (
    <Container>
        <Section1>
            <LeftImage src={ImageCircle}/>
            <Myself>HI I AM DEERAJ<Profesion>REACT DEVELOPER</Profesion></Myself>
        </Section1>

        <Section2>
            <Image src={Myimage}/>
        </Section2>

        <Section3>
            <AboutMyself>
                <Small>Hello!</Small>
                <Medium>I'm Deeraj, a passionate tech enthusiast.</Medium>
                <Large>
                    Currently pursuing B.Tech in CSE at VIT-AP University.<br />
                    Skilled in Java and the MERN Stack.<br />
                    Eager to explore and master AWS Cloud Services.
                </Large>
                <SkillsWrapper>
                    <SliderTrack>
                        {[...skills, ...skills].map((icon, index) => (
                        <Icon key={`${icon.name}-${index}`} src={icon.src} alt={icon.name} />
                        ))}
                    </SliderTrack>
                </SkillsWrapper>

            </AboutMyself>
            
        </Section3>

    </Container>
  )
}

export default AboutMe