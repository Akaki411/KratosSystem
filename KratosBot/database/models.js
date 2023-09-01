const sequelize = require('./database')
const {DataTypes} = require('sequelize')

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    playerCount: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    platform: {type: DataTypes.STRING, allowNull: false, defaultValue: "ANDROID"},
    TGID: {type: DataTypes.INTEGER, unique: true, allowNull: true},
    TGShortName: {type: DataTypes.STRING, unique: true, allowNull: true},
    isBanned: {type: DataTypes.BOOLEAN, defaultValue: false},
    notifications: {type: DataTypes.BOOLEAN, defaultValue: true},
    msgs: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    audios: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    stickers: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    swords: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    audioMessages: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    photos: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    videos: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    botMemory: {type: DataTypes.TEXT, allowNull: true},
    mainAccount: {type: DataTypes.INTEGER, allowNull: true},
    botForgotTime: {type: DataTypes.DATE, defaultValue: sequelize.fn("now")},
    botCallTime: {type: DataTypes.DATE, defaultValue: sequelize.fn("now")}
})

const UserRights = sequelize.define("user-rights", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    role: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    canSetMap: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canChangeBotMode: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    isAdmin: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canKick: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canGloKick: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canBan: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canGloBan: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canWarning: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canMute: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canGloMute: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canDub: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canDarkBan: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canDelMessage: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canUseServiceCommands: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canGetChatInfo: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canChatControl: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canTroll: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canTeleport: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canCheat: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canCreateItems: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    canSendNotification: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    haveStats: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
})

const UserTutorial = sequelize.define('user-tutorial', {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    startGuide: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},

})

const Player = sequelize.define("player", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true},
    nick: {type: DataTypes.STRING, allowNull: false},
    location: {type: DataTypes.INTEGER, allowNull: false},
    countryId: {type: DataTypes.INTEGER, allowNull: false},
    citizenship: {type: DataTypes.INTEGER, allowNull: false},
    registration: {type: DataTypes.INTEGER, allowNull: false},
    gender: {type: DataTypes.BOOLEAN, allowNull: false},
    marriedId: {type: DataTypes.INTEGER, unique: true, allowNull: true},
    nationality: {type: DataTypes.STRING, allowNull: false},
    age: {type: DataTypes.INTEGER, allowNull: false},
    craft: {type: DataTypes.STRING, allowNull: false},
    avatarVK: {type: DataTypes.STRING, allowNull: true},
    avatarURL: {type: DataTypes.STRING, allowNull: true},
    beer: {type: DataTypes.REAL, defaultValue: 0.0},
    health: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 100},
    maxHealth: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 100},
    energy: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 50},
    maxEnergy: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 50},
    power: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    protection: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    speed: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    money: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 10},
    head: {type: DataTypes.INTEGER, allowNull: true},
    body: {type: DataTypes.INTEGER, allowNull: true},
    legs: {type: DataTypes.INTEGER, allowNull: true},
    foot: {type: DataTypes.INTEGER, allowNull: true},
    lHand: {type: DataTypes.INTEGER, allowNull: true},
    rHand: {type: DataTypes.INTEGER, allowNull: true},
    transport: {type: DataTypes.INTEGER, allowNull: true},
    lastCitizenship: {type: DataTypes.DATE, defaultValue: sequelize.fn("now")},
    isAlive: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true}
})

const Items = sequelize.define("items", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    emoji: {type: DataTypes.STRING, allowNull: false},
    avatarVK: {type: DataTypes.STRING, allowNull: true},
    avatarURL: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    type: {type: DataTypes.INTEGER, allowNull: false},
    legendary: {type: DataTypes.INTEGER, allowNull: false},
    maxCount: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1},
    tags: {type: DataTypes.TEXT, allowNull: true},
    buffs: {type: DataTypes.TEXT, allowNull: true}
})

const Crafts = sequelize.define("crafts", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    item: {type: DataTypes.INTEGER, allowNull: false},
    need: {type: DataTypes.TEXT, allowNull: true},
    difficult: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
})

const ItemTypes = sequelize.define("item-types", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    emoji: {type: DataTypes.STRING, allowNull: false}
})

const ItemLegendary = sequelize.define("item-legendary", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    emoji: {type: DataTypes.STRING, allowNull: false}
})

const Inventory = sequelize.define("inventory", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    playerId: {type: DataTypes.INTEGER, allowNull: false},
    buildingId: {type: DataTypes.INTEGER, allowNull: false},
    itemId: {type: DataTypes.INTEGER, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false}
})

const MoneyTransactions = sequelize.define("money-transactions", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    type: {type: DataTypes.STRING, allowNull: false},
    from: {type: DataTypes.INTEGER, allowNull: false},
    to: {type: DataTypes.INTEGER, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false}
})

const ItemTransactions = sequelize.define("item-transactions", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    type: {type: DataTypes.STRING, allowNull: false},
    itemId: {type: DataTypes.INTEGER, allowNull: false},
    newId: {type: DataTypes.INTEGER, allowNull: false},
    from: {type: DataTypes.INTEGER, allowNull: false},
    to: {type: DataTypes.INTEGER, allowNull: false},
    count: {type: DataTypes.INTEGER, allowNull: false}
})

const Country = sequelize.define("country", {
    id: {type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    emoji: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT, unique: true, allowNull: false},
    groupId: {type: DataTypes.INTEGER, allowNull: false,},
    photoVK: {type: DataTypes.STRING, allowNull: true},
    photoURL: {type: DataTypes.STRING, allowNull: true},
    leaderIds: {type: DataTypes.STRING, allowNull: false, defaultValue: "[]"},
    governmentForm: {type: DataTypes.STRING, allowNull: false, defaultValue: "👑 Монархия"},
    capitalId: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    chatIds: {type: DataTypes.STRING, allowNull: false, defaultValue: "[]"},
    TGchatIds: {type: DataTypes.STRING, allowNull: true, defaultValue: ""},
    tags: {type: DataTypes.STRING, allowNull: true},
    canKick: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 5},
    canBan: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 5},
    canMute: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 5},
    canDelMessage: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 5},
})

const CountryRoads = sequelize.define("country-roads", {
    id: {type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    fromId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    toId: {type: DataTypes.INTEGER, allowNull: false},
    isBlocked: {type: DataTypes.BOOLEAN, defaultValue: false},
    time: {type: DataTypes.INTEGER, defaultValue: 0}
})

const CountryActive = sequelize.define("country-active", {
    id: {type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    json: {type: DataTypes.TEXT, allowNull: false},
    date: {type: DataTypes.DATE}
})

const CountryUsingMoney = sequelize.define("country-using-money", {
    id: {type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    json: {type: DataTypes.TEXT, allowNull: false},
    date: {type: DataTypes.DATE, allowNull: false}
})

const OfficialInfos = sequelize.define("official-infos", {
    id: {type: DataTypes.INTEGER, unique: true, primaryKey: true},
    countryId: {type: DataTypes.INTEGER, allowNull: false},
    rang: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1}
})

const City = sequelize.define("city", {
    id: {type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    countryId: {type: DataTypes.INTEGER, allowNull: true},
    leaderId: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    emoji: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    photoVK: {type: DataTypes.STRING, allowNull: true},
    photoURL: {type: DataTypes.STRING, allowNull: true},
    buildingsScore: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    maxBuildingsScore: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 50},
    isCapital: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    desirableResource: {type: DataTypes.STRING, allowNull: true, defaultValue: "[]"},
    undesirableResource: {type: DataTypes.STRING, allowNull: true, defaultValue: "[]"}
})

const CityRoads = sequelize.define("city-roads", {
    id: {type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    fromId: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    toId: {type: DataTypes.INTEGER, allowNull: false},
    isBlocked: {type: DataTypes.BOOLEAN, defaultValue: false},
    time: {type: DataTypes.INTEGER, defaultValue: 0}
})

const BuildingTypes = sequelize.define("building-types", {
    id: {type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    emoji: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    description: {type: DataTypes.TEXT, allowNull: true},
    ownerType: {type: DataTypes.STRING, allowNull: false, defaultValue: "user"},
    storageSize: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 20}
})

const Buildings = sequelize.define("buildings", {
    id: {type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true},
    location: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    emoji: {type: DataTypes.STRING, allowNull: false, defaultValue: ""},
    description: {type: DataTypes.TEXT, allowNull: true},
    type: {type: DataTypes.INTEGER, allowNull: false},
    ownerId: {type: DataTypes.INTEGER, allowNull: false},
    ownerType: {type: DataTypes.STRING, allowNull: false, defaultValue: "user"},
    level: {type: DataTypes.INTEGER, allowNull: false},
    freezing: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const BuildingAddon = sequelize.define("building-addons", {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.TEXT, allowNull: false, defaultValue: "{}"}
})


module.exports = {
    User,
    UserRights,
    Player,
    Items,
    Crafts,
    ItemTypes,
    ItemLegendary,
    Inventory,
    MoneyTransactions,
    ItemTransactions,
    Country,
    CountryRoads,
    CountryActive,
    CountryUsingMoney,
    OfficialInfos,
    City,
    CityRoads,
    BuildingTypes,
    Buildings,
    BuildingAddon
}