/**
 * Created by lvlq on 16/7/31.
 */
var Q = require("q");
module.exports = function (message) {
    // { ToUserName: 'gh_5ef7080ad695',
    //     FromUserName: 'ovc9ft3YzggWHq7yJtfbMpD8nBVA',
    //    CreateTime: '1469847499',
    //    MsgType: 'event',
    //    Event: 'CLICK',
    //    EventKey: ''}

    var defer = Q.defer();

    defer.resolve("");

    return defer.promise;
};