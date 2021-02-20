import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hardware from "./Page/Hardware";
import RestoPage from "./Product/Resto/RestoPage";
import Resto from "./Product/Resto/Resto";
import TokoPage from "./Product/Toko/TokoPage";
import Toko from "./Product/Toko/Toko";
import PosPage from "./Product/Pos/PosPage";
import Pos from "./Product/Pos/Pos";
import SchoolPage from "./Product/School/SchoolPage";
import School from "./Product/School/School";
import WebsitePage from "./Product/Website/WebsitePage";
import Website from "./Product/Website/Website";
import OfficePage from "./Product/Office/OfficePage";
import Office from "./Product/Office/Office";
import Alarm from "./Product/Alarm";
import Waiters from "./Product/Waiters";
import Kitchen from "./Product/Kitchen";
import Check from "./Product/Check";
import Footer from "./Plus/Footer";
import Contact from "./Page/Contact";
import OrderApp from "./Page/OrderApp";
import Hello from "./Page/Hello";
import Code from "./Page/Code";
import About from "./Page/About";
import Webapp from "./Page/Webapp";
import OrderKasir from "./Page/OrderKasir";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Flash from "./Plus/Flash";
import "./Plus/Blitz.js";
import "./dark.css";
import "./style.css";
class App extends Component {
  render() {
    return (
      <Router>
        <Flash />
        <div className="container lead">
          <Route path="/" component={Hello} exact />
          <Route path="/welcome" component={Hello} exact />
          <Route path="/about" component={About} exact />
          <Route path="/sourcecode" component={Code} exact />
          <Route path="/webapp" component={Webapp} exact />
          <Route path="/aplikasirestoran" component={Resto} exact />
          <Route path="/aplikasirestoran/:name" component={RestoPage} />
          <Route path="/aplikasitoko" component={Toko} exact />
          <Route path="/aplikasitoko/:name" component={TokoPage} />
          <Route path="/mesinkasir" component={Pos} exact />
          <Route path="/mesinkasir/:name" component={PosPage} />
          <Route path="/office" component={Office} exact />
          <Route path="/office/:name" component={OfficePage} />
          <Route path="/aplikasisekolah" component={School} exact />
          <Route path="/aplikasisekolah/:name" component={SchoolPage} />
          <Route path="/pembuatanwebsite" component={Website} exact />
          <Route path="/pembuatanwebsite/:name" component={WebsitePage} />
          <Route path="/orderapp/" component={OrderApp} />
          <Route path="/orderpos/" component={OrderKasir} />
          <Route path="/contact/" component={Contact} />
          <Route path="/hardware/" component={Hardware} />
          <Route path="/alarm/" component={Alarm} />
          <Route path="/check/" component={Check} />
          <Route path="/waiters/" component={Waiters} />
          <Route path="/kitchen/" component={Kitchen} />
        </div>
        <Footer />
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
