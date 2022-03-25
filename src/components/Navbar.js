import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  Button,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      // backgroundColor: theme.palette.secondary.main,
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      //    backgroundColor: theme.palette.secondary.main,
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width:'70%'
    },    
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    alignItems: "center",
   
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  cancle:{
      [theme.breakpoints.up("sm")]:{
          display:'none'
      }
  }
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Sagar samanta
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Sagar{" "}
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search…" className={classes.input} />
          <Cancel className={classes.cancle} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6f1TEt2umBEnBStuEAIHnuGRP3qGjmdyug&usqp=CAU"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
