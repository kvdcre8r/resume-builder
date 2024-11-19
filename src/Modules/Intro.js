import styled from "styled-components";

const IntroStyle = styled.div`
  color: white;
  font-family: open-sans;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  padding: 0px 10px;
  summary {
    background-color: #24427381;
    width: 12%;
    padding-left: 10px;
  }
  p {
    background-color: #24427381;
    padding: 10px;
  }
`;

function Intro() {
  return (
    <IntroStyle>
      <details open>
        <summary>Introduction</summary>
        <p>
          Welcome to the Presto Resume Builder! This app allows you to create a
          uniquely stylized resume showcasing your skills, personality, and
          expertise. Start by entering your personal information and links such
          as your personal brand website and LinkedIn profile. Then you can
          customize your resume using various fonts, colors, and designs. Add
          sections to your resume, such as Technical Skills, Work Experience,
          and Relevant Education. Once you're satisfied with your design, you
          can save your work directly to your local drive. Presto! You've
          created a professional and eye-catching resume!
        </p>
      </details>
    </IntroStyle>
  );
}

export default Intro;
