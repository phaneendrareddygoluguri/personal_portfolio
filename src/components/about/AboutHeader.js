function AboutHeader() {
  const React = document.React;
  const { Box, Grid } = React.Imports(({ materialUI }) => materialUI);
  // const { AboutBulb, AboutGirl } = React.Imports(({ assets }) => assets);
  return (
    <>
      <Grid className="container-about">
        <Box className="card-headings">
          <h5>Phaneendra_Reddy_Goluguri</h5>
          <p>Frontend Developer ❤️| javaScript 💛| React 💙</p>
        </Box>
      </Grid>
    </>
  );
}

export default AboutHeader;
