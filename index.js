import express from "express";
import productController from "./src/controllers/product.controller.js";
import path from "path";
import ejsLayouts from "express-ejs-layouts";
import uploadFile from "./src/middlewares/productUpload.js";
import usersController from "./src/controllers/userController.js";
import { productValidator } from "./src/middlewares/productValidator.js";
import { auth } from "./src/middlewares/auth.js";
import session from "express-session";

// express server
const server = express();

// sesssion middleware
server.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Set the view engine to EJS
server.set("view engine", "ejs");

// Set the directory where the template files are located
server.set("views", path.join(path.resolve(), "views"));

// Use express-ejs-layouts
server.use(ejsLayouts);

// Middleware to serve static files from the 'public' directory
server.use(express.static(path.join(path.resolve(), "public")));

// Use urlencoded middleware to parse URL-encoded data
server.use(express.urlencoded({ extended: true }));

// instance of productController
const product = new productController();

// Route to serve the HTML file
server.get("/", auth, product.getProducts);

server.get("/new", auth, product.showForm);

server.post(
  "/",
  auth,
  uploadFile.single("image"),
  productValidator,
  product.addProduct
);

server.get("/update/:productid", auth, product.update);
server.post(
  "/post-update",
  auth,
  uploadFile.single("image"),
  productValidator,
  product.postUpdate
);

server.post("/delete/:id", auth, product.delete);

server.get("/register", usersController.register);
server.post("/register", usersController.postRegister);

server.get("/login", usersController.login);
server.post("/login", usersController.postLogin);

server.get('/logout', usersController.logout)

const PORT = 3000;
server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running on post", PORT);
  }
});
