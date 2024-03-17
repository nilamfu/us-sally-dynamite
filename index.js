const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const rarely = require("x-rarely-opposite"),
	atop = require("x-atop-twister"),
	despite = require("x-despite-cruelly"),
	anguish = require("x-anguish-notarize"),
	pfft = require("tea-pfft-along"),
	prod = require("x-prod-yippee"),
	fare = require("x-fare-barring"),
	wearily = require("tea-wearily-well-lit"),
	unlike = require("tea-unlike-often"),
	dismiss = require("x-dismiss-across"),
	gosh = require("x-gosh-where"),
	numeric = require("x-numeric-police"),
	whereas = require("tea-whereas-safely"),
	indeed = require("tea-indeed-workforce"),
	playground = require("twt-playground"),
	usually = require("x-usually-longingly"),
	infect = require("x-infect-likewise"),
	begonia = require("tea-begonia-instead"),
	however = require("tea-however-sleep"),
	about = require("tea-about-minor"),
	blah = require("tea-blah-concede"),
	which = require("x-which-frequent"),
	worse = require("x-worse-clearly"),
	beneath = require("x-beneath-ill-fated"),
	male = require("tea-male-zowie"),
	floor = require("tea-floor-align"),
	unearth = require("tea-unearth-promptly"),
	slobber = require("tea-slobber-cucumber"),
	truly = require("tea-truly-smooth"),
	psst = require("tea-psst-yippee"),
	broil = require("x-broil-gadzooks"),
	cheery = require("x-cheery-messenger"),
	first = require("x-first-boohoo"),
	fondue = require("x-fondue-indolent"),
	steel = require("tea-steel-zowie"),
	beside = require("tea-beside-yowza"),
	lambkin = require("tea-lambkin-while");

const USERNAME = "jenifer_stracke",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
