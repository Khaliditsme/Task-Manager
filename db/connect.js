
const mongoose = require('mongoose')

const connectionString =
  "mongodb+srv://khalid:atlascloud@task-manager.byqenli.mongodb.net/TMD?retryWrites=true&w=majority";


mongoose.connect(connectionString,{
  // useNewUrlParser:true,
  // useCreateIndex:true,
  // useFindAndModify:false,
  // useUnifiedTopology:true,

})
.then(()=>{console.log('Connected to Database...')})
.catch((err)=>{console.log(err)})