# Covid Hero

## Key Tools, Libraries, and Frameworks
Ionic Framework: An open-source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript/Typescript

Python and R: For building the machine learning and neural network framework

Angular: An application design framework and development platform

Firebase: Google’s mobile and web application development platform

Google Map API: For tracking the user’s location and calculating the distance between the user and COVID hotspot.

## Overview
The citizens of Indiana do not have a way of adopting and effectively using a one-stop-shop kind of news source that gives information on every aspect of COVID-19 for their area. The citizens of Indiana are currently only able to find any source of information through media outlets about COVID-19. People have to be careful when going out as they only have a mask for protection as they walk outside blindly. Our solution is an all-in-one app that keeps users up to date on the spread of Covid-19 while simultaneously encouraging them to make more well-informed decisions.

## Team Members
Shreedhar Pandey - (ProTeam, Project Manager, Software Engineer), Sophomore Computer Science, Mathematics, Business Administration @ Valparaiso University. I helped build the front and the back end of the application. I was responsible for taking the prototype and making an actual product out of it. I implemented the authentication system, settings, home page, and restaurants/businesses page. I integrated the app with Firebase as a backend and created the database and hosting. I ran weekly planning/coaching meetings where everyone agreed on a set of tasks for the week.

Akhil Vadlamudi - GoTeam. Senior at Indiana University. Majoring in Informatics and minoring in business. I assisted in helping create the logo for the application. I helped create the revenue model using white labeling. I also created a user persona so that we could show what a typical customer looks like.

Hunter Sylvester - GoTeam. Junior at Marian University. Majoring in Finance and Analytics with a minor in Accounting. I assisted in creating the environmental analysis. I created the Business Model Canvas and the Value Proposition summary to outline what our project will do and how it will work.

Mauminah Raina - ProTeam, Software Developer, Senior at Indiana University Purdue University Indianapolis, Majoring in BioComputing. I created the prototypes for the application and its features using user feedback and updated it as new ideas were added to the project. I also designed and helped to implement the UI and UX of the application. 

Sabrina Tarin Chowdhury - ProTeam, Software Engineer, Senior at Indiana University Purdue University Indianapolis, Majoring in Computer Science. I have proposed the idea of features ‘GPS Hotzone and Predictive Index’. I coded the GPS tracking and warning message generator, the COVID-19 color coding of Indiana counties. I also made the machine learning and neural network framework for predictive index and coded the corresponding graphical display section in the app.


## How did you decide on this customer segment, problem, and solution?
We decided to target younger teens and adults because research shows that they go out in public more often and are on their phones more. With them going out more they are the most likely to contract Covid-19 and this is why we are targeting them. The problem is that they don't know which areas are safe to be out in public. What our app will do is allow users to see hot-zones and steer clear from them to be safe. It also features a business rating system which will help people make smart decisions about where to eat based on the safety reviews.


## How did your team build and iterate on the solution?
To tackle the By working with the Go-Team, we concluded that:
- Our target audience’s most widely available resource was their smartphones
- There is currently no application on the ios or google play store which provides sufficient information to the user on the spread of Covid-19 
- If users are able to stay informed, they are more likely to make safer decisions (ex. Wearing masks)
- We began designing a prototype that would be designed for smartphone use, but would also be functional as a web application. While our target audience was relatively young, we wanted to create an interface that would be easy to navigate and would not overwhelm the user. 

- In order to give users’ an idea of the spread of Covid-19, we also designed a predictive index. This feature would use Covid data from past months in order to predicate the growth or decline of cases in the future. With Covid cases being predicted to increase, we  believe that this feature would encourage users to more diligently follow safety guidelines such as social distancing in order to slow the spread. 

- We also designed a user feedback system that would be aimed at encouraging users to submit their feedback on reopening businesses and their safety measures or lack thereof. This Covid Safety Review aims to drive a person’s daily usability of the application while also serving as an informational source which can encourage users to give their buisness to establishments who make an active effort to hinder the spread of Covid-19.

- Once a basic version of these features was implemented, brief user testing was conducted. Our feedback was mostly positive, with people agreeing that they would definitely benefit from such an app being on their smartphone. 

## Key Metrics 
- Number of interviews : 15
- User Tests: 8
- Number of intent signed : 15
- $ collected : 0.00

## Technical Architecture

### Predictive Index

<img width="487" alt="ch23" src="https://user-images.githubusercontent.com/56151022/159083553-db3860f1-0bd4-4b46-bac8-69f7aa2fdf65.png">

Figure : (a) ETS machine learning algorithm (b) ARIMA machine learning algorithm © Keras neural network used to predict COVID-19 cases in upcoming months

<img width="480" alt="ch22" src="https://user-images.githubusercontent.com/56151022/159083588-5749f049-bff8-4166-9b6c-9a2e1d0de462.png">

Figure : COVID-19 case prediction in upcoming months in Marion County

### GPS Tracker : 

The basic equation for calculating the distance (in miles) between two geographical points based on the latitude and longitude are defined as,

Distance, d = 3963.0 * arccos[(sin(lat1) * sin(lat2)) + cos(lat1) * cos(lat2) * cos(long2 – long1)]

Where, lat1 and long1 are the latitude and longitude of point1 and lat2 and long2 are the latitude and longitude of point2.

<img width="487" alt="ch21" src="https://user-images.githubusercontent.com/56151022/159083631-0363a99f-af38-4535-80ef-812ceb229c68.png">

Figure : GPS tracker algorithm (left) and corresponding warning (middle) and no warning message (right). The color scheme can also be changed in the app. The message is shown in two different app color schemes. 
 

### Key Tools, Libraries, and Frameworks

Ionic Framework : An open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript/Typescript

Python and R : For building the machine learning and neural network framework

Angular : An application design framework and development platform

Firebase : Google’s mobile and web application development platform

Google Map API : For tracking user’s location and calculating the distance between user and COVID hotspot. 

## If you had another 5 weeks to work on this, what would you do next?- 
- In our app, we only have a restaurant review section. We would like to include other business units like grocery stores, barber shops, beauty parlors under the business review section.
- Extend the app scopes for other US counties.
- The main challenge is to motivate people download and use the app. So we would like to design a COVID-19 related game (puzzle game creating COVID-19 awareness) and include in the app so that people can engage more with the app.
One of the main purpose of the app is to give a COVID-19 future prediction so that early measures can be taken. One of our original ideas was to create the predictive index based on zip codes so that we can divide the area into smaller segments and the prediction and GPS warning can be created based on smaller areas which would be more effective. If necessary the authority could have locked down small areas more easily. Due to unavailability of zip code based COVID data, we had to work on county based data. More time would have allowed us to contact the authority and request for zip code based data.


## Pictures

![ch](https://user-images.githubusercontent.com/56151022/159083007-77002b1e-81fc-49ea-96f7-a30b081730af.png)
![ch1](https://user-images.githubusercontent.com/56151022/159083009-99acc873-3938-4826-8103-61f1a6d72cc7.png)
![ch2](https://user-images.githubusercontent.com/56151022/159083010-674c55e0-10d2-49db-9ad3-74d903c0a002.png)
![ch3](https://user-images.githubusercontent.com/56151022/159083026-383971df-3efb-4e6b-80c5-b2f9eaf56c80.png)
![ch4](https://user-images.githubusercontent.com/56151022/159083027-e0a5db05-b0c8-47c6-a550-5f17b438d2eb.png)
![ch5](https://user-images.githubusercontent.com/56151022/159083029-59eee040-0dbf-472e-8bd4-f6c28fda21dc.png)
![ch6](https://user-images.githubusercontent.com/56151022/159083030-37696d35-2bee-46f8-933e-e14ddb676f33.png)
![ch7](https://user-images.githubusercontent.com/56151022/159083031-0aeb931c-cf44-4eb8-8d0f-e5dfa77060fc.png)
![ch8](https://user-images.githubusercontent.com/56151022/159083034-f2348a8f-d2cd-4abd-859e-3c60ba3419b0.png)
![ch9](https://user-images.githubusercontent.com/56151022/159083036-ddb49edb-7fed-4141-9112-0aa947c1a025.png)
![ch10](https://user-images.githubusercontent.com/56151022/159083038-8ed20abb-3c42-4121-8d99-7712a5078e81.png)
![ch11](https://user-images.githubusercontent.com/56151022/159083040-94943aa4-cb37-4bd9-a90d-93020a52fa63.png)
![ch12](https://user-images.githubusercontent.com/56151022/159083042-197c55d8-20b7-486e-9a2f-8213f7564d10.png)
![ch13](https://user-images.githubusercontent.com/56151022/159083043-437f4751-8aa9-4c4e-9081-458059b5598f.png)

