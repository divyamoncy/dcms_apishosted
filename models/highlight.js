"use strict";

module.exports = function(sequelize, DataTypes) {
    var Highlights = sequelize.define("highlights", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            // defaultValue: 
            allowNull: false
        },
        promo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        is_event: {
            type: DataTypes.BOOLEAN
        },
        server_id: {
            type: DataTypes.INTEGER
        }

    });

    return Highlights;
};