const PcAccessory = require('../models/pcAccessory')
// post to pcAccessories

const pc_accessory_create_post = (req, res) => {
  const userAccessory = req.body
  const accessory = new PcAccessory(userAccessory)
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

const pc_accessories_get = (req, res) => {
  PcAccessory.find()
    .then((result) => {
      const pcAccessories = result
      res.render('pc_accessories/pcAccessories', {
        // data to send to createAccessories view
        pcAccessories
      })
    })
    .catch((err) => console.log(err))
}

const pc_accessory_detail = (req, res) => {
  const id = req.params.id
  PcAccessory.findById(id)
    .then((result) => {
      const pcAccessory = result
      res.render('pc_accessories/pcAccessoryDetail', {
        pcAccessory
      })
    })
    .catch((err) => {
      console.log(err)
      res.render('404')
    })
}

const pc_accessory_delete = (req, res) => {
  const id = req.params.id
  PcAccessory.findByIdAndDelete(id)
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
