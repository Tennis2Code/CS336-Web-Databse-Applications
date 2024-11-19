Conference Website Project: README

Overview

This project is a fully functional conference website designed for a fictional two-day tennis conference. The site includes multiple interconnected pages, interactive features, and administrative tools. 
It incorporates concepts like cookies, local storage, and Python scripting for dynamic content generation. 

Website Structure
Homepage: Serves as the entry point with links to all other pages.
Professional Page: Contains a link to the résumé page and focuses on professional conference details.
Résumé Page: Linked back to the professional page.
Administrative Page: Provides tools for site management, including generating nametags for attendees.
Additional Pages: Include topics of interest, ensuring the site meets the conference's goals.

Features

1. Registration with Cookies
Users can register for the conference, and their information is stored in a cookie.
When users revisit the registration page and provide their conference ID, the system:
Pre-fills the registration form with stored information if available.
Displays an appropriate message if no information is found.

2. Polling with Local Storage
A voting poll allows users to vote for specific options.
Votes are:
Stored in the browser's local storage.
Retrieved, updated, displayed, and saved after every vote.
The system maintains a running tally of votes, persisting across sessions.

3. Nametag Generation
Every conference attendee must have a personalized nametag.
The Python program:
Reads attendee data from a CSV file.
Merges the data with an HTML template to generate a complete nametags page.
Outputs the generated HTML page into the website directory.

4. Administrative Page
Includes tools for managing the conference website.
Provides a link to the dynamically generated nametags page.

Technologies Used

1. HTML5: For structuring the site and pages.
2. CSS3: For styling, including responsive layouts.
3. JavaScript: For interactive features like cookies and local storage.
4. Python: For backend tasks like nametag generation.
5. CSV: To store and process registrant data.

Author

Selinde Tatum
CS324 
Tennis2Code
