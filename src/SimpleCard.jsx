import React, { Component, Fragment } from 'react';
import Description from './Description';
import  Image  from './Image';




  
  class SimpleCard extends Component {
     render() { 
          return (
          <Fragment >

            <div className='card'> 
            <Image/> 
            <Description/>
             
            </div>

          </Fragment>
  
            );
      }
  }
   export default SimpleCard;