import { add, get, getAll } from  '../memory/storage.js';

const recieptController = {};

// {
//     "retailer": "Target",
//     "purchaseDate": "2022-01-01",
//     "purchaseTime": "13:01",
//     "items": [
//       {
//         "shortDescription": "Mountain Dew 12PK",
//         "price": "6.49"
//       },{
//         "shortDescription": "Emils Cheese Pizza",
//         "price": "12.25"
//       },{
//         "shortDescription": "Knorr Creamy Chicken",
//         "price": "1.26"
//       },{
//         "shortDescription": "Doritos Nacho Cheese",
//         "price": "3.35"
//       },{
//         "shortDescription": "   Klarbrunn 12-PK 12 FL OZ  ",
//         "price": "12.00"
//       }
//     ],
//     "total": "35.35"
//   }


recieptController.calculateTotal  = (req,res,next) =>{
    try{
    const {retailer, purchaseDate, purchaseTime,items} = req.body;
    const reciept = req.body;
     reciept.total = 10;
     return next();
    }catch(error){
        return({
            error : `Error while caluclating total`,
            code : 500,
            log : `Error in calculate total controller`
        })
    }
}
recieptController.post = async (req, res) => {
    try {
        const reciept = req.body;
        if (!reciept) {
            return res.status(400).send('Invalid request body');
        }
        const posting = await add(reciept)
        return res.status(200).json({ message: 'Receipt added successfully' });
    } catch (error) {
        return res.status(500).json({
            error: 'Error while posting',
            code: 500,
            log: 'Error in post controller'
        });
    }
};

export default recieptController




