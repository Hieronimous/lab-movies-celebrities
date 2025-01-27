const { Schema, model } = require("mongoose");

const celebsSchema = new Schema(
    {
        image: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        occupation: {
            type: String,
            require: true
        },
        catchPhrase: {
            type: String,
            require: true
        },
    },
    {
        timestamps: true
    }
);

const Celebs = model("Celebs", celebsSchema);

module.exports = Celebs;
