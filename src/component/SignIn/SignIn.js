import React from 'react';
//import './SignIn.css';

const SignIn = ({onRouteChange}) =>{
  return (
    <article className="mw6 center bg-near-white br3 pa3 pa4-ns mv2 ba green bw3 shadow-5">
    <main className="pa4 green">
    
      <form className="measure green bg-near-white">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
            <input className="b--green pa2 input-reset ba bg-transparent hover-bg-green hover-white w-100" type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
            <input className="b--green pa2 input-reset ba bg-transparent hover-bg-green hover-white w-100 fw6" type="password" name="password"  id="password" />
          </div>
        </fieldset>
        <div className="">
          <input 
            className="green ph3 pv2 input-reset ba b--green bg-transparent grow pointer f4 dib fw8" 
            type="submit" 
            value="Sign in" 
            onClick={() => onRouteChange('home') } />
        </div>
        <div className="lh-copy mt3">
          <p onClick={() => onRouteChange('register') } className="f3 link dim green bold db fw8">Register</p>
        </div>
      </form>
      
    </main>
    </article>
  );

}

export default SignIn;