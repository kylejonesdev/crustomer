# Crustomer
An open source pizza-ordering web application.

# Roadmap
- [x] Each customer can log in to a unique account.
- [x] Customers can setup accounts.
- [ ] A customer can choose a number of generic pizzas.
- [ ] A customer can choose a few different preset kinds of pizzas (cheese, pepperoni, supreme).
- [ ] Basic application styling.
- [ ] A customer can submit an order, edit an order, and cancel submitted orders.

# Setup
The following instructions assume you already have an IDE installed on your computer and know your way around MongoDB Atlas.

To get Crustomer running on your local machine, you will need to do the following:

1. Clone the repo to your computer.
2. Open a terminal in your IDE and cd to the directory in which you cloned the repo.
3. Run "npm install". This will download all the node modules needed to run the software.
4. Configure a .env file.
    1. The format should look something like the following:
        PORT = 2121
        DB_STRING = [MONGODB ATLAS STRING]
    2. The file should be saved in config/.env.
5. In your IDE terminal, run "npm start".
6. In a web browser, navigate to localhost:2121 (or whatever port you chose in your .env file).