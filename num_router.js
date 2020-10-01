const router = require("express").Router();

router.get("/:num", (req, res, next) => {
    let num = req.params.num;
    console.log(num);
    next();
})

module.exports = router;