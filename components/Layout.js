import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Share from '../components/Share';
import Footer from '../components/Footer';
import CookieConsent from "react-cookie-consent";

const Layout = props => {
	
	return (
    	<div className="content-wrapper">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>				
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#eb000f"/>
				<meta name="msapplication-TileColor" content="#000000"/>
				<meta name="theme-color" content="#ffffff"/>
				<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.12.0/css/all.css" integrity="sha384-ekOryaXPbeCpWQNxMwSWVvQ0+1VrStoPJq54shlYhR8HzQgig1v5fas6YgOqLoKz" crossorigin="anonymous"/>
			</Head>
			<noscript>
				<div className="noscript">F1 Calendar works best with Javascript Enabled.</div>
			</noscript>
			<Header showOptions={props.showOptions} showCalendarExport={props.showCalendarExport} year={props.year} />
			<div className="main-content">{props.children}</div>
			
			<Footer />
			
			<CookieConsent
			    location="bottom"
			    buttonText="Great!"
			    cookieName="f1cal"
			    style={{ background: "#0E5143" }}
			    buttonStyle={{ color: "white", background:"#1a8b73", fontSize: "13px" }}
			    expires={150}
			>
			    This website uses cookies to enhance the user experience.
			</CookieConsent>
	  
	  
      <style jsx global>{`
	    @font-face{ 
			font-family: 'LeagueSpartan';
		    src: url('/fonts/leaguespartan-bold-webfont.woff2') format('woff2'),
		         url('/fonts/leaguespartan-bold-webfont.woff') format('woff');
		}
	      
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        html {
          height: 100%;
        }

        body {
          margin: 0;
          font-size: 14px;
          line-height: 1.7;
          font-weight: 400;
          background: #000;
          color: #fff;
          font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue',
            'Lucida Grande', sans-serif;
          text-rendering: optimizeLegibility;
          height: 100%;
        }
        
        
	    h1 {
		    font-size:16px;
		    font-family: 'LeagueSpartan';
		    text-transform:uppercase;
		    letter-spacing: 3px;
		    font-display: swap;
	    }
	    
	    h2 {
			font-size:11px;
			text-transform:uppercase;
			letter-spacing: 2px;
			font-size: 11px;
			font-family: 'LeagueSpartan';
			font-display: swap;
	    }
        
	    h3 {
		    font-size: 20px;
		    text-transform:uppercase;
			font-family: 'LeagueSpartan';
			font-display: swap;
	    }

        a {
          color: #353535;
          text-decoration: none;
        }

        a:hover {
          color: #151515;
        }

        p {
          margin: 0 0 10px;
        }
        
        p a {
        	color: #1a7b60;
        }
        p a:hover {
        	color: #31AD8B;
        }

        .btn {
          background: #111;
          padding: 12px 24px;
          color: #fff;
          font-size: 18px;
          border: 0;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .noscript {
	     	padding: 5px 0;
	     	text-align:center;   
	     	background: #000000;
        }

        /* Layout */

		.content-wrapper {
			padding-bottom:16px;
		}

        .main-content {
	        max-width:1000px;
	        margin: 0 auto;
	        padding: 0 16px;
        }
        
        @media screen and (max-width: 500px) {
			.main-content {
				padding: 0 8px;
			}
		}
      `}</style>
    </div>
  );
};

export default Layout;