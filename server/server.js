var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var User = mongoose.model('User',{
    email: {
        type:String,
        required: true,
        minLength: 1,
        trim: true
    }
});


// var newTodo = new Todo({
//     text:'Cook Dinner'
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo',doc);
// },(err)=>{
//     console.log('Unable to save',err);
// });

var newUser = new User ({
    email:'ammy@gmail.com'
});

newUser.save().then((doc)=>{
    console.log('Saved new user',doc);
},(err)=>{
    console.log('Unable to save user',err);
});

//user
//email - require, trim,type string minLength1