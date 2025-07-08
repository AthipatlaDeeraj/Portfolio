import React from "react";
import styled from "styled-components";
import Leetcode from "../img/LeetcodeStreak.png";

const PageContainer = styled.div`
  padding: 60px 20px;
  background-color: #fffaf6;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #F68537;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: #F68537;
    border-radius: 4px;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.7;
`;

const List = styled.ul`
text-align: left;
  padding-left: 20px;
  list-style-type: circle;
  color: #444;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const Image=styled.img`

`
const PlacementButton=styled.button`
  position: fixed;
  top:85vh;
  right: 0;
  background-color: #f69754;
  color: white;
  border: none;
  &:hover{
    background-color: #F68537;
    cursor: pointer;
    color: black;
  }
`


const MentorPage = () => {
  return (
    <PageContainer>
      <Image src={Leetcode}/>
      <Section>
        <Heading>Welcome</Heading>
        <PlacementButton>
          PLACEMENT QUERIES<br/> CLICK HERE
        </PlacementButton>
        <Text>
          Hi, I'm Deeraj — Here's a space where I share my journey, mistakes, lessons, and
          top resources to help juniors and tech enthusiasts like you.
        </Text>
      </Section>

      <Section>
        <Heading>🎓College Timeline</Heading>
        <List>
          <li>
            <strong>1st Year:</strong>Quite excited and enjoyed a lot until i realised that my gpa came to be 8.35 which is very low
            <br/>Needed a comeback, worked hard blindly not knowing tactics to easily score gpa
          </li>
          <li>
            <strong>2nd Year:</strong> Not only hard work also started learning smartly and just study,study....<br/>
            Gpa in these semesters were very good(around 9) <br/>
            Playing your favourite sport is the best thing to do-Loved badminton-Became university player soon....
          </li>
          <li>
            <strong>3rd Year:</strong> Now comes the golden year where understood everything what to do what did i miss in past years and<br/>
            Mastered Balancing everything studies,sports,friends,skills...<br/>
            Learnt AWS which is my favourite ,got my highest cgpa 9.55 and also selected for VITOPIA sports(Badminton && Athletics) , did my internship at AmaraRaja<br/>
            </li>
        </List>
      </Section>

      <Section>
        <Heading>📚 Resources</Heading>
        <CardGrid>
          <Card>
            <h4>Master JAVA</h4>
            <Text>Watch youtube(Telusko channel) whether your prof was good or bad in teaching</Text>
          </Card>
          <Card>
            <h4>MERN Stack</h4>
            <Text>Udemy course by Anegela Yu for overall basic + Practical coding besides</Text>
            <Text>After then first try to build a clone <strong>important!</strong> </Text>
          </Card>
          <Card>
            <h4>AWS & Cloud</h4>
            <Text>AWS Cloud Practitioner then Solution Architect -- use aws documents or pdfs available online</Text>
            <Text>Recommended udemy top rated aws course for practical knowledge <strong>important!</strong> </Text>
          </Card>
          <Card>
            <h4>AI&ML</h4>
            <Text>Learn Python(highly required for AI specialization) - FreeCodeCamp(youtube)</Text>
            <Text>
              three Subjects under this
              <li>AI(theory)</li>
              <li>AI&ML(problematic and practical(different ml models using python))</li>
            </Text>
            <Text>Do ML or DL related projects <strong>important!</strong> </Text>
          </Card>
        </CardGrid>
      </Section>

      <Section>
        <Heading>🚫 Mistakes & Lessons</Heading>
        <List>
          <li>Start coding(or skill building) early, from the first year try balencing you can see wonders</li>
          <li>Not maintaining CGPA from the first semester(Consitency). One semester with less gpa can spoil overall grage cgpa</li>
          <li>Studying just 1 day before exam, many people does this but in reality there is 1 month duration before exams so just spending 1 week is enough before exams(not 1 day)</li>
          <li>Focused too much on frontend(which is about mostly creativity), ignored backend for a while. Backend is real coding.</li>
          <li>Didn't apply for early internships. During my 3rd year Internships started but didnt start coding until then</li>
        </List>
      </Section>

      <Section>
        <Heading>💬 FAQs / Ask Me</Heading>
        <List>
          <li><strong>How did you start with MERN?</strong> Started with YouTube then built mini clones.</li>
          <li><strong>Best roadmap for AWS?</strong>Watch the udemy one which is best for practical experience + Free tier hands-on projects.</li>
        </List>
      </Section>

      <Section>
        <Heading>Connect</Heading>
        <Text>
          Reach out on <a href="https://linkedin.com/in/athipatla-deeraj-kumar" target="_blank">LinkedIn</a> or message me on GitHub!
        </Text>
      </Section>
    </PageContainer>
  );
};

export default MentorPage;
