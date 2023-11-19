import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      
      <Head>
     
      <Script
          type="application/javascript"
          id="chatbot"
        >
          {`
            window.tiledeskSettings= 
            {
                projectid: "64d8a9e400c4aa0013c97b0c"
            };
            (function(d, s, id) { 
                var w=window; var d=document; var i=function(){i.c(arguments);};
                i.q=[]; i.c=function(args){i.q.push(args);}; w.Tiledesk=i;                    
                var js, fjs=d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js=d.createElement(s); 
                js.id=id; js.async=true; js.src="https://chatbot.snsilos.com/widget/launch.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document,'script','tiledesk-jssdk'));
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
