import "./../App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className="tool-bar">
          <Typography variant="h6">Order App</Typography>
          <div className="tool-bar-actions">
            <Button color="inherit">
              <Link to="/" className="nav-link">
                Add User
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/order" className="nav-link">
                My Order
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
