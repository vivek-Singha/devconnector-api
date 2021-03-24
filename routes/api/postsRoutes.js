const router = require("express").Router();

//* @route   Get api/Profile
//* @desc    Test Route
//* @access  Public
router.get("/", (req, res) => {
  res.send("posts route");
});

module.exports = router;
