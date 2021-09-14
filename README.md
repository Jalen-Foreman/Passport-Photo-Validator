# Passport-Photo-Validator
A serverless app that utilizes React.js for the frontend, that verifies if the photo is a person or not. This React.js application is publically hosted on AWS S3. Through the React application, the user chooses their image file which then gets encoded in base64. This data is posted through a axios call which pings AWS API Gateway. AWS API Gateway then pings AWS Rekognition to obtain data on the image file. If the file contains valid facial data, my React application verifies the photo.

# Website hosting on AWS S3
http://passportphotovalidator.s3-website-us-east-1.amazonaws.com/

# Lambda Function
<img width="790" alt="Screen Shot 2021-09-14 at 3 35 30 PM" src="https://user-images.githubusercontent.com/78430591/133322424-d6a52844-9f57-4b38-aafe-05e41a74182c.png">

# Technologies Used

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- AWS API Gateway ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
- AWS S3  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
- AWS Lambda  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
- AWS Rekognition ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
## Wireframe

<img width="766" alt="Screen Shot 2021-09-14 at 3 37 41 PM" src="https://user-images.githubusercontent.com/78430591/133322689-9c0aad67-e97a-4428-89c3-fa2f19bf683c.png">


### Development

- VS Code
- Google Chrome + Developer Tools
