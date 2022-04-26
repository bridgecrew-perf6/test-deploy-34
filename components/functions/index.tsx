import { Container, Grid, Link } from '@mui/material'
import WebFunctions from './web-functions'
import AppFunctions from './app-functions'
import "./style.scss"

const Functions = (props: { link: string, textBtn?: string }) => {
  const { link, textBtn } = props;

  return (
    <div id="functions">
      <Container maxWidth="xl">
        <div id="web-function">
          <h2 className="title-function">Web Functions</h2>
          <Grid container spacing={2} alignItems="end">
            <Grid item sm={12} lg={6}>
              <img src="/assets/image/img-web-function.png" style={{ width: "100%" }} />
            </Grid>
            <Grid item sm={12} lg={6}>
              <WebFunctions />
            </Grid>
          </Grid>
          <div className="go-test">
            <Link href={link || "/"} underline="none" className="btn-go-test"><span className="btn-content">{textBtn || "DO TEST ON OUR WEBSITE NOW!"}</span> <img src="/assets/image/icon-btn.png" /></Link>
          </div>
        </div>
        <div id="app-function">
          <h2 className="title-function">App Functions</h2>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={3}>
              <AppFunctions location={1} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <AppFunctions location={2} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <AppFunctions location={3} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <AppFunctions location={4} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Functions