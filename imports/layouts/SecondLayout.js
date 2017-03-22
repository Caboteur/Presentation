import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';



export const SecondLayout = ({ content }) => (
 <div>
<div className="header"></div>
   <div className="second-layout">
     <div id="content" className="ui container">
         {content}
     </div>
   </div>
    </div>
 );
