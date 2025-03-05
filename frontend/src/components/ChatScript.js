import { useEffect } from 'react';

function ChatScript() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://js.puter.com/v2/";
        script.async = true;
        script.onload = () => {
            window.puter.ai.chat("What are the benefits of sleeping?").then(response => {
                window.puter.print(response);
            });
        };
        document.body.appendChild(script);
    }, []);

    return null;
}

export default ChatScript;