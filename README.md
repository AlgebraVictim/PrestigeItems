# PrestigeItems - game items and games eCommerce Application

PrestigeItems is an eCommerce application built on AngularJS and NodeJS as a project for the SoftUni Angular Course. It's purpose is to provide different types of items/games. The application also provides admin functionality where everything can be easily maganged.

The application has three levels of accessibility: guest user, administrator and registered user

## Routes
| Route  | Description | Access Level |
| ------------- | ------------- | ------------- |
| /  | Home Page  | All users |
| /items  | Shop Page  | Registered only |
| /users  | All registered users page  | Administrator |
| /items/details/:id  | Page with details of the selected item  | Registered only |
| /cart  | Current user's cart  | Registered only |
| /purchases  | Current user's orders  | Registered only |
| /items/create  | All pending orders  | Registered only |
| /items/edit/:id  | Edit page for the selected item  | Registered only |
| /login  | Login page  | Guests only |
| /register  | Register page  | Guests only |
    
The already logged in user is authenticated to not only able to see the items in the items section, he is able to add unlimited quantity of items in his Cart, after successful checkout he will receive the activation key of the item. If you add an item in your Cart by mistake, you can remove it.

Administrator has full accessibility, he can add items, edit them if something changes such as value etc... He can see a page with all registered users.

## Usage

**Home page**

route: '/'

Just a welcome page.

**Items**

route: '/items'

A page with two type of items: items and games.

**Single item/game details page**

route: '/item/details/:id'

A page displaying the selected item's details.

**Cart page**

route: '/cart'

A page displaying all items that have been added to the cart, you can remove items or just click the 'Checkout' button and the magic happens.

**User orders page**

route: '/purchases'

A page displaying all orders, made by the current user. If all went well, you will hate the item's activation key.

**Create item/game page**

route: '/item/create'

A page where only the logged in user can create items, while choosing between two types.

**Edit item/game page**

route: '/item/edit/:id'

A page where only the creator of the item can modify the current selected item.

**All registered users page**

route: '/users'

A page displaying all registered users, information about them.

**Login page**

route: '/login'

A login page, nothing special.

**Register page**

route: '/register'

A register page, nothing special, the design kills tho. :)

## Run the application

Download the code from github, extract the zip file with WinRar or other PAID software. For both folders you have to open terminal and write: 

    npm install
    
To start the Back-End part, you have to write one more command: You have to contact me for the Back-End part, nothing is free in this life :)

    node index
    
The last thing you have to do is to write this command to start the Front-End part and the site will appear on the browser:

    ng serve --open or ng serve. The website will wait you on http://localhost:4200
