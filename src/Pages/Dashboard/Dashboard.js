import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AddProducts from "../AdminDashboard/AddProducts";
import CreateAdmin from "../AdminDashboard/CreateAdmin";
import ManageAllOrders from "../AdminDashboard/ManageAllOrders";
import ManageProducts from "../AdminDashboard/ManageProducts";
import AdminRoute from "../Login/PrivateRoute/AdminRoute";
import MyOrders from "../UserInfo/MyOrders";
import Pay from "../UserInfo/Pay";
import Review from "../UserInfo/Review";
import DashboardHome from "./DashboardHome";

const drawerWidth = 240;

const Dashboard = (props) => {
  let { path, url } = useRouteMatch();
  const { user, logOut, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <div className="flex items-center justify-center pb-2">
        <NavLink
          to="/home"
          className="text-lg font-bold text-white bg-red-600 px-6 py-3"
        >
          Home
        </NavLink>
      </div>
      <Divider />
      <List>
        {admin ? (
          <Box>
            <Link
              className="py-2 px-3  w-full flex items-center"
              to={`${url}/manageOrder`}
            >
              Manage Orders
            </Link>
            <Link
              className="py-2 px-3  w-full flex items-center"
              to={`${url}/manageProduct`}
            >
              Manage Product
            </Link>
            <Link
              className="py-2 px-3  w-full flex items-center"
              to={`${url}/addProduct`}
            >
              Add Product
            </Link>
            <Link
              className="py-2 px-3  w-full flex items-center"
              to={`${url}/makeAdmin`}
            >
              Make Admin
            </Link>
          </Box>
        ) : (
          <div>
            <Link
              className="py-2 px-3  w-full flex items-center"
              to={`${url}/myOrder`}
            >
              My Orders
            </Link>
            <Link
              className="py-2 px-3  w-full flex items-center"
              to={`${url}/review`}
            >
              Review
            </Link>
            <Link
              className="py-2 px-3  w-full flex items-center"
              to={`${url}/pay`}
            >
              Pay
            </Link>
          </div>
        )}
        <button
          className="py-2 px-3  w-full flex items-center"
          onClick={logOut}
        >
          Logout
        </button>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)`, background: "#e83a3b" },
          ml: { lg: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Hello {user?.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={`${path}`}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrders />
          </Route>
          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/pay`}>
            <Pay />
          </Route>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrder`}>
            <ManageAllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <CreateAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProducts />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

export default Dashboard;
