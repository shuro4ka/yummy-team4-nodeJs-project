const express = require("express");

const ctrl = require("../../controllers/ownRecipes");
const {
  validateBody,
  authentificate,
  uploadCloud,
} = require("../../middlewares");
const { controllersWrapper } = require("../../helpers");
const { schemas } = require("../../models/recipe");

const router = express.Router();

router.get("/", authentificate, controllersWrapper(ctrl.getAllOwnRecipes));
router.post(
  "/",
  authentificate,
  validateBody(schemas.recipe),
  uploadCloud.single("avatar"),
  controllersWrapper(ctrl.addOwnRecipe)
);
router.delete("/", authentificate, controllersWrapper(ctrl.removeOwnRecipe));

module.exports = router;
