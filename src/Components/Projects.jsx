import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container=styled.div`
    margin-top: 150px;
    
`
const Hr=styled.hr`
    border: 1px solid black;
`

const Wrapper=styled.div`

    &:hover{
        cursor: pointer;
    }
`

const cardData = [
  {
    title: "Community Collaboration Website",
    text: "Built a platform for community engagement using Node.JS and Express.JS, enhancing local interaction.",
    img: "https://www.shutterstock.com/shutterstock/photos/1246645873/display_1500/stock-vector-hand-united-together-form-lines-triangles-and-particle-style-design-illustration-vector-1246645873.jpg",
    url: "#"
  },
  {
    title: "Video Sharing Website",
    text: "I developed a full-stack YouTube clone using the MERN stack.It includes core features like user authentication with JWT, video playback, likes, comments, and subscriptions.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/011/779/796/small_2x/premium-youtube-share-animation-free-video.jpg",
    url: "#"
  },
  {
    title: "AWS DevOps Project",
    text: "Automated CI/CD pipelines for Node.js apps using AWS services and GitHub Actions. Community Collaboration website hosted using EC2 instances and uploading static files using S3 .....",
    img: "https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo-700x394.png",
    url: "#"
  },
  {
    title: "ERP Internship at Amara Raja",
    text: "Worked on SAP modules, data extraction, and understanding enterprise workflows.",
    img: "https://praxisinfosolutions.com/blog/wp-content/uploads/2022/11/erp-vs-sap.jpg",
    url: "#"
  }
];
const Text = styled.h1`
  margin: 60px;
  margin-top: 0px;
  color: #F68537;
  position: relative;
  text-align: center;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
 
  &::after {
    content: "";
    position: absolute;
    left: 30;
    bottom: -10px;
    width: 50%;
    height: 15px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='25' viewBox='0 0 200 15'%3E%3Cpath d='M0 10 Q 10 0 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10' fill='transparent' stroke='%23F68537' stroke-width='2'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
    background-size: auto 100%;
  }
`;




function GridExample() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
     <Container>
      <Text>INTERNSHIPS AND PROJECTS</Text>
      <Wrapper>
        <Row xs={2} md={2} className="g-5" style={{ margin: '50px',marginLeft: '100px',marginRight: '100px' }}>
          {cardData.map((item, idx) => (
            <Col key={idx} data-aos="slide-up">
              <div style={{ height: '100%' }}>
                <a href={item.url} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
                  <Card style={{ height: '100%', boxShadow: '10px 5px 10px #FDFFB8' }}>
                    <Card.Img
                      variant="top"
                      src={item.img}
                      style={{ height: '180px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Wrapper>
      <Hr />
    </Container>
    
  );
}

export default GridExample;