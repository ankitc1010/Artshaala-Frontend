// please follow the directory structure of contact.js
// Do you have anything else

// i dont have any other file right now
// so services.js should be there in two locations?

// Till now you got what I did right. yes

import React from "react";
import Head from "../components/head";
import ServiceRepair from "../components/page/ServiceRepair";
import Nav from "../components/Navbar";

//export default props => <ServiceRepair {...props} />;
// We are striving to make page .js files as simple as we can
// Which makes the whole application module in nature

const  Services = () => (
    <div>
      <Head title="Services" />
      <Nav />
      <ServiceRepair />
    </div>
  );
  export default Services;