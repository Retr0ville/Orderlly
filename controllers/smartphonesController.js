const Smartphone = require('../models/smartphone')
// post to smartphones

const smartphone_create_post = (req, res) => {
  const userSmartphone = req.body
  const smartphone = new Smartphone(userSmartphone)
  smartphone.save().then((result) => {
    console.log(result)
    const item = result
    // send a success response
    // {}
    res.render('ItemPostSuccess', {
      item
    })
  }).catch(err => console.log(err))
}

// const smartphone_create_get = (req, res)=>{

//     res.render('createsmartphone',{
//       //data to send to createsmartphone view
//     })
//   };

const smartphones_get = (req, res) => {
  Smartphone.find().then((result) => {
    const smartphones = result
    res.render('smartphones/Smartphones', {
      // data to send to view
      smartphones
    })
  }).catch(err => console.log(err))
}

const smartphone_detail = (req, res) => {
  const id = req.params.id
  Smartphone.findById(id).then((result) => {
    const smartphone = result
    res.render('smartphones/SmartphoneDetail', {
      smartphone
    })
  }).catch((err) => {
    console.log(err)
    res.render('404')
  })
}

const smartphone_delete = (req, res) => {
  const id = req.params.id
  Smartphone.findByIdAndDelete(id).then((result) => {
    const deletedSmartphone = result
    // might not work, use res.json to redirect
    res.json({ redirect: '/userItems', deletedSmartphone })
  }).catch((err) => {
    console.log(err)
    res.render('404')
  })
}
