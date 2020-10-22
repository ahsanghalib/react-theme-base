import React, { Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import Layout from "./components/Layout";

const Login = React.lazy(() => import("./pages/Login"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Groups = React.lazy(() => import("./pages/Groups"));
const GroupContentForm = React.lazy(() => import("./pages/GroupContentForm"));
const GroupDetail = React.lazy(() => import("./pages/GroupDetail"));
const Activities = React.lazy(() => import("./pages/Activities"));
const Settings = React.lazy(() => import("./pages/Settings"));

function App() {
  const location = useLocation();

  const routes = (
    <Switch>
      <Route path="/" exact component={Dashboard}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/siteGroups" exact component={Groups}></Route>
      <Route path="/siteGroups/:id" exact component={GroupDetail}></Route>
      <Route
        path="/siteGroups/:id/createContent"
        exact
        component={GroupContentForm}
      ></Route>
      <Route
        path="/siteGroups/:id/createContent"
        exact
        component={GroupContentForm}
      ></Route>
      <Route path="/activities" exact component={Activities}></Route>
      <Route path="/settings" exact component={Settings}></Route>
    </Switch>
  );

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            width: "100%",
            margin: "0 auto",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <ScaleLoader
            loading={true}
            color={"#02A7FF"}
            height={25}
            margin={3}
          />
        </div>
      }
    >
      {location.pathname !== "/login" ? <Layout>{routes}</Layout> : <Login />}
    </Suspense>
  );
}

export default App;
