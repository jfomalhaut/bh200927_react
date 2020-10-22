import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNavbar from "../components/AppNavbar";
import { Container } from "reactstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import PostCardList from "../routes/nomalRoute/PostCardList";
import PostWrite from "../routes/nomalRoute/PostWrite";
import PostDetail from "../routes/nomalRoute/PostDetail";
import Search from "../routes/nomalRoute/Search";
import CategoryResult from "../routes/nomalRoute/CategoryResult";
import PromotionWrite from "../routes/nomalRoute/PromotionWrite";

const MyRouter = () => {
  return (
    <Fragment>
      <AppNavbar />
      <Header />
      <Container id="main-body">
        <Switch>
          <Route path="/" exact component={PostCardList} />
          <Route path="/post" exact component={PostWrite} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/post/:categoryName" exact component={CategoryResult} />
          <Route path="/promotion" exact component={PromotionWrite} />
          <Route path="/search/:searchTerm" exact component={Search} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default MyRouter;
