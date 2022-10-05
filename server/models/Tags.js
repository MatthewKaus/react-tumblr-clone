const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const PostSchema = require('./Post')

const TagSchema = new Schema(
    {
        tag: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Must use a valid email address"],
        },
        password: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true
        },
        posts: [PostSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
UserSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// custom method to compare and validate password for logging in
UserSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `stockCount` with the number of saved stocks we have
UserSchema.virtual('postCount').get(function () {
    return this.posts.length;
});

const User = model("User", UserSchema);

module.exports = User;
