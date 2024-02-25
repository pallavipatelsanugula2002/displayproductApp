->**HOW TO LAUNCH APPLICATION LOCALLY**

To run this application locally, you need to have Node.js and npm installed on your machine.

1. Clone this repository to your local machine using the following command:
   
   ->git clone <repository_url>
   
2. Navigate to the project directory:
   
   ->cd displayproducts
   
3. Install dependencies:
   
   ->npm install
   
4. Start the development server:
   
   ->npm start
   
5. Open your web browser and visit http://localhost:3000 to view the application.

->**STRUCTURE OF THE APPLICATION**

     displayproducts/
├── node_modules/
├── public/
├── src/
   ├── components/
   │   ├── auth/
   │   │   └── ContextProvider.js
   │   ├── Footer.css
   │   ├── Footer.js
   │   ├── Header.css
   │   ├── Header.js
   │   ├── Home.css
   │   ├── Home.js
   │   ├── Login.css
   │   ├── Login.js
   │   ├── ProductCard.css
   │   ├── ProductCard.js
   │   ├── ProductDetails.js
   │   ├── Products.css
   │   ├── Products.js
   │   └── Register.js
   ├── images/
   │   └── homePageImg.jpg
   ├── App.css
   ├── App.js
   ├── index.js

->**HOW TO USE THE APPLICATION** 

1. **Registration**: 
   -After launching the application , you can see the home page which contains login,
    register links in the header and shop now button in the body.
   -if you are a new user you can either click on register in header.
   -after filling in the required fields, click the register button and after successful registration, you will be redirected to login section.
    Note:Adding a new user will not add it into the server.It will simulate a POST request and will return the new created user with a new id.please consider not
    to use this credentials while logging in.

3. **Login**:
   - Navigate to the login page either by clicking on the "Login" link in header or shop now in the body of UI.
   - Enter your username and password.(You can use any user's credentials from dummyjson.com/users) 
                sample user credentials:1."username":"atuny0","password":"9uQFF1Lh"
                                        2."username":"hbingley1","password":"CQutx25i8r"
                                                                                                       
   - Click on the "Login" button to log in to your account.

4. **View Products**:
   - Once logged in, you can view all available products sorted by name and price.
   - Use the search bar to search for products by name or description.
   - Use pagination to navigate through the list of products.

5. **View Product Details**:
   - Click on a product to view detailed information, including its name, description, price, and image.
6.  **Logout**
   -to logout, click the logout button in header.



