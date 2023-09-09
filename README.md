Contact Management Backend	

A Node.js backend API for managing contacts.  

Feature 
For contacts : 
1. Create new Contact
2. Delete Contact
3. Update Contact
4. Update Individual Contact
5. Get all contacts

For User :
1. Register new user
2. Login with authorization

Tecnology Stack :  

1.Node.js  
2.Express.js  
3.MongoDB(Database)  
4.JWT for authorization  

Prequisites:  

1.Node.js and npm installed  
2.Mnogodb installed and running

API Endpoints  

1.Create Contact       
    . Url :"/api/contacts/"  
    . Method:POST  
    . Body:{
            "name":string,
            "email":string,
            "phone":string 
            }
          
2. List Contacts  
  . Url :"/api/contacts/"  
  . Method:GET  
  . Rsponse:200  

3. Update Contact  
  . Url :"/api/contacts/{:id}"  
  . Method:PUT  
  . Body:{
          "name":string,
          "email":string,
          "phone":string
   }
   
4.Delete Contact  
  . Url :"/api/contacts/{:id}"  
  . Method:PUT  
  . Rsponse:200

5. Register User  
   .Url:"api/users/register"  
   . Method:POST  
   . Body:{
          "username":string,
          "email":string,
          "password":string
   }
   
6. login User  
   .Url:"api/users/register"  
   . Method:POST    
   . Body:{
          "email":string,
          "password":string
   }

7.Get Authorized user detail  
  .Url:"api/users/current"  
  . Method:POST    
  . header:{
         "Authorization":Accesstoken(Generated during login)
   }  

Setup & Installation  
1. Clone the Repository : git clone https://github.com/devanshi19/contact-management-backend.git  
2. Install Depedencies
3. Create a .env file in the root directory with the following variables:
     DB_CONNECTION_STRING=mongodb://localhost:27017/contactManagement
     SECRET_KEY=your_jwt_secret_key
4.Start Server : npm start


   
  
 








