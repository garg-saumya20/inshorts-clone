import {Box,makeStyles} from "@material-ui/core";
import Header from "./components/Header"
import InfoHeader from "./components/InfoHeader";

const useStyles = makeStyles({
  container:{
    marginTop: 110,
    width: '59%',
    margin: '0 auto'
  }
})

function App() {
  const classes =useStyles();
  return (
    <Box>
    <Header/>
    <Box className={classes.container}>
    <InfoHeader />
    </Box>
    </Box>
  );
}

export default App;
 