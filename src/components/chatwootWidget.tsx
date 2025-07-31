import React from 'react';

const ChatwootWidget = () => {
	const scriptContent = `
    var _smartsupp = _smartsupp || {};
    _smartsupp.key = 'a0cbbb226071697dd2de52fe6fb1b4f6653cd054';
    window.smartsupp||(function(d) {
      var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
      s=d.getElementsByTagName('script')[0];c=d.createElement('script');
      c.type='text/javascript';c.charset='utf-8';c.async=true;
      c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
    })(document);
  `;

	return (
		<>
			<script
				type='text/javascript'
				dangerouslySetInnerHTML={{ __html: scriptContent }}
			/>
			<noscript>
				{' '}
				Powered by{' '}
				<a
					href='https://www.smartsupp.com'
					target='_blank'
				>
					Smartsupp
				</a>
			</noscript>
		</>
	);
};

export default ChatwootWidget;
