import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import DialerSipIcon from "@material-ui/icons/DialerSip";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
const useStyles = makeStyles((theme) => ({
  container: {
    position:'sticky',
    top:0,
    paddingTop: theme.spacing(10),
    height: "100vh",
    color: "white",
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
     
    }
  },
  items: {
    display: "flex",
    alignItems: "center",

    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(2),
    },
  },
  icons: {
    marginRight: theme.spacing(1),
  },
  text: {
    
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.items}>
        <Home className={classes.icons} />
        <Typography className={classes.text}>Home Page</Typography>
      </div>
      <div className={classes.items}>
        <DialerSipIcon className={classes.icons} />
        <Typography className={classes.text}>Dialer Page</Typography>
      </div>
      <div className={classes.items}>
        <DeviceHubIcon className={classes.icons} />
        <Typography className={classes.text}>Device Page</Typography>
      </div>
      <div className={classes.items}>
        <DirectionsRunIcon className={classes.icons} />
        <Typography className={classes.text}>Directions Page</Typography>
      </div>
      <div className={classes.items}>
        <DonutSmallIcon className={classes.icons} />
        <Typography className={classes.text}>Donut Page</Typography>
      </div>
    </Container>
  );
};

export default Leftbar;
