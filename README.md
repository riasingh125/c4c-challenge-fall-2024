This is the starter code for Code4Community's technical challenge for Fall 2024. 
For more detailed information about each of the parts of this starter code, check out the [`INFO.md`](INFO.md) file

## Setup Instructions
1. Ensure you have Node.js installed
2. close the repository
3. in the terminal, type npm run dev and hit enter.
- navigate to both the backend and frontend folders (cd) and npm install for all dependencies 
4. http://localhost:3000 -> frontend
5. http://localhost:4000 -> backend


## High level overview
The application is designed to manage partners and organizations, where users can view, add, and deelete partner organizations. All users can see the same updated information, provided they run the same http://localhost:3000 link

Users can view the name, logo, description, and if they are active or not on the dashboard. Users can also add the above details, and delete organizations. All of this data is stored centrally, in a mongoDB database, so all additions and deletions are reflected across all user sessions

The bonus feature of this application is a search bar, where users can search based on title or description for a specific partner.

## Design choices

- MongoDB: chosen due to it's scalability to handle many partner organizations and ability to handle JSON data for easier data exchange

- Add partner form: chosen to be a minimizable button to ensure the UI is clean and uncluttered. Users can view the partners, without being distracted by the larger add partner form. It also allows users to access it quickly, when needed

- React was chosen for the frontend due to developers experience and component based structure

- Javascript was chosen just based on experience

- RESTful API was chosen for a standard and easy way of communication between the client and server

## Short reflection
- This was my first time using MongoDB, mainly because I hadn't downloaded the shell, so I was never able to use it. It proved to be extremely simple to use and a great UI for beginners. I also learned about writing the tests, and I would have implemented those much sooner.  I ran into a few issues during this project. The first was git not linking properly; thus, pushing was an impossible task, until I stumbled across a very helpful Stack Overflow article! Unfortunately, that is why there aren't more branches- I had to do the entire basic setup without a single commit or push. Additionally, I had aimed to implement authentication and translation (under the translation branch). The frontend for translation worked, with the component being where I needed it to, but it failed in the backend with a 500 internal error. I also tried role-based authentication, using a new library Redux. Both of these took the bulk of my time. There were so many errors, particularly in the backend, that provided to be difficult to solve. For authentication, if I had more time or do-over, I would stick with Cognito because that's what I've used before. I chose authentication because of how overlooked of a feature it is, but actually is quite difficult to implement. I also thought it would be a fun challenge to try a different tool for authentication. I chose translation because, after working on a chatbot for one of the best paratransit services in the US (the RIDE), the need for accessibility and equity is important to me! Apart from those, I was able to implement the search bar, and chose to do so because of the enhanced user accessibility. It's a small, but mighty feature! If I had more time, I would have implemented a few more features, and more robust error handlings/testing. I would have also deployed it. I tried using github pages, but it is still linked to a past project. Ultimately, this was a super exciting project, where I was able to learn about so many new libraries and frameworks!
