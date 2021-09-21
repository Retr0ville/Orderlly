const SmartphoneAccessory = require('../models/smartphoneAccessory')
// post to pcAccessories

const smartphone_accessory_create_post = (req, res) => {
  const userAccessory = req.body
  const accessory = new SmartphoneAccessory(userAccessory)
  accessory
    .save()
    .then((result) => {
      console.log(result)
      const item = result
      //  send a success response
      //  {}
      res.render('ItemPostSuccess', {
        item
      })
    })
    .catch((err) => console.log(err))
}

// const pc_accessory_create_get = (req, res)=>{
//     res.render('createAccessory',{
//       //data to send to createAccessories view
//     })
//   };

const smartphone_accessories_get = (req, res) => {
  SmartphoneAccessory.find()
    .then((result) => {
      const smartphoneAccessories = result
      res.render('smartphone_accessories/SmartphoneAccessories', {
        // data to send to smartphoneAccessories view
        smartphoneAccessories
      })
    })
    .catch((err) => console.log(err))
}

const smartphone_accessory_detail = (req, res) => {
  const id = req.params.id
  SmartphoneAccessory.findById(id)
    .then((result) => {
      const smartphoneAccessory = result
      res.render('smartphone_accessories/SmartphoneAccessoryDetail', {
        smartphoneAccessory
      })
    })
    .catch((err) => {
      console.log(err)
      res.render('404')
    })
}

const smartphone_accessory_delete = (req, res) => {
  const id = req.params.id
  SmartphoneAccessory.findByIdAndDelete(id)
    .then((result) => {
      const deletedAccessory = result
      // might not work, use res.json to redirect
      res.json({ redirect: '/userItems', deletedAccessory })
    })
    .catch((err) => {
      console.log(err)
      res.render('404')
    })
}
