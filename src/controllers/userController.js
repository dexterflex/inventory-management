import userModel from "../models/userModel.js";
import productModel from "../models/product.model.js";

export default class usersController {
    static register(req, res) {
        res.render("register", { error: null });
    }
    static postRegister(req, res) {
        let user = req.body;
        if (user.password !== user.confirmPassword) {
            return res.render("register", {
                error: "Password need to be same in both the fields.",
            });
        }
        let result = userModel.push(user.name, user.email, user.password);
        if (result) {
            return res.redirect("login");
        } else {
            return res.render("register", { error: "Already Registered " });
        }
    }
    static login(req, res) {
        return res.render("login", { error: null });
    }
    static postLogin(req, res) {
        let { email, password } = req.body;
        let result = userModel.find(email, password);
        if (result !== -1) {
            req.session.user_email = email;
            let products = productModel.get();
            return res.render("product", {
                products,
                user_email: req.session.user_email,
            });
        } else {
            return res.render("login", { error: "Credentials are wrong" });
        }
    }
    static logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Failed to destroy session');
            }
            res.redirect('/'); // Redirect to home or login page after logout
        });
    }
}
