import React, { Component } from 'react';
import Title from './Title';


 class Description extends Component {
     render() { 
          return (
             <div>
            <Title/>
            <p style={{color: 'white' , padding: '10px'}}  >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Magni aperiam eaque doloribus voluptatum?
                 Maiores vero doloribus consequuntur sint dolore, 
                 adipisci autem illo eaque pariatur corporis tenetur 
                 aliquid non quisquam animi!</p>
            </div>
  
            );
      }
  }
   
  export default Description;