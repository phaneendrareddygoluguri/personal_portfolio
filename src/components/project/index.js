function ProjectIndex() {
  const React = document.React;
  // const {} = React.Imports(({ utils }) => utils);
  const { Grid } = React.Imports(({ materialUI }) => materialUI);
  // const { CloudDownloadIcon, CloseIcon } = React.Imports(({ icons }) => icons);

  // const { Chat, Chat2, Msg, Peoplegrp, Mic, Person, Dance } = React.Imports(
  //   ({ assets }) => assets
  // );
  const {  ProjectMetaInfo } = React.Imports(
    ({ utils }) => utils
  );

  return (
    <>
      <div>
        <ProjectMetaInfo />
      </div>
      <div className="plugInstore">
        <h2>Popular Dependencies</h2>
        <Grid container spacing={2} justifyContent="space-around">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <div className="plugIncardContainer">
              {/* <img src={Chat} alt="EXPERIENCE" className="images" /> */}
              <div>
                <h3 className="text">Formik</h3>
                <p>
                forms are really verbose in React. To make matters worse, most form helpers do wayyyy too much magic and often have a significant performance cost associated with them. Formik is a small library that helps you with the 3 most annoying parts:Getting values in and out of form state,Validation and error messages,Handling form submission,By colocating all of the above in one place, Formik will keep things organized--making testing, refactoring, and reasoning about your forms a breeze
                </p>
                {/* <Button
                  id="btn1"
                  variant="outlined"
                  className="pluginButtonVerified"
                  startIcon={<CloudDownloadIcon />}
                >
                  Install
                </Button> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="plugIncardContainer">
              {/* <img src={Chat} alt="EXPERIENCE" className="images" /> */}
              <div>
                <h3 className="text">Material UI</h3>
                <p>
                Material UI is an open-source React component library that implements Google's Material Design. It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box. Material UI is beautiful by design and features a suite of customization options that make it easy to implement your own custom design system on top of our components.The library includes an extensive set of intuitive customizability features. 

                </p>
                {/* <Button
                  id="btn1"
                  variant="outlined"
                  className="pluginButtonVerified"
                  startIcon={<CloudDownloadIcon />}
                >
                  Install
                </Button> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="plugIncardContainer">
              {/* <img src={Chat} alt="EXPERIENCE" className="images" /> */}
              <div>
                <h3 className="text">Redux And ReduxToolkit</h3>
                <p>
                Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development. It is intended to be the standard way to write Redux logic, and we strongly recommend that you use it.It includes several utility functions that simplify the most common Redux use cases, including store setup, defining reducers, immutable update logic, and even creating entire `slices` of state at once without writing any action creators or action types by hand. Redux Toolkit is available as a package on NPM 
                </p>
                {/* <Button
                  id="btn1"
                  variant="outlined"
                  className="pluginButtonVerified"
                  startIcon={<CloudDownloadIcon />}
                >
                  Install
                </Button> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="plugIncardContainer">
              {/* <img src={Chat} alt="EXPERIENCE" className="images" /> */}
              <div>
                <h3 className="text">EslintPlug in</h3>
                <p>
                ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.ESLint is completely pluggable. Every single rule is a plugin and you can add more at runtime. You can also add community plugins, configurations, and parsers to extend the functionality of ESLint.
                </p>
                {/* <Button
                  id="btn1"
                  variant="outlined"
                  className="pluginButtonVerified"
                  startIcon={<CloudDownloadIcon />}
                >
                  Install
                </Button> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="plugIncardContainer">
              {/* <img src={Chat} alt="EXPERIENCE" className="images" /> */}
              <div>
                <h3 className="text">React Router</h3>
                <p>
                React Router enables `client side routing`. In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.Routing is the process of redirecting a user to different pages based on their action or request.
                </p>
                {/* <Button
                  id="btn1"
                  variant="outlined"
                  className="pluginButtonVerified"
                  startIcon={<CloudDownloadIcon />}
                >
                  Install
                </Button> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="plugIncardContainer">
              {/* <img src={Chat} alt="EXPERIENCE" className="images" /> */}
              <div>
                <h3 className="text">React DnD</h3>
                <p>
               
React DnD is a set of React utilities to help you build complex drag and drop interfaces while keeping your components decoupled. It is a perfect fit for apps like Trello and Storify, where dragging transfers data between different parts of the application, and the components change their appearance and the application state in response to the drag and drop events..
                </p>
                {/* <Button
                  id="btn1"
                  variant="outlined"
                  className="pluginButtonVerified"
                  startIcon={<CloudDownloadIcon />}
                >
                  Install
                </Button> */}
              </div>
            </div>
          </Grid>
          {/* Card 2 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Chat2} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">Payment Gateway</h3>
                <p>
                  Securely process payments directly within the chatbot for a
                  smooth user experience
                </p>
              </div>
              <Button id="btn2" variant="outlined" startIcon={<CloseIcon />}>
                Uninstall
              </Button>
            </div>
          </Grid> */}
          {/* Card 3 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Mic} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">Speech-to-Text (STT)</h3>
                <p>
                  Allow users to interact with the chatbot using voice commands.
                </p>
              </div>
              <Button
                id="btn1"
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
              >
                Install
              </Button>
            </div>
          </Grid> */}
          {/* Card 1 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Peoplegrp} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">User Behavior Tracking</h3>
                <p>
                  Monitor user interactions and analyze chatbot performance to
                  optimize responses.
                </p>
              </div>
              <Button id="btn2" variant="outlined" startIcon={<CloseIcon />}>
                Uninstall
              </Button>
            </div>
          </Grid> */}
          {/* Card 2 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Msg} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">User Behavior Tracking</h3>
                <p>
                  Respond to tweets and direct messages with your AI chatbot.
                </p>
              </div>
              <Button
                id="btn1"
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
              >
                Install
              </Button>
            </div>
          </Grid> */}
          {/* Card 3 */}
          {/* <Grid item xs={12} sm={6} md={4}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "20px",
                position: "relative",
              }}
            >
              <img src={Person} alt="EXPERIENCE" className="images" />
              <div style={{ marginLeft: "60px" }}>
                <h3 className="text">Avatar Customization</h3>
                <p>
                  Give your chatbot a unique personality with various avatars
                  and animations.
                </p>
              </div>
              <Button
                id="btn1"
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
              >
                Install
              </Button>
            </div>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
}

export default ProjectIndex;
