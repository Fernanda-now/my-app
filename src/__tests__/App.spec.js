import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from '../App';


beforeEach(cleanup); // clean meeeeeeeeee!


describe ('<App/>' , ()=>
{
  it('renders the aplication',()=>{
    const {queryByTestid} =render(<App/>);
    expect (queryByTestid('application')).tobeTruthy(); 
    expect (queryByTestid('application').classList.contains('darkmode')).tobeFalsy();
  });

  it('renders the aplication using dark mode', ()=>{
    const {queryByTestid, } =render(<App darkModeDefault/>);
    //debug();debug
    expect (queryByTestid('application')).tobeTruthy(); 
    expect (queryByTestid('application').classList.contains('darkmode')).tobeTruthy(); 
  });
  

)};


 