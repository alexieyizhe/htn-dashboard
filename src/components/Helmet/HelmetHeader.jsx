/* --- Packages and Components --- */
import React from 'react';
import Helmet from 'react-helmet';

/* --- Images & Other Assets --- */
import Favicon from '../../../static/favicon_blue.png';


export default () => (
  <Helmet>
    <title>Hack the North</title>
    <meta
      name="description"
      content="A dashboard for Hack the North Applicants."
    />
    <link
      rel="icon"
      href={Favicon}
      sizes={['16x16', '32x32', '64x64', '128x128']}
      type="image/png"
    />
  </Helmet>
);
