# TokPay
A system that allows users to store and transfer money without any hassle.  

![TokPay](/assets/tokpay.PNG)

## Contributors
[Valencino Tan](https://github.com/whysilon)  
[Danzel Ong](https://github.com/DanzelOng)  

## Problem Statement
- Query Balance for a particular account  
- Transaction that debits an amount from an account and credits it to 1 or more account  
- Focus is to make this strongly consistent and performant.  
- For QueryBalance, we should be able to handle > 100K QPS (reads)  
- For Transaction, we should be able to handle > 5K QPS (writes)  
- The system needs to be built to handle single machine failure safely, without losing data consistency  

## Application Code
### Tech Stack
Front End: NextJS with ReactJS (Making use of Server-Side-Rendering to increase performance and decrease load time)  
Back End: MongoDB (Distributed database with in built sharding to increase QPS)  
Tools Used: NextAuth (to handle session tokens) and ChartJS (for clearer visualisation)  

## Landing Page
Users would first be greeted with a landing page which tells them the idea of this web application with a single glance. They can then choose to log in through our OAuth system. Upon successful log in, a session cookie which contains the access and refresh tokens as well as certain database details would be given to them. For every page that they navigate to in the dashboard, NextJS's getServerSideProps would then verify whether a valid session exists before giving them access.

![Landing](/assets/landing.gif)

## Top Up
Users can choose to top up their account balance through our system and their current balance would be reflected immediately.

![Topup](/assets/topup.gif)

## Pay
Users can choose to pay to multiple users at once by inputting a valid email address.

![Pay](/assets/pay.gif)

## Testing
Our team carried out load testing through locust and stored fake data in a cache for simulation. It proved to be faster as the RPS for writing with cache makes the requests to the server faster. The computer does not need to wait to generate the data but instead generates the data while the server is processing the previous request. In order to handle a high volume of transactions without losing data consistency and also built to handle single machine failure safely, we can implement load balancing and use a distributed database like MongoDB to store our transactions across multiple nodes.

## Limitations
Due to the 24 hour time limit set on us to finish this project, we didnt really manage to achieve what we wanted as we originally wanted to beautify the dashboard through the use of charts as well as a easily readable transaction table to reflect the user's transactions. We also did not manage to achieve a high number of QPS as it was very challenging to do so and hence we have just came up with the theory in order to solve this problem.

## Conclusion
Despite multiple challenges faced, my team and I have learnt a lot through this hackathon and have picked up key concepts such as load testing, frameworks and tools as well as creating a better user experience for all. Special thanks to NTU IEEE for organising this hackathon and we would come back stronger next year!
