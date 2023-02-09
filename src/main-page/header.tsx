import React, {useCallback, useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Home as HomeIcon, Movie as MovieIcon} from '@material-ui/icons';
import {useHistory} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";
import {Button} from "@material-ui/core";
import Keycloak from "keycloak-js";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontStyle: "oblique",
    },
  }),
);

export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const {keycloak} = useKeycloak();
  const [profile, setProfile] = useState<Keycloak.KeycloakProfile>();

  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak]);

  useEffect(() => {
      if (keycloak?.authenticated && !keycloak?.profile) {
        keycloak.loadUserProfile()
          .then(setProfile)
          .catch((e) => console.log(e));
      }
    }
    , [keycloak, keycloak.authenticated, keycloak.profile, keycloak.token])

  function goRandom() {
    history.push("/random")
  }

  function goHome() {
    history.push("/")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={goHome}>
            <HomeIcon/>
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit"
                      onClick={goRandom}><MovieIcon/></IconButton>
          <Typography variant="h6" className={classes.title}>
            My Movie Collection
          </Typography>
          {keycloak?.authenticated ?
            <Typography variant="h6">Hello, {profile?.firstName}</Typography> :
            <Button variant="outlined" onClick={login}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
