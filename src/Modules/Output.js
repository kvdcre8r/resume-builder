import React from "react";
import styled from "styled-components";

const CustomStyle = styled.div`
  width: 700px;
  height: 1000px;
  padding: 20px;

  h1 {
    font-size: 4em;
    margin: 0px;
  }
  h2 {
    margin: 20px 0px 10px 0px;
    text-decoration: underline;
  }
  h3,
  h4,
  p {
    margin: 5px;
  }
  li {
    margin-left: 20px;
    list-style: none;
  }
  h4 {
    margin-left: 10px;
    font-weight: normal;
  }
  span {
    margin: 0px;
    padding-right: 10px;
    font-weight: bold;
  }
`;

const TargetComponentWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px 10px 24px 10px;
  background-color: ${(props) => props.color || "#F1E9D2"};
  color: ${(props) => props.color || "#315BA1"};
  font-family: ${(props) => props.font || "open-sans"};
  font-size: ${(props) => props.size || "12px"};
`;

const CustomResume = ({
  name,
  phoneNumber,
  email,
  location,
  links,
  sections = [],
}) => {
  return (
    <CustomStyle>
      <h1>{name}</h1> <span>{phoneNumber}</span> <span>{email}</span>
      <span>{location}</span> <span>{links}</span>
      {sections.map((section, index) => (
        <div key={index}>
          <h2>{section.s1SectionTitle}</h2> <h3>{section.s1SectionSubtitle}</h3>
          <h4>{section.s1Description}</h4> <li>{section.s1BulletPoint1}</li>
          <li>{section.s1BulletPoint2}</li> <li>{section.s1BulletPoint3}</li>
          <h2>{section.s2SectionTitle}</h2> <h3>{section.s2SectionSubtitle}</h3>
          <h4>{section.s2Description}</h4> <li>{section.s2BulletPoint1}</li>
          <li>{section.s2BulletPoint2}</li> <li>{section.s2BulletPoint3}</li>
          <h2>{section.s3SectionTitle}</h2> <h3>{section.s3SectionSubtitle}</h3>
          <h4>{section.s3Description}</h4> <li>{section.s3BulletPoint1}</li>
          <li>{section.s3BulletPoint2}</li> <li>{section.s3BulletPoint3}</li>
        </div>
      ))}
    </CustomStyle>
  );
};

const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <TargetComponentWrapper ref={ref} color={props.bgcolor}>
      <CustomResume {...props} />
    </TargetComponentWrapper>
  );
});

export default TargetComponent;
