import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, NewRoom, Room, AdminRoom } from "@/pages";
import { AuthContextProvider } from "@/contexts";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default Routes;