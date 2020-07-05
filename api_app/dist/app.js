"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const body_parser_1 = __importDefault(require("body-parser"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const express_flash_1 = __importDefault(require("express-flash"));
const passport_1 = __importDefault(require("passport"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db/db");
const secrets_1 = require("./util/secrets");
const MongoStore = connect_mongo_1.default(express_session_1.default);
// Create Express server
const app = express_1.default();
// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(express_session_1.default({
    resave: true,
    saveUninitialized: true,
    secret: secrets_1.SESSION_SECRET,
    store: new MongoStore({
        url: db_1.mongoUrl,
        autoReconnect: true
    })
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use(express_flash_1.default());
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
// API keys and Passport configuration
const passportConfig = __importStar(require("./config/passport"));
/**
 * API examples routes.
 */
app.use("/api", require('./api/controllers/index'));
/**
 * OAuth authentication routes. (Sign in)
 */
app.get("/auth/facebook", passport_1.default.authenticate("facebook", { scope: ["email", "public_profile"] }, (res) => {
    console.log(res);
}));
app.get("/auth/facebook/callback", passport_1.default.authenticate("facebook"), (req, res) => {
    res.status(200).json(req.user);
});
app.get("/auth/logout", passportConfig.isAuthenticated, (req, res) => {
    req.logOut();
    res.status(200).json({ message: 'Successful logout' });
});
exports.default = app;
//# sourceMappingURL=app.js.map