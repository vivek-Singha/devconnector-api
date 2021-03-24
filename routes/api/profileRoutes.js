const router = require("express").Router();

//* @route   Get api/profile
//* @desc    Test Route
//* @access  Public
router.get("/", (req, res) => {
  res.send("profile route");
});

module.exports = router;
