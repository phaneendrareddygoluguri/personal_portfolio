import React from "react";
import { useNavigate } from "react-router-dom";
function HomeIndex() {
  const {
    Grid,
    // Box,
    Card,
    CardContent,
    CardMedia,
    // Typography,
    // Popover,
    // EmailIcon,
    // WhatsAppIcon,
    // IconButton,
    // SouthIcon,
  } = React.Imports(({ materialUI }) => materialUI);
  const { Image6, Image8, Image9, projectImg1, phanee } = React.Imports(
    ({ assets }) => assets
  );
  // const {
  //   SignalWifi0BarIcon,
  //   ShareOutlinedIcon,
  //   FastForwardOutlinedIcon,
  //   CloseIcon,
  // } = React.Imports(({ icons }) => icons);
  const { ReactECharts } = React.Imports(({ ECharts }) => ECharts);
  const { DonutOptions } = React.Imports(({ constants }) => constants);
  const { DONUT_OPTIONS } = DonutOptions();
  const cardsData = [
    {
      image: projectImg1,
      title: "PDS Galaxy",
      content: "PDS Galaxy provides  services for the Health sector",
      date: "Dec 23, 2021",
      readTime: "5 min read",
    },
    {
      image: projectImg1,
      title: "NCUK-The University Consortium ",
      content: "NCUK is unique in UK higher education. ",
      date: "Dec 23, 2021",
      readTime: "3 min read",
    },
    {
      image: projectImg1,
      title: "SIC",
      content: "PDS-SIC is an Integrated Web solution for Secure Email",
      date: "Dec 23, 2021",
      readTime: "5 min read",
    },
    // Add more card data as needed
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const skills = [
    {
      language: "javaScript",
      experience: "2YR",
    },
    {
      language: "HTML5",
      experience: "2.4YR",
    },
    {
      language: "ReactJS",
      experience: "1.8YR",
    },
    {
      language: "CSS3",
      experience: "2YR",
    },
    {
      language: "Node.JS",
      experience: "0.6YR",
    },
  ];
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="main">
      <Grid container>
        <Grid container>
          <Grid item xs={12} md={6} className={"homeMainContainer"}>
            <h3>
              Hello, it's Me I'm Phaneendra_Reddy_Goluguri And I'm a Frontend
              Developer{" "}
            </h3>
            <p>
              I'm a Frontend Developer with extensive experince for over 2
              years. Expertise is to create and web design,Frontend design and
              many more....
            </p>
            <button
              className="getStartedButton"
              onClick={() => {
                navigate("/about");
              }}
            >
              Know Me
            </button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={"homeMainProfileContainer"}
            pl={4}
          >
            <div className="profileImageContainer">
              <img
                src={Image6}
                alt="projects"
                className="ProjectsStamp"
                onClick={() => {
                  navigate("/project");
                }}
              />
              <img src={phanee} alt="girlImage" className="profileImage" />
            </div>
          </Grid>
        </Grid>
        <Grid container className="getInTouchContainer">
          <h2 className="action-head">Call to Action</h2>

          <p className="action-para">
            Developed a highly configurable user interface (UI) within these
            modules, allowing users to dynamically create windows with
            customizable fields, validation rules, and various field types,
            including file uploading functionality and more.
          </p>

          <button
            aria-describedby={id}
            variant="contained"
            style={{ border: " 0px solid black" }}
            onClick={handleClick}
          >
            <a
              className="actionButton"
              href="mailto:Phaneendra_Reddy_Golugurikondapalli801@gmail.com"
            >
              Get in Touch
            </a>
          </button>
          {/* <div>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <IconButton
                    sx={{
                      position: "absolute",
                      top: 0,
                      marginLeft: 32,
                      zIndex: 1,
                    }}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ p: 2, fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    Get in touch
                  </Typography>
                  <div>
                    <Typography
                      sx={{ display: "flex", alignItems: "center", p: 2 }}
                    >
                      <EmailIcon color="primary" sx={{ marginRight: 1 }} />
                      <span className="popText">Mail</span>
                    </Typography>
                    <Typography
                      sx={{ display: "flex", alignItems: "center", p: 2 }}
                    >
                      <WhatsAppIcon color="success" sx={{ marginRight: 1 }} />
                      <span className="popText">Whatsapp</span>
                    </Typography>
                  </div>
                </Popover>
              </div> */}
          {/* </div> */}
          {/* </div> */}
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} className="aboutUSContainer">
            <div className="aboutContent">
              <h3>About us</h3>
              <img src={Image8} width={"80%"} alt="img" className="about-img" />
            </div>
            <p>
              • 2.1 years of work experience as a React JS (JavaScript library)
              Web Developer. • Developed reusable components using the React JS
              library for the user interface. • Exposed to working with the
              latest react hooks functional programming. • Strong hands-on
              experience with Forms, and data tables. • Experience with Formik,
              Yup, Material UI. • Integrated Redux store management to drill
              down API response throughout all the reusable components. • Worked
              with the promise-based HTTP client Axios and Fetch to interface
              the resources from API (Application Programming Interface). •
              Involved in requirement analysis, design and development. •
              Experience in using GIT for code repository and as version control
              mechanism. • Ability to be creative and take self-initiatives to
              manage multiple projects in parallel during critical situations. .
              Ability to work independently and with a team.............
            </p>
            <button
              className="learnButton"
              onClick={() => {
                navigate("/experience");
              }}
            >
              Learn More
            </button>
          </Grid>
          <Grid item xs={12} md={6} className="aboutImageContainer" pl={4}>
            {/* <div className="about-us">
              <div className="about-container">
                <div className="connection">
                  <h5 className="connect-head">Eiusmod comm</h5>
                  <div className="icons-names">
                    <ul>
                      <li style={{ background: "#7930d833" }}>
                        <SignalWifi0BarIcon className="li-icons" />
                        Connection
                      </li>
                      <li style={{ background: "rgb(32 151 225 / 20%)" }}>
                        <ShareOutlinedIcon className="li-icons" />
                        Share
                      </li>
                      <li style={{ background: "rgb(201 150 12 / 14%)" }}>
                        <FastForwardOutlinedIcon className="li-icons" />
                        instantiate
                      </li>
                    </ul>{" "}
                  </div>
                </div>
                <img src={Image9} alt="Image9" className="img9" />
              </div>
            </div> */}
            <div className="aboutImageContent">
              <img src={Image9} alt="Image9" className="aboutUSImage" />
              {/* <img src={Image6} alt="projects" className="ProjectsStamp" /> */}
              {/* <img src={Image4} alt="girlImage" className="profileImage" /> */}
            </div>
          </Grid>
        </Grid>
        <Grid container className="skillsContainer">
          <h1>My Skills</h1>
          <Grid container className="donut">
            <Grid item xs={12} md={6} className="donut-chart">
              <ReactECharts option={DONUT_OPTIONS} />
            </Grid>
            <Grid item xs={12} md={6} className="donut-names" pl={4}>
              <div>
                {skills?.map((each) => {
                  return (
                    <div className="skillsNameContainer">
                      <p>{each?.language}</p>
                      <p className="exp">{each?.experience}</p>
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="projetContainer">
          <h2>Projects</h2>
          <div className="cardContainer">
            {cardsData.map((card, index) => (
              <Card className="card">
                <CardMedia
                  component="img"
                  height="250"
                  image={card.image}
                  alt="Card Image"
                />
                <CardContent>
                  <p className="title">{card.title}</p>
                  <p className="content">{card.content}</p>
                  <span className="date">{card.date}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="gotoProjectsContainer">
            <button
              className="gotoProjects"
              onClick={() => {
                navigate("/project");
              }}
            >
              Go to Projects
            </button>
          </div>
        </Grid>
        <Grid container className="testimonals">
          <p>"First, solve the problem. Then write the code💡🤌🧠 "</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomeIndex;
