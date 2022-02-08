import { Schema, model } from "mongoose";
import { hash } from 'bcryptjs'
import  { sign } from 'jsonwebtoken';
import { SECRECT } from "../constants";
import  { randomBytes } from "crypto";
import { pick } from 'lodash';

const UserSchema = new Schema({

    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    middlename: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    idnumber:{
        type: Number,
        require: true,
    },
    password: {
        type: String,
        required: true,
    },
    verified:{
        type: Boolean,
        required: false,
    },
    verificationcode: {
        type: String,
        required: false,
    },
    resetPasswordToken: {
        type: String,
        required: false,
    },
    resetPasswordExpiresIn: {
        type: Date,
        required: false,
    }
     

}, { timestamps: true });


UserSchema.pre("save", async function (name){
    let user = this;
    if(!user.isModified("password")) return next();
    user.password = await hash(user.password, 10);
})

UserSchema.methods.comparePassword = async function(password){
    return await compare(password, this.password);
}

UserSchema.methods.generateJWT = async function () {
    let payload = {
        lastname: this.username,
        email: this.email,
        id: this._id,
    };
    return await sign(payload, SECRECT, {expiresIn: '1 day'});
}


UserSchema.methods.generatePasswordReset = function () {
    this.resetPasswordExpiresIn = Date.now() + 36000000;
    this.resetPasswordExpiresIn = randomBytes(20).toString("hex");
};

UserSchema.methods.getUserInfo = function () {
    return pick(this, ["_id", "firstname", "lastname", "middlename", "email", "idnumber"]);
}

const User = model("user", UserSchema);
export default User;