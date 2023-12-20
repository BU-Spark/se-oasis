# Oasis Wellbeing - A Mental Health Application
## Project Description
Oasis is an interpersonal journaling application that uses the power of AI to link, connect, acquiesce, and remember your mental recollections and thoughts. Think of a guide that not only analyzes entries but provides a response that is much more palatable than Chat GPT. 

Oasis also provides the ability to give the AI context by allowing users to upload historical journaling content. Leveraging the content, the AI can create a “history” with that user improving the responses given on future queries or journal entries.

## Collaborators
| Name | Email | GitHub Username |
| :---: | :---: | :---: |
| Erwin Pimentel | erwinp@bu.edu | RevibeZ |
| Harshitha Tumkur Kailasa Murthy | harshutk@bu.edu | harshithatk33 |
| Vishwas Bhaktavatsala | vishwasb@bu.edu | vishwas21 |

## Quick Tour
 Deployment is done on Google Cloud Platform. Link to access the application : 

 Presentation Link to understand what is completed till date: 



## Tech Stack

| Component | Name |
| :---: | :---: |
| [Front End](#frontend) | React.js with Typescript |
| [Back End](#backend)| Hapi.js w/ Javascript |
| [Database](#database) | PostgreSQL |
| [Servers & Load Balancing](#servers) | Azure |
| [API Services](#api) | Moleculer.js |
| [Unit Testing](#unit) | Jest |
| [Monitoring & Performance Tools](#monitoring) | Grafana & JMeter |

### <a id="frontend">Front End</a>

**React.js with Typescript** provides a wide variety of control over components. It provides for enchanced code readability and ensures that errors are easier to catch at compile time rather than runtime.This combination overall will lead to fewer bugs, an improved developer experience, and better collaboration among developers.

### <a id="backend">Back End</a>

**Hapi.js with Javascript** allows for scalable and secure web applications with minimal overhead and full out-of-the-box functionailty. Features such as secure defaults, which block error messages that may leak information, alongside validation, caching, and authentication support make it an ideal choice. Hapi.js also boasts a robust plguin system that allows developers to add new features and fix bugs at a fast pace.

### <a id="database">Database</a>

**PostgreSQL** is a free and open source relational database management system. Its wide range of features alongside its reputation as a very stable and reliable system make it the ideal solution for managing large scale projects in even the most demanding environments.

### <a id="servers">Servers & Load Balancing</a>

**Microsoft Azure** offers very reliable and easy to use tools that make building and launching web applications a breeze.

### <a id="api">API Services</a>

**Moleculer.js** is a fast and powerful progressiv emicroservices framework for Node.js. It is extremely scalable with built in load balancers and fault tolerance. It offers a robust event-driven architecture model and a variety of additional features and development tools which make it a veyr useful implementation.

### <a id="unit">Unit Testing</a>

**Jest** is a very popular JavaScript testing framework which is developed and maintained by Facebook. It has many built in tools for testing all kinds of different code and even supports parallel test runs to maximize performance.

### <a id="monitoring">Monitoring & Performance Tools</a>

**Grafana and JMeter** are both open source software with extensive application monitoring utility. Grafana will allow us to visualize, alert on, and understand our metrics no matter where they are stored. JMeter will allow us to measure our performance and load-test our web applications.


### Folder Structure 

**Main components **

1. Client
2. Server


### (Front-End) Client structure :

<img width="249" alt="Screenshot 2023-12-16 at 2 36 45 PM" src="https://github.com/BU-Spark/se-oasis/assets/63293318/d31a6ed2-3ef5-400c-895b-a0e7adca58aa">

src: Folder has various sub folders inside it referring to different usages as explained below.
  _assests: This folder has all the images, logos for the application till now. In future the videos and photographs of the team could be added. As and when required can be used by giving reference of thid folder.  
  _components: This folder has all the fron-ent pages that is developed and deployed till now. Each page is made as a sub-folder and a index.js file is used to write the main code for that specific page and styles.css file is used to add stylesheet.
_config : This folder has the configurations from front-end to different middleware components.
_utils: This folder has the authentication for various components connected to the Login and SignUp pages. In future the authentication for maintaing app securely.

README.md - File to explain the client folders and their usage. 

### (Back-end) server structure: 
<img width="255" alt="Screenshot 2023-12-16 at 2 36 58 PM" src="https://github.com/BU-Spark/se-oasis/assets/63293318/ca0246f0-660c-4e63-bf9a-e71f76244aff">

_config : This folder has the configurations from back-end to different backend components like tge deployment credentials or authentication to DB.

src : Folder has various sub folders inside it referring to different usages as explained below.
_routes : 

_microservices: 

_utils: 

### core structure : This folder is used to get Event-driven architectural components into the framework.
Eventlisteners files are added for both Login and SignUp events that are completed till now. In future the same folder can be used to add the remaining events as and when required.

<img width="257" alt="Screenshot 2023-12-16 at 2 37 09 PM" src="https://github.com/BU-Spark/se-oasis/assets/63293318/a663273b-64e6-4397-acd1-1d403190348b">

### Project Files structure
This is used to maintain all the architecture level desicion daigrams or any documents related to the project.
<img width="257" alt="Screenshot 2023-12-16 at 2 37 16 PM" src="https://github.com/BU-Spark/se-oasis/assets/63293318/cfeac5a4-e5b7-47d0-abd2-1804b591a227">

README.md - File to explain the server folders and their usage. 

## Installation

{content}

