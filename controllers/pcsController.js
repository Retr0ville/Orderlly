const Pc = require('../models/pc')
// post to pcs

const pc_create_post = (req, res) => {
  const userPc = req.body
  const pc = new Pc(userPc)
  pc.save().then((result) => {
    console.log(result)
    const item = result
    // send a success response
    // {}
    res.render('ItemPostSuccess', {
      item
    })
  }).catch(err => console.log(err))
}

// const pc_create_get = (req, res)=>{

//     res.render('createpc',{
//       //data to send to createPc view
//     })
//   };

const pcs_get = (req, res) => {
  Pc.find().then((result) => {
    const pcs = result
    res.render('pcs/Pcs', {
      // data to send to view
      pcs
    })
  }).catch(err => console.log(err))
}

const pc_detail = (req, res) => {
  const id = req.params.id
  Pc.findById(id).then((result) => {
    const pc = result
    res.render('pcs/PcDetail', {
      pc
    })
  }).catch((err) => {
    console.log(err)
    res.render('404')
  })
}

const pc_delete = (req, res) => {
  const id = req.params.id
  Pc.findByIdAndDelete(id).then((result) => {
    const deletedpc = result
    // might not work, use res.json to redirect
    res.json({ redirect: '/userItems', deletedpc })
  }).catch((err) => {
    console.log(err)
    res.render('404')
  })
}
