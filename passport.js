import passport from "passport";
import GithubStrategy from "passport-github2";
import FacebookStrategy from "passport-facebook";
import User from "./models/User";
import {
  gitHubLoginCallback,
  facebookLoginCallback
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4252${routes.gitHubCallback}`
    },
    gitHubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `http://localhost:4252${routes.facebookCallback}`
    },
    facebookLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
