import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Hoc/Layout'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import Services from './Components/Services/Services'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/UI/NotFound'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/services" exact component={Services} />
        <Route path="/about_us" exact component={AboutUs} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;