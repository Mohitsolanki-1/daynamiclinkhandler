import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you are using React Router

const DynamicLinkHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to handle Dynamic Links
    const handleDynamicLink = async () => {
      const firebase = require('firebase/app');
      require('firebase/auth');
      require('firebase/dynamic-links');

      try {
        // Initialize Firebase if not already initialized
        if (!firebase.apps.length) {
          firebase.initializeApp({
            apiKey: 'YOUR_API_KEY',
            authDomain: 'YOUR_AUTH_DOMAIN',
            projectId: 'YOUR_PROJECT_ID',
            // Add other Firebase config options
          });
        }

        const isDynamicLink = await firebase.dynamicLinks().isLink(location.pathname);

        if (isDynamicLink) {
          // Handle the dynamic link, e.g., navigate to a specific route or perform an action
          const dynamicLinkData = await firebase.dynamicLinks().getLink(location.pathname);
          console.log('Dynamic Link Data:', dynamicLinkData);
          
          // Add your custom logic to handle the dynamic link here
          // For example, you might want to navigate to a specific route based on the dynamic link
          // or perform some other action within your app
        }
      } catch (error) {
        console.error('Error handling Dynamic Link:', error);
      }
    };

    // Call the function when the component mounts
    handleDynamicLink();
  }, [location.pathname]);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default DynamicLinkHandler;