// import Education from "../assets/education.svg";
// import Edu1 from "../assets/edu1.png";
import Skills from "../assets/skills.png";
// import Edu3 from "../assets/edu3.png";
const AboutSkill = () => {
  const React = document.React;
  // const { AboutSkillCard } = React.Imports(({ constants }) => constants);
  // const { ABOUT_Skill_CARD } = AboutSkillCard();
  const { Grid,  } = React.Imports(({ materialUI }) => materialUI);
  // const { AboutExpCard } = React.Imports(({ constants }) => constants);
  // const { ABOUT_DESCRIPTION_CARD } = AboutExpCard();
  return (
    <Grid
      container
      xs={12}
      className="educationContainer"
      style={{ flexWrap: "wrap-reverse" }}
    >
      <Grid items xs={12} md={6} className="skillsContainerRight">
        <div style={{ textAlign: "center" }}>
          {[
            // ...ABOUT_DESCRIPTION_CARD,
            { skill: "Html" },
            { skill: "Css" },
            { skill: "JavaScript" },
            { skill: "React" },
            { skill: "Redux and ReduxToolkit" },
          ]?.map((each, index) => {
            return (
              <div className="skillsCardContainer">
                <p>{each.skill}</p>
                <p className="yearsExp">2years</p>
              </div>
            );
          })}
        </div>
      </Grid>
      <Grid items xs={12} md={6} className="educationContainerLeft">
        <p>Small look at to my skills</p>
        <img src={Skills} alt={"img"} />
      </Grid>
    </Grid>
  );
};
export default AboutSkill;


