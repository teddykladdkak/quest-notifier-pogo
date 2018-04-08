//Source: https://pokemongohub.net/post/guide/field-research-missions-list/

var rewards = [
	{namn: "stardust", plats: "img/stuff/stardust.png"},
	{namn: "candy", plats: "img/stuff/candy.png"},
	{namn: "berry_raz", plats: "img/stuff/berry_raz.png"},
	{namn: "berry_nan", plats: "img/stuff/berry_nan.png"},
	{namn: "berry_pin", plats: "img/stuff/berry_pin.png"},
	{namn: "berry_gol", plats: "img/stuff/berry_gol.png"},
	{namn: "ball_nor", plats: "img/stuff/ball_nor.png"},
	{namn: "ball_gr", plats: "img/stuff/ball_gr.png"},
	{namn: "ball_ult", plats: "img/stuff/ball_ult.png"},
	{namn: "revive_nor", plats: "img/stuff/revive_nor.png"},
	{namn: "revive_max", plats: "img/stuff/revive_max.png"},
	{namn: "potion_nor", plats: "img/stuff/potion_nor.png"},
	{namn: "potion_super", plats: "img/stuff/potion_super.png"},
	{namn: "potion_hyper", plats: "img/stuff/potion_hyper.png"},
	{namn: "potion_max", plats: "img/stuff/potion_max.png"},
	{namn: "pokemon", plats: "img/stuff/pokemon.png"}
];
var quests = [{
	"namn": "Use {?} Berries to help catch Pokémon.",
	"number": true,
	"reward": [
		{"typ": "ball.gr", "antal": "6"},
		{"typ": "berry.pin", "antal": "2"},
		{"typ": "berry.raz", "antal": "5"},
		{"typ": "stardust", "antal": "750"}
	]
},{
	"namn": "Use a Berry to help catch a Pokémon.",
	"number": false,
	"reward": [
		{"typ": "ball.gr", "antal": "5"}
	]
},{
	"namn": "Catch {?} Pokémon.",
	"number": true,
	"reward": [
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "ball.gr", "antal": "10"},
		{"typ": "berry.nan", "antal": "10"},
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "stardust", "antal": "400"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Ditto.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Ditto.",
	"number": false,
	"reward": [
		{"typ": "candy", "antal": "3"},
		{"typ": "berry.gol", "antal": "2"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch {?} Oddish or Bellsprout.",
	"number": true,
	"reward": [
		{"typ": "ball.gr", "antal": "5"},
		{"typ": "berry.pin", "antal": "2"},
		{"typ": "berry.raz", "antal": "6"},
		{"typ": "stardust", "antal": "1000"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch an Oddish or Bellsprout.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Swablu.",
	"number": true,
	"reward": [
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "stardust", "antal": "400"}
	]
},{
	"namn": "Catch a Swablu.",
	"number": false,
	"reward": [
		{"typ": "berry.raz", "antal": "2"}
	]
},{
	"namn": "Catch {?} Pidgey or Murkrow.",
	"number": true,
	"reward": [
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "stardust", "antal": "400"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Pidgey or Murkrow.",
	"number": false,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch {?} Treecko or Mudkip.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Treecko or Mudkip.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Meowth or Skitty.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Meowth or Skitty.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Bug-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "berry.nan", "antal": "3"},
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "revive.nor", "antal": "1"},
		{"typ": "stardust", "antal": "400"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Bug-type Pokémon.",
	"number": false,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch {?} Dark-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "ball.gr", "antal": "5"},
		{"typ": "berry.pin", "antal": "2"},
		{"typ": "berry.raz", "antal": "6"},
		{"typ": "stardust", "antal": "1000"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Dark-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Dragon-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Dragon-type Pokémon.",
	"number": false,
	"reward": [
		{"typ": "stardust", "antal": "3000"}
	]
},{
	"namn": "Catch {?} Electric-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch an Electric-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Fairy-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Fairy-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Fighting-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Fighting-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Fire-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Fire-type Pokémon.",
	"number": false,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch {?} Flying-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "stardust", "antal": "400"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Flying-type Pokémon.",
	"number": false,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch {?} Ghost-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "ball.gr", "antal": "5"}
	]
},{
	"namn": "Catch a Ghost-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Grass-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Grass-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Ground-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Ground-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Ice-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch an Ice-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Normal-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "ball.gr", "antal": "5"},
		{"typ": "berry.pin", "antal": "2"},
		{"typ": "berry.raz", "antal": "6"},
		{"typ": "stardust", "antal": "1000"}
	]
},{
	"namn": "Catch a Normal-type Pokémon.",
	"number": false,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch {?} Poison-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "stardust", "antal": "400"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Poison-type Pokémon.",
	"number": false,
	"reward": [
		{"typ": "", "antal": ""}
	]
},{
	"namn": "Catch {?} Psychic-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Psychic-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Rock-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Rock-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Steel-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Steel-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Water-type Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Catch a Water-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Grass-, Fire-, or Ground-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Grass-, Fire-, or Ground-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Catch {?} Pokémon with Weather Boost.",
	"number": true,
	"reward": [
		{"typ": "ball.gr", "antal": "5"},
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "stardust", "antal": "1000"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Catch a Pokémon with Weather Boost.",
	"number": false,
	"reward": []
},{
	"namn": "Evolve a Pokémon.",
	"number": false,
	"reward": [
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Evolve {?} Pokémon.",
	"number": true,
	"reward": []
},{
	"namn": "Evolve {?} Fire-type Pokémon.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Evolve a Fire-type Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Evolve a Magikarp.",
	"number": false,
	"reward": []
},{
	"namn": "Hatch {?} Eggs.",
	"number": true,
	"reward": [
		{"typ": "berry.pin", "antal": "3"},
		{"typ": "ball.nor", "antal": "10"},
		{"typ": "stardust", "antal": "2000"}
	]
},{
	"namn": "Hatch an Egg.",
	"number": false,
	"reward": [
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "stardust", "antal": "400"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Earn {?} Candies walking with your buddy.",
	"number": true,
	"reward": []
},{
	"namn": "Earn a Candy walking with your buddy.",
	"number": false,
	"reward": []
},{
	"namn": "Make {?} Excellent Throws.",
	"number": true,
	"reward": [
		{"typ": "ball.ult", "antal": "10"}
	]
},{
	"namn": "Make an Excellent Throw.",
	"number": false,
	"reward": [
		{"typ": "ball.gr", "antal": "5"},
		{"typ": "berry.pin", "antal": "2"},
		{"typ": "stardust", "antal": "1000"}
	]
},{
	"namn": "Make {?} Great Curveball Throws.",
	"number": true,
	"reward": [
		{"typ": "berry.raz", "antal": "6"},
		{"typ": "stardust", "antal": "2000"}
	]
},{
	"namn": "Make a Great Curveball Throw.",
	"number": false,
	"reward": []
},{
	"namn": "Make {?} Great Throws.",
	"number": true,
	"reward": [
		{"typ": "ball.nor", "antal": "4"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "stardust", "antal": "400"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Make {?} Great Throws in a row.",
	"number": true,
	"reward": [
		{"typ": "berry.pin", "antal": "2"},
		{"typ": "berry.raz", "antal": "6"},
		{"typ": "candy", "antal": "1"},
		{"typ": "stardust", "antal": "2000"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Make a Great Throw.",
	"number": false,
	"reward": []
},{
	"namn": "Make {?} Curveball Throws in a row.",
	"number": true,
	"reward": [
		{"typ": "ball.gr", "antal": "5"},
		{"typ": "berry.pin", "antal": "2"},
		{"typ": "stardust", "antal": "700"}
	]
},{
	"namn": "Make {?} Excellent Curveball Throws in a row.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Make {?} Great Curveball Throws in a row.",
	"number": true,
	"reward": [
		{"typ": "ball.nor", "antal": "6"},
		{"typ": "candy", "antal": "3"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Make {?} Nice Curveball Throws in a row.",
	"number": true,
	"reward": [
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "stardust", "antal": "500"}
	]
},{
	"namn": "Make {?} Nice Throws in a row.",
	"number": true,
	"reward": [
		{"typ": "berry.pin", "antal": "2"},
		{"typ": "ball.gr", "antal": "5"},
		{"typ": "stardust", "antal": "1000"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Make {?} Nice Throws.",
	"number": true,
	"reward": [
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "berry.raz", "antal": "5"},
		{"typ": "stardust", "antal": "400"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Make a Nice Throw.",
	"number": false,
	"reward": []
},{
	"namn": "Spin {?} PokéStops you haven’t visited before.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Spin a PokéStop you haven’t visited before.",
	"number": false,
	"reward": []
},{
	"namn": "Spin {?} PokéStops.",
	"number": true,
	"reward": [
		{"typ": "berry.pin", "antal": "1"},
		{"typ": "berry.raz", "antal": "3"},
		{"typ": "ball.nor", "antal": "5"},
		{"typ": "stardust", "antal": "400"}
	]
},{
	"namn": "Spin a PokéStop.",
	"number": false,
	"reward": []
},{
	"namn": "Power up Pokémon {?} times.",
	"number": true,
	"reward": [
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Power up a Pokémon.",
	"number": false,
	"reward": []
},{
	"namn": "Win {?} Gym battles.",
	"number": true,
	"reward": [
		{"typ": "revive.max", "antal": "1"},
		{"typ": "potion.super", "antal": "3"},
		{"typ": "revive.nor", "antal": "4"},
		{"typ": "stardust", "antal": "1000"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Win a Gym battle.",
	"number": false,
	"reward": [
		{"typ": "berry.nan", "antal": "10"},
		{"typ": "potion.super", "antal": "3"},
		{"typ": "revive.nor", "antal": "3"},
		{"typ": "stardust", "antal": "1000"},
		{"typ": "pokemon", "antal": ""},
	]
},{
	"namn": "Use a supereffective Charged Attack in {?} Gym battles.",
	"number": true,
	"reward": [
		{"typ": "potion.super", "antal": "3"},
		{"typ": "candy", "antal": "1"},
		{"typ": "revive.nor", "antal": "6"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Use a supereffective Charged Attack in a Gym battle.",
	"number": false,
	"reward": [
		{"typ": "berry.nan", "antal": "10"},
		{"typ": "potion.super", "antal": "3"},
		{"typ": "revive.nor", "antal": "6"},
		{"typ": "stardust", "antal": "1000"}
	]
},{
	"namn": "Win a level 3 or higher raid.",
	"number": false,
	"reward": [
		{"typ": "potion.super", "antal": "3"},
		{"typ": "candy", "antal": "1"}
	]
},{
	"namn": "Win {?} level 3 or higher raids.",
	"number": true,
	"reward": []
},{
	"namn": "Win {?} raids.",
	"number": true,
	"reward": [
		{"typ": "stardust", "antal": "3000"},
		{"typ": "pokemon", "antal": ""}
	]
},{
	"namn": "Win a raid.",
	"number": false,
	"reward": [
		{"typ": "berry.nan", "antal": "10"},
		{"typ": "potion.super", "antal": "3"},
		{"typ": "revive.nor", "antal": "4"},
		{"typ": "stardust", "antal": "1000"}
	]
},{
	"namn": "Reach level {?}.",
	"number": true,
	"reward": []
},{
	"namn": "Earn a silver Kanto medal.",
	"number": false,
	"reward": []
},{
	"namn": "Earn a gold Kanto medal.",
	"number": false,
	"reward": []
}]

//{"typ": "", "antal": ""}
