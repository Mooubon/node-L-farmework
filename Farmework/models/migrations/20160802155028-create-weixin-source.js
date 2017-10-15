'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('weixin_sources', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            data: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            uid: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            desc: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        }).then(function () {
            queryInterface.addIndex("weixin_sources", ["type"])
        });
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('weixin_sources');
    }
};