"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// API keys and Passport configuration
const passportConfig = __importStar(require("../../config/passport"));
const router = express_1.Router();
// Public routes
router.use('', require('./example.controller'));
// Restricted routes
router.use('/restricted', passportConfig.isAuthenticated, require('./restricted.controller'));
router.use('**', (req, res) => {
    res.status(404).json({
        errors: ['Api endpoint does not exist']
    });
});
module.exports = router;
//# sourceMappingURL=index.js.map