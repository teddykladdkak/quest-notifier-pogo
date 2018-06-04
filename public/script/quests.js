//Source: https://pokemongohub.net/post/guide/field-research-missions-list/
// Source: https://pokemongo.gamepress.gg/research-tasks-list

var rewards = [
	{namn: "stardust", rubrik: "Stardust", plats: "img/stuff/stardust.png"},
	{namn: "candy", rubrik: "Rare Candy", plats: "img/stuff/candy.png"},
	{namn: "berry_raz", rubrik: "Razz Berry", plats: "img/stuff/berry_raz.png"},
	{namn: "berry_nan", rubrik: "Nanab Berry", plats: "img/stuff/berry_nan.png"},
	{namn: "berry_pin", rubrik: "Pinap Berry", plats: "img/stuff/berry_pin.png"},
	{namn: "berry_gol", rubrik: "Golden Razz Berry", plats: "img/stuff/berry_gol.png"},
	{namn: "ball_nor", rubrik: "Pokéball", plats: "img/stuff/ball_nor.png"},
	{namn: "ball_gr", rubrik: "Greatball", plats: "img/stuff/ball_gr.png"},
	{namn: "ball_ult", rubrik: "Ultraball", plats: "img/stuff/ball_ult.png"},
	{namn: "revive_nor", rubrik: "Revive", plats: "img/stuff/revive_nor.png"},
	{namn: "revive_max", rubrik: "Max Revive", plats: "img/stuff/revive_max.png"},
	{namn: "potion_nor", rubrik: "Potion", plats: "img/stuff/potion_nor.png"},
	{namn: "potion_super", rubrik: "Super Potion", plats: "img/stuff/potion_super.png"},
	{namn: "potion_hyper", rubrik: "Hyper Potion", plats: "img/stuff/potion_hyper.png"},
	{namn: "potion_max", rubrik: "Max Potion", plats: "img/stuff/potion_max.png"},
	{namn: "pokemon", rubrik: "Pokémon", plats: "img/stuff/pokemon.png"}
];
//var questgroups = ["Catch", "Evolve", "Hatch", "Walking", "Throws", "Spin", "Power-Up", "Gym/Raid", "Level/Achievements"]
var questgroups = ["Adventure Week", "Catch", "Evolve", "Hatch", "Walking", "Throws", "Spin", "Power up", "Gym", "Raid", "Berries"];
/*var quests = [
	{"group": "Catch", "namn": "Use {?} Berries to help catch Pokémon.", "number": true},
	{"group": "Catch", "namn": "Use a Berry to help catch a Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Ditto.", "number": true},
	{"group": "Catch", "namn": "Catch a Ditto.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Oddish or Bellsprout.", "number": true},
	{"group": "Catch", "namn": "Catch an Oddish or Bellsprout.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Swablu.", "number": true},
	{"group": "Catch", "namn": "Catch a Swablu.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Pidgey or Murkrow.", "number": true},
	{"group": "Catch", "namn": "Catch a Pidgey or Murkrow.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Treecko or Mudkip.", "number": true},
	{"group": "Catch", "namn": "Catch a Treecko or Mudkip.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Meowth or Skitty.", "number": true},
	{"group": "Catch", "namn": "Catch a Meowth or Skitty.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Bug-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Bug-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Dark-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Dark-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Dragon-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Dragon-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Electric-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch an Electric-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Fairy-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Fairy-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Fighting-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Fighting-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Fire-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Fire-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Flying-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Flying-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Ghost-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Ghost-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Grass-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Grass-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Ground-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Ground-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Ice-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch an Ice-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Normal-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Normal-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Poison-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Poison-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Psychic-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Psychic-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Rock-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Rock-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Steel-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Steel-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Water-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Water-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Grass-, Fire-, or Ground-type Pokémon.", "number": true},
	{"group": "Catch", "namn": "Catch a Grass-, Fire-, or Ground-type Pokémon.", "number": false},
	{"group": "Catch", "namn": "Catch {?} Pokémon with Weather Boost.", "number": true},
	{"group": "Catch", "namn": "Catch a Pokémon with Weather Boost.", "number": false},
	{"group": "Evolve", "namn": "Evolve a Pokémon.", "number": false},
	{"group": "Evolve", "namn": "Evolve {?} Pokémon.", "number": true},
	{"group": "Evolve", "namn": "Evolve {?} Fire-type Pokémon.", "number": true},
	{"group": "Evolve", "namn": "Evolve a Fire-type Pokémon.", "number": false},
	{"group": "Evolve", "namn": "Evolve a Magikarp.", "number": false},
	{"group": "Hatch", "namn": "Hatch {?} Eggs.", "number": true},
	{"group": "Hatch", "namn": "Hatch an Egg.", "number": false},
	{"group": "Walking", "namn": "Earn {?} Candies walking with your buddy.", "number": true},
	{"group": "Walking", "namn": "Earn a Candy walking with your buddy.", "number": false},
	{"group": "Throws", "namn": "Make {?} Excellent Throws.", "number": true},
	{"group": "Throws", "namn": "Make an Excellent Throw.", "number": false},
	{"group": "Throws", "namn": "Make {?} Great Curveball Throws.", "number": true},
	{"group": "Throws", "namn": "Make a Great Curveball Throw.", "number": false},
	{"group": "Throws", "namn": "Make {?} Great Throws.", "number": true},
	{"group": "Throws", "namn": "Make {?} Great Throws in a row.", "number": true},
	{"group": "Throws", "namn": "Make a Great Throw.", "number": false},
	{"group": "Throws", "namn": "Make {?} Curveball Throws in a row.", "number": true},
	{"group": "Throws", "namn": "Make {?} Excellent Throws in a row.", "number": true},
	{"group": "Throws", "namn": "Make {?} Excellent Curveball Throws in a row.", "number": true},
	{"group": "Throws", "namn": "Make {?} Great Curveball Throws in a row.", "number": true},
	{"group": "Throws", "namn": "Make {?} Nice Curveball Throws in a row.", "number": true},
	{"group": "Throws", "namn": "Make {?} Nice Throws in a row.", "number": true},
	{"group": "Throws", "namn": "Make {?} Nice Throws.", "number": true},
	{"group": "Throws", "namn": "Make a Nice Throw.", "number": false},
	{"group": "Spin", "namn": "Spin {?} PokéStops you haven’t visited before.", "number": true},
	{"group": "Spin", "namn": "Spin a PokéStop you haven’t visited before.", "number": false},
	{"group": "Spin", "namn": "Spin {?} PokéStops.", "number": true},
	{"group": "Spin", "namn": "Spin a PokéStop.", "number": false},
	{"group": "Power-Up", "namn": "Power up Pokémon {?} times.", "number": true},
	{"group": "Power-Up", "namn": "Power up a Pokémon.", "number": false},
	{"group": "Gym/Raid", "namn": "Battle in a Gym.", "number": false},
	{"group": "Gym/Raid", "namn": "Battle in a Gym {?} times.", "number": true},
	{"group": "Gym/Raid", "namn": "Win {?} Gym battles.", "number": true},
	{"group": "Gym/Raid", "namn": "Win a Gym battle.", "number": false},
	{"group": "Gym/Raid", "namn": "Use a supereffective Charged Attack in {?} Gym battles.", "number": true},
	{"group": "Gym/Raid", "namn": "Use a supereffective Charged Attack in a Gym battle.", "number": false},
	{"group": "Gym/Raid", "namn": "Win a level 3 or higher raid.", "number": false},
	{"group": "Gym/Raid", "namn": "Win {?} level 3 or higher raids.", "number": true},
	{"group": "Gym/Raid", "namn": "Win {?} raids.", "number": true},
	{"group": "Gym/Raid", "namn": "Win a raid.", "number": false},
	{"group": "Level/Achievements", "namn": "Reach level {?}.", "number": true},
	{"group": "Level/Achievements", "namn": "Earn a silver Kanto medal.", "number": false},
	{"group": "Level/Achievements", "namn": "Earn a gold Kanto medal.", "number": false}
];*/
var quests = [{
	"group": "Adventure Week",
	"namn": "Adventure Week: Earn 3 Candy walking with your Buddy.",
	"number": "false"
	//"Pokemon encounter(Kabuto / Omanyte)"
},{
	"group": "Adventure Week",
	"namn": "Adventure Week: Evolve a Kabuto or Omanyte.",
	"number": "false"
	//"Pokemon encounter(Aerodactyl)"
},{
	"group": "Adventure Week",
	"namn": "Adventure Week: Hatch 2 Eggs.",
	"number": "false"
	//"1 Rare Candy"
},{
	"group": "Adventure Week",
	"namn": "Adventure Week: Hatch 2 Eggs.",
	"number": "false"
	//"Pokemon encounter(Omanyte)"
},{
	"group": "Gym",
	"namn": "Battle in a Gym 3 times.",
	"number": "false"
	//"Pokemon encounter(Jynx)"
},{
	"group": "Gym",
	"namn": "Battle in a Gym 5 times.",
	"number": "false"
	//"1000 Stardust / 5 Potions / 3 Super Potions / (2 / 4) Revives / 10 Nanab Berries / Pokemon encounter(Machop / Bulbasaur)"
},{
	"group": "Gym",
	"namn": "Battle in a Gym.",
	"number": "false"
	//"400 Stardust / 5 Potions / 2 Revives 5 Nanab Berries / Pokemon encounter(Horsea)"
},{
	"group": "Raid",
	"namn": "Battle in a raid.",
	"number": "false"
	//"5 Potions"
},{
	"group": "Catch",
	"namn": "Catch 10 Pokemon with Weather Boost.",
	"number": "false"
	//"1000 Stardust"
},{
	"group": "Catch",
	"namn": "Catch 10 Pokemon.",
	"number": "false"
	//"400 Stardust / 5 Poke Balls / 3 Razz Berries / 1 Pinap Berry / Pokemon encounter(Magikarp / Exeggutor)"
},{
	"group": "Catch",
	"namn": "Catch 3 Bug-type Pokémon",
	"number": "false"
	//"Pokemon encounter(Pinsir)"
},{
	"group": "Catch",
	"namn": "Catch 3 Dragon-type Pokémon.",
	"number": "false"
	//"3 Rare Candies"
},{
	"group": "Catch",
	"namn": "Catch 3 Electric, Water, or Bug-type Pokemon.",
	"number": "false"
	//"Pokemon encounter(Electrike)"
},{
	"group": "Catch",
	"namn": "Catch 3 Swablu",
	"number": "false"
	//"1000 Stardust / 2 Pinap Berries / 4-6 Razz Berries / 5 Great Balls"
},{
	"group": "Catch",
	"namn": "Catch 5 Pokemon with Weather Boost.",
	"number": "false"
	//"400 Stardust / 1 Pinap Berry / Pokemon encounter(Vulpix)"
},{
	"group": "Catch",
	"namn": "Catch a Ditto.",
	"number": "false"
	//"4000 Stardust / 3 Rare Candies / 10 Ultra Balls"
},{
	"group": "Catch",
	"namn": "Catch a Dragon-type Pokemon.",
	"number": "false"
	//"10 Ultra Balls / 2 Golden Razz Berries / (1 / 3) Rare Candy / 3000 Stardust / Pokemon encounter(Dratini)"
},{
	"group": "Walking",
	"namn": "Earn a Candy walking with your buddy.",
	"number": "false"
	//"Pokemon encounter(Krabby)"
},{
	"group": "Evolve",
	"namn": "Evolve a Pokemon.",
	"number": "false"
	//"Pokemon encounter(Eevee)"
},{
	"group": "Evolve",
	"namn": "Evolve a Water-type Pokemon.",
	"number": "false"
	//"Pokemon encounter(Seel)"
},{
	"group": "Hatch",
	"namn": "Hatch 5 Eggs.",
	"number": "false"
	//"Pokemon encounter(Chansey)"
},{
	"group": "Hatch",
	"namn": "Hatch an Egg.",
	"number": "false"
	//"400 Stardust / 3 Razz Berry / 5 Poke Balls / Pokemon encounter(Exeggcute)"
},{
	"group": "Throws",
	"namn": "Make 2 Nice Curveball throws in a row.",
	"number": "false"
	//"400 Stardust / 5 Poke Balls / 1 Pinap Berry / 3 Razz Berries"
},{
	"group": "Throws",
	"namn": "Make 2 Nice throws in a row.",
	"number": "false"
	//"1000 Stardust / 3 Nanab Berries"
},{
	"group": "Throws",
	"namn": "Make 3 Curveball throws in a row.",
	"number": "false"
	//"Pokemon encounter(Golduck)"
},{
	"group": "Throws",
	"namn": "Make 3 Excellent throws in a row.",
	"number": "false"
	//"Pokemon encounter(Larvitar)"
},{
	"group": "Throws",
	"namn": "Make 3 Excellent throws.",
	"number": "false"
	//"Pokemon encounter(Larvitar)"
},{
	"group": "Throws",
	"namn": "Make 3 Great Curveball throws in a row.",
	"number": "false"
	//"Pokemon encounter(Onix)"
},{
	"group": "Throws",
	"namn": "Make 3 Great throws in a row.",
	"number": "false"
	//"(5 / 10) Ultra Balls / 1 Rare Candy / Pokemon encounter(Onix)"
},{
	"group": "Throws",
	"namn": "Make 3 Great throws.",
	"number": "false"
	//"400 Stardust / 1 Pinap Berry / 3 Razz Berries / 5 Poke Balls / Pokemon encounter(Gastly / Onix)"
},{
	"group": "Throws",
	"namn": "Make 5 Curveball throws in a row.",
	"number": "false"
	//"(1 / 2) Pinap Berries / 6 Nanab Berries / 5 Great Balls"
},{
	"group": "Throws",
	"namn": "Make 5 Great throws.",
	"number": "false"
	//"5 Razz Berries"
},{
	"group": "Throws",
	"namn": "Make 5 Nice throws.",
	"number": "false"
	//"5 Poke Balls / 3 Razz Berries / 1 Pinap Berry / 400 Stardust / Pokemon encounter(Voltorb)"
},{
	"group": "Throws",
	"namn": "Make an Excellent Curveball throw.",
	"number": "false"
	//"Pokemon encounter(Absol)"
},{
	"group": "Throws",
	"namn": "Make an Excellent throw.",
	"number": "false"
	//"1000 Stardust / 5 Great Balls / 2 Ultra Balls / 2 Pinap Berries"
},{
	"group": "Power up",
	"namn": "Power up a Pokemon 3 times.",
	"number": "false"
	//"Pokemon encounter(Staryu)"
},{
	"group": "Power up",
	"namn": "Power up a Pokemon 5 times.",
	"number": "false"
	//"Pokemon encounter(Bulbasaur / Charmander / Squirtle)"
},{
	"group": "Spin",
	"namn": "Spin 6 PokeStops you haven't visited before.",
	"number": "false"
	//"Pokemon encounter(Aerodactyl)"
},{
	"group": "Berries",
	"namn": "Use 5 Berries to help catch Pokemon.",
	"number": "false"
	//"1000 Stardust / 6 Razz Berries"
},{
	"group": "Gym",
	"namn": "Use a Super Effective Charged attack in 5 Gym battles",
	"number": "false"
	//"1x Charged TM"
},{
	"group": "Gym",
	"namn": "Use a Super Effective Charged attack in 7 Gym battles.",
	"number": "false"
	//"2000 Stardust / 6 Revives / 3 Super Potions / 1 Max Revive / 1 Rare Candy / Pokemon encounter(Electabuzz)"
},{
	"group": "Gym",
	"namn": "Use a Super Effective Charged attack in a Gym battle.",
	"number": "false"
	//"4 Revives / 3 Super Potions"
},{
	"group": "Gym",
	"namn": "Win 3 Gym battles.",
	"number": "false"
	//"3 Hyper Potions / 1 Max Revive / 1 Rare Candy / Pokemon encounter(Kingler)"
},{
	"group": "Gym",
	"namn": "Win a Gym battle.",
	"number": "false"
	//"5 Potions / 4 Revives / Pokemon encounter(Bulbasaur / Charmander / Squirtle)"
},{
	"group": "Raid",
	"namn": "Win a level 3 or higher raid.",
	"number": "false"
	//"1 Rare Candy"
},{
	"group": "Raid",
	"namn": "Win a raid.",
	"number": "false"
	//"10 Nanab Berries / 3 Super Potions"
}];

var secretpokm = [
	{"sok": "Adventure Week: Earn 3 Candy walking with your Buddy.", "pkm": [140, 138]},
	{"sok": "Adventure Week: Evolve a Kabuto or Omanyte.", "pkm": [142]},
	{"sok": "Adventure Week: Hatch 2 Eggs.", "pkm": [138]},
	{"sok": "Battle in a Gym 3 times.", "pkm": [124]},
	{"sok": "Battle in a Gym 5 times.", "pkm": [66, 1]},
	{"sok": "Battle in a Gym.", "pkm": [116]},
	{"sok": "Catch 10 Pokemon.", "pkm": [129, 103]},
	{"sok": "Catch 3 Bug-type Pokémon", "pkm": [127]},
	{"sok": "Catch 3 Electric, Water, or Bug-type Pokemon.", "pkm": [309]},
	{"sok": "Catch 5 Pokemon with Weather Boost.", "pkm": [37]},
	{"sok": "Catch a Dragon-type Pokemon.", "pkm": [147]},
	{"sok": "Earn a Candy walking with your buddy.", "pkm": [98]},
	{"sok": "Evolve a Pokemon.", "pkm": [133]},
	{"sok": "Evolve a Water-type Pokemon.", "pkm": [86]},
	{"sok": "Hatch 5 Eggs.", "pkm": [113]},
	{"sok": "Hatch an Egg.", "pkm": [102]},
	{"sok": "Make 3 Curveball throws in a row.", "pkm": [55]},
	{"sok": "Make 3 Excellent throws in a row.", "pkm": [246]},
	{"sok": "Make 3 Excellent throws.", "pkm": [246]},
	{"sok": "Make 3 Great Curveball throws in a row.", "pkm": [95]},
	{"sok": "Make 3 Great throws in a row.", "pkm": [95]},
	{"sok": "Make 3 Great throws.", "pkm": [92, 95]},
	{"sok": "Make 5 Nice throws.", "pkm": [100]},
	{"sok": "Make an Excellent Curveball throw.", "pkm": [359]},
	{"sok": "Power up a Pokemon 3 times.", "pkm": [120]},
	{"sok": "Power up a Pokemon 5 times.", "pkm": [1, 4, 7]},
	{"sok": "Spin 6 PokeStops you haven't visited before.", "pkm": [142]},
	{"sok": "Use a Super Effective Charged attack in 7 Gym battles.", "pkm": [125]},
	{"sok": "Win 3 Gym battles.", "pkm": [99]},
	{"sok": "Win a Gym battle.", "pkm": [1, 4, 7]}
];
/*var secretpokm = [
	{"sok": "Catch a Dragon-type Pokémon.", "pkm": [147]},
	{"sok": "Catch 3 Oddish or Bellsprout.", "pkm": [114]},
	{"sok": "Catch 3 Pidgey or Murkrow.", "pkm": [23]},
	{"sok": "Catch 3 Treecko or Mudkip.", "pkm": [255]},
	{"sok": "Catch 3 Meowth or Skitty.", "pkm": [58]},
	{"sok": "Catch 3 Poison-type Pokémon.", "pkm": [1, 88, 92]},
	{"sok": "Catch 3 Bug-type Pokémon.", "pkm": [127]},
	{"sok": "Catch 3 Dark-type Pokémon.", "pkm": [228]},
	{"sok": "Catch 3 Electric-type Pokémon.", "pkm": [25]},
	{"sok": "Catch 3 Flying-type Pokémon.", "pkm": [84]},
	{"sok": "Catch 3 Fire-type Pokémon.", "pkm": [77, 219]},
	{"sok": "Catch 3 Grass-, Fire-, or Ground-type Pokémon.", "pkm": [322]},
	{"sok": "Catch 5 Fire-type Pokémon.", "pkm": [136]},
	{"sok": "Catch 5 Pokémon with Weather Boost.", "pkm": [37, 60]},
	{"sok": "Catch 10 Pokémon.", "pkm": [100, 103, 129]},
	{"sok": "Catch 10 Pokémon with Weather Boost.", "pkm": [60]},
	{"sok": "Catch 20 Pokémon with Weather Boost.", "pkm": [38]},
	{"sok": "Power up Pokémon 5 times.", "pkm": [1, 4, 7]},
	{"sok": "Evolve a Pokémon.", "pkm": [37, 133]},
	{"sok": "Evolve 5 Fire-type Pokémon.", "pkm": [136]},
	{"sok": "Hatch an Egg.", "pkm": [102]},
	{"sok": "Hatch 3 Eggs.", "pkm": [126]},
	{"sok": "Hatch 5 Eggs.", "pkm": [113]},
	{"sok": "Make 3 Nice Throws.", "pkm": [100]},
	{"sok": "Make 5 Nice Throws.", "pkm": [100]},
	{"sok": "Make 3 Great Throws.", "pkm": [92, 95]},
	{"sok": "Make 3 Great Throws in a row.", "pkm": [95]},
	{"sok": "Make 3 Great Curveball Throws.", "pkm": [5]},
	{"sok": "Make 3 Excellent Throws.", "pkm": [246]},
	{"sok": "Make 3 Excellent Throws in a row.", "pkm": [95, 246]},
	{"sok": "Battle in a Gym.", "pkm": [1, 4, 7, 56, 60, 228, 322]},
	{"sok": "Battle in a Gym 5 times.", "pkm": [1, 66]},
	{"sok": "Win a Gym battle.", "pkm": [1, 4, 7]},
	{"sok": "Win 3 Gym battles.", "pkm": [124]},
	{"sok": "Win 2 raids.", "pkm": [156]},
	{"sok": "Win 5 raids.", "pkm": [157]},
	{"sok": "Use a supereffective Charged Attack in 7 Gym battles.", "pkm": [125]},
	{"sok": "Spin 3 PokéStops you haven’t visited before.", "pkm": [77]}
]*/