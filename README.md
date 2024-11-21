# Nomad's Land 🌿🌍
An immersive eco-adventure platform for nature enthusiasts.


## Purpose 🌱

Nomad's Land is an eco-adventure blog website dedicated to promoting sustainable travel experiences. It allows users to explore detailed information on eco-friendly adventures, such as mountain treks and ocean dives, while encouraging responsible tourism. With features like expert consultations, user profiles, and interactive tools, it fosters community engagement and makes it easier for users to plan their next eco-conscious journey. By combining education with accessibility, Nomad's Land aims to inspire a deeper connection with nature and a commitment to environmental conservation.


## Key Features 🚀

1. **Dynamic Navigation**  
   - Interactive navbar with a responsive design that includes the website name, links to Home, Profile, and Login/Sign Up.  
   - Displays the user's profile photo if logged in, with a dropdown menu for "Update Profile" and "Logout" options.  

2. **Homepage Features**  
   - **Banner**: A visually engaging slider implemented using Swiper.js.  
   - **Adventure Explorer**: Showcases 8 eco-adventure options (e.g., Mountain Treks, Ocean Dives) dynamically fetched via React Router loaders.  
   - **Newsletter Section**: Displays a personalized toast message upon submission with a name derived from the email address.  
   - **Travel Insurance Section**: Features vibrant illustrations sourced from Undraw.  

3. **Authentication**  
   - Login and Sign Up pages are integrated with Firebase authentication.  
   - Login features email/password authentication, Google login, and a "Forgot Password" option.  
   - Password validation ensures strong security with specific criteria (uppercase, lowercase, minimum length).  
   - Redirect functionality automatically takes users back to the intended private route or homepage post-login.  

4. **Profile Management**  
   - Profile page displays user details, including name, email, and profile picture.  
   - Update Profile page allows users to edit their name and profile image. Changes sync seamlessly with Firebase.  

5. **Adventure Details**  
   - Displays detailed information and visuals about each adventure.  
   - "Talk with Expert" button connects users to Google Meet during consultation hours (10 AM–8 PM) or displays a modal with timing information outside these hours.  

6. **Error Handling**  
   - A custom error page with a "Go to Homepage" button ensures graceful navigation when accessing unknown routes.  

7. **Animations and Enhancements**  
   - Smooth scroll animations across the site powered by the AOS package.  
   - Footer includes social media icons that open links in a new tab.  

This thoughtfully designed application combines functionality with user experience to create a seamless and interactive eco-adventure platform.
## Live Website Link
- https://nomads-land.surge.sh/

## Framework and NPM Packages 📦  

This project leverages the following frameworks and npm packages to enhance functionality and user experience:  

1. **React**: Core framework for building the user interface.  
2. **React Router**: For seamless navigation and dynamic routing.  
3. **Tailwind CSS**: A utility-first CSS framework for efficient styling.  
4. **DaisyUI**: Pre-styled components for a consistent and elegant design.  
5. **React Icons**: A library for integrating scalable vector icons.  
6. **AOS (Animate on Scroll)**: Provides smooth scroll animations.  
7. **Swiper.js**: Enables a responsive and customizable slider for the homepage.  
8. **React Hot Toast**: Displays toast notifications for user feedback.  
9. **React Spinner**: Adds stylish loading indicators during asynchronous operations.  
10. **Date FNS**: Handles date and time operations efficiently.  