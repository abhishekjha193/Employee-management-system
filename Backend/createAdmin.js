const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  const hashedPassword = await bcrypt.hash('123456', 10);

  await User.create({
    email: 'admin@idms.com',
    password: hashedPassword
  });

  console.log('Admin user created');
  process.exit();

})
.catch(err => console.log(err));