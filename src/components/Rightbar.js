import { Button,Container,makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container:{
    paddingTop:theme.spacing(10)
  }
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
     rignt
    </Container>
  );
};

export default Rightbar;
