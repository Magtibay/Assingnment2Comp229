//require modules for the user model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(

    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /*
        password:
        {
             type: String,
            default: '',
            trim: true,
            required: 'username is required'
        }
        */
       email:
       {
           type:String,
           trim: true,
           default: '',
           required: 'email address is required'
       
    },
    displayName:
    {
        type:String,
        trim: true,
        default: '',
        required: 'Display Name is required'
    },
    created:
    {
        type: Date,
        default: Date.now
    },

    update:
    {
        type: Date,
        default: Date.now
    },
},
    {
        collection: "user"
    }
)

//configure options for user model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);