const router = require('express').Router();
const Calorie = require('../models/calorie.model');



router.route("/").get((req, res) => {
    Calorie.find()
        .then((meals)=>{res.send(meals)})
        .catch((err)=>{res.status(404).json({error:err})});
})

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const calories = req.body.calories;
    const date  = Date.parse(req.body.parse);

    const add = new Calorie({
        username,
        description,
        calories,
        date
    })

    add.save()
        .then(()=>{res.status(200).json({message:"Calorie added successfully."})})
        .catch((e)=>{res.status(404).json({error:err})});

})


router.route("/:id").get((req, res) => {
    const id = req.params.id;
    Calorie.findById(id)
    .then((calories) => res.json(calories))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
    const id = req.params.id;
    Calorie.findByIdAndDelete(id)
        .then(()=>{res.status(200).send('Deleted successfully')})
        .catch((e)=>{res.status(404).json({error:err})})
})

router.route("/update/:id").post((req, res) => {
    const id = req.params.id;

    Calorie.findById(id)
        .then((result=>{
            result.username = req.body.username;
            result.description = req.body.description;
            result.calories =req.body.calories;
            result.date  = Date.parse(req.body.parse);
            Calorie.save()
                   .then(()=>{res.send("Successfully updated")})
                   .catch((e)=>{res.status(404).json({error:err})})
        }))
        .catch((e)=>{res.status(404).json({error:err})})
})

module.exports = router;