# iPhone Eshop
​
Based on the data array below, you need to build the homepage of an eshop selling iPhones using React.
​
​
## Tasks
​
1. Build the homepage as a React Component. It should contain all the states and the functions containing the state
2. Build a header for the eshop. It should contain:
   1. a company logo
   2. 4 menu items (Home, Categories, Deals, Contact)
   3. an input search box along with a button
   4. a cart icon along with the number of prodcuts inside it. Default value is 0
​
3. Build a product card. It should contain:
   1.  Product name
   2.  Product Image
   3.  Product price
   4.  Average Rating
   5.  "add to cart" button
   
   Once the button pressed the number at the cart icon at the header should increase by one.
​
4. Build a card container component. It should contain: 
   1. a title at the top
   2. products cards
   The title should be rendered at the top left corner
   If the products cover more than the page width then a horizontal scrollbar should be shown.
​
​
5. Using the card container component add to the home page a top selling products component with title "Best Sellers"
6. Using the card container component add to the home page the most popular products (best average) with title "Most Popular"
7. Using the card container component add to the home page all products with title "All Products"
8. When the user types some text in the search input element at the header, all product containers should not be shown except the one with all the products. This component should render only the products that their name or description contains the search text
​
9. Modify the product card and render the first 100 characters of the product description just below the product image
10. Add a button above the "All Products" component which toggles the rendering of the all products between horizontal scroll and with flex-wrap ;)
​
​
## Tips
​
   Kindly note that the following are just recommendations and not instructions.
​
 - 1. The products should be an array contained in a state.
 - 2. The number inside the cart should be connected to a state that holds the number of products in the cart
 - 2. When a product is being added to the cart, then 
 - 2. There should be a function to handle the onChange event of the input element. (Just an idea: store the text in a state). 
 - 4. The Product container component should have a title and a products property. The title should be used to display the title e.g. "Best sellers"
 - 8. You could try to chain the .filter method with the map method. The filter criteria should be the search text. The map method should return some html markup as usual.
 
 # iPhone Eshop Part II
​
Based on the eshop you have already constructed, implement the following:
​
## Tasks
​
1. Refactor your code from part I* in order to make it possible to add a router and the following menu:
   1. Home - redirects to home page
   2. Contact us - link to the contact page
   3. Add new product - link to the new product page
2. Create a contact page. It should contain a form with the following fields:
   1. Name
   2. A select element or radio group so the user can select salutation. Values:
      1. Mr.
      2. Ms.
      3. Other
   3. email
   4. A select element so the user can select the department that should receive the message. The available topics should be:
      1. Sales 
      2. Marketing
      3. Warehouse
      4. Order
   5. A Subject field
   6. A message textarea
   7. A send button
   8. When the user clicks the send button, you should render a 'thank you' modal window containing the information that the user has entered along with a 'thank you' message 
3. Create an add product page that contains the following fields:
   1. Product name
   2. Product description (textarea)
   3. Product Price
   4. Product category - A select element with the following options:
      1. Mobile phone
      2. Mobile accessory
      3. Smartwatch
   5. A checkbox that when checked indicates that the product is featured
   6. Product available colors - that is the colors that the product may available in. it could be available in more that one colors. It needs to be a check box group with the following options:
      1. Pink
      2. Red
      3. Black
      4. Sky blue
      5. White
      6. Golden
   7. A save button. When clicked the product should be added to the products array. (You should import it in this file as well beside the homepage)
​
​
​
* If the code from part I is not available that just create a header with menu items and implement the tasks as described here.
