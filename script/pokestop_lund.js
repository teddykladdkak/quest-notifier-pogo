var pokestop = [ //Source: https://www.pokemongomap.info/
	{"namn": "Ballongvisp", "latitude": 55.710167, "longitude": 13.187168},
	{"namn": "Lund Central Station Entrance", "latitude": 55.70543, "longitude": 13.187267},
	{"namn": "Lunds Stadsvall", "latitude": 55.699458, "longitude": 13.199444},
	{"namn": "Graffiti Booth", "latitude": 55.710004, "longitude": 13.24766},
	{"namn": "Välkommen Till Lund Nöbbelöv", "latitude": 55.729779, "longitude": 13.177719},
	{"namn": "Västerkyrkan", "latitude": 55.708289, "longitude": 13.181561},
	{"namn": "Schackpjäs", "latitude": 55.740858, "longitude": 13.17167},
	{"namn": "Sad Centipede and Hippo", "latitude": 55.722216, "longitude": 13.203597},
	{"namn": "Pillar Shapes", "latitude": 55.706398, "longitude": 13.195743},
	{"namn": "Bulls Silhouettes", "latitude": 55.726811, "longitude": 13.226502},
	{"namn": "Rehabiliteringsträdgård", "latitude": 55.658331, "longitude": 13.089356},
	{"namn": "Skulptur I Diabas", "latitude": 55.708207, "longitude": 13.198073},
	{"namn": "Metal Leaf", "latitude": 55.713539, "longitude": 13.212637},
	{"namn": "Lundatornet", "latitude": 55.707546, "longitude": 13.206119},
	{"namn": "The Labyrinth", "latitude": 55.700483, "longitude": 13.187059},
	{"namn": "Bosmalatorpet", "latitude": 55.705137, "longitude": 13.197951},
	{"namn": "Olof", "latitude": 55.713997, "longitude": 13.194301},
	{"namn": "Monster Store", "latitude": 55.696815, "longitude": 13.186102},
	{"namn": "Fountain at Kristallen", "latitude": 55.708805, "longitude": 13.184709},
	{"namn": "Ljungvalla IP", "latitude": 55.77583, "longitude": 13.08525},
	{"namn": "Fontän Bakom Stadsbiblioteket", "latitude": 55.707209, "longitude": 13.190793},
	{"namn": "Felled", "latitude": 55.703211, "longitude": 13.20348},
	{"namn": "Ekobasgrytet", "latitude": 55.724101, "longitude": 13.190534},
	{"namn": "Zebra - LTH Lunds Universitet", "latitude": 55.710364, "longitude": 13.203871},
	{"namn": "S:t Peter's Kyrka", "latitude": 55.70664, "longitude": 13.192615},
	{"namn": "Ventilation", "latitude": 55.715291, "longitude": 13.21233},
	{"namn": "Lunds Fjärrvärmecentral", "latitude": 55.721961, "longitude": 13.153148},
	{"namn": "Sköldpadda", "latitude": 55.700021, "longitude": 13.186846},
	{"namn": "Green Maze", "latitude": 55.705212, "longitude": 13.196958},
	{"namn": "Power Ring", "latitude": 55.692732, "longitude": 13.208574},
	{"namn": "Gamla Barnsjukhuset The Old Children Hospital", "latitude": 55.707949, "longitude": 13.194372},
	{"namn": "Mother and Child", "latitude": 55.711191, "longitude": 13.197475},
	{"namn": "Syntax by Kirsten Ortwed", "latitude": 55.708871, "longitude": 13.198507},
	{"namn": "Borgen", "latitude": 55.705207, "longitude": 13.19132},
	{"namn": "Församlingen Ad Fontes", "latitude": 55.699473, "longitude": 13.191762},
	{"namn": "Granathen", "latitude": 55.712681, "longitude": 13.203821},
	{"namn": "Asymmetric Graphite", "latitude": 55.710226, "longitude": 13.2135},
	{"namn": "Fäladshallen", "latitude": 55.724148, "longitude": 13.200019},
	{"namn": "Åkarps Gamla Stationshus", "latitude": 55.655434, "longitude": 13.105851},
	{"namn": "Mobile Pond", "latitude": 55.717985, "longitude": 13.227597},
	{"namn": "Lunds Tekniska Högskola Kårhuset", "latitude": 55.712326, "longitude": 13.208553},
	{"namn": "Ulrikedal Playground (Vegaparken)", "latitude": 55.698643, "longitude": 13.20589},
	{"namn": "North Gate of the Medevial City of Lund", "latitude": 55.708978, "longitude": 13.192941},
	{"namn": "Red Fountain", "latitude": 55.698426, "longitude": 13.182652},
	{"namn": "Hammer Staircase", "latitude": 55.708584, "longitude": 13.193362},
	{"namn": "Stor Stark", "latitude": 55.710722, "longitude": 13.210244},
	{"namn": "V on the hill", "latitude": 55.712438, "longitude": 13.210444},
	{"namn": "Båten", "latitude": 55.737533, "longitude": 13.177095},
	{"namn": "Waving Elephant", "latitude": 55.712536, "longitude": 13.201023},
	{"namn": "Living Ore", "latitude": 55.709748, "longitude": 13.205249},
	{"namn": "Chair", "latitude": 55.696708, "longitude": 13.18649},
	{"namn": "Planetstaden Playground", "latitude": 55.697775, "longitude": 13.212784},
	{"namn": "Runsten från Vikingatiden", "latitude": 55.666042, "longitude": 13.140951},
	{"namn": "Lunds Stadsgräns", "latitude": 55.676873, "longitude": 13.229019},
	{"namn": "Fountain", "latitude": 55.71532, "longitude": 13.191906},
	{"namn": "Huset", "latitude": 55.715873, "longitude": 13.177213},
	{"namn": "Shape's 3D Glyph", "latitude": 55.712491, "longitude": 13.209593},
	{"namn": "10th Century West Gate into Lund", "latitude": 55.703787, "longitude": 13.185317},
	{"namn": "Student Literature", "latitude": 55.720776, "longitude": 13.166217},
	{"namn": "Lundagård Tavla", "latitude": 55.70614, "longitude": 13.193843},
	{"namn": "Western Gate Of Jakriborg", "latitude": 55.675228, "longitude": 13.13388},
	{"namn": "Runslingans Bool Bana", "latitude": 55.692885, "longitude": 13.246315},
	{"namn": "Check your Dog Statue on Porfyrvagen", "latitude": 55.694535, "longitude": 13.221199},
	{"namn": "Bridge Over Troubled Water", "latitude": 55.724493, "longitude": 13.191916},
	{"namn": "Abstract Plaza", "latitude": 55.694128, "longitude": 13.191817},
	{"namn": "Park Clock", "latitude": 55.69987, "longitude": 13.188949},
	{"namn": "Church of the Latter Day Saints - Lund", "latitude": 55.720369, "longitude": 13.171311},
	{"namn": "Lunds Nation Student Dorm", "latitude": 55.700804, "longitude": 13.201627},
	{"namn": "Mini Grotta", "latitude": 55.724108, "longitude": 13.178365},
	{"namn": "AF Borgen", "latitude": 55.705433, "longitude": 13.195445},
	{"namn": "Hängmatta", "latitude": 55.712913, "longitude": 13.164757},
	{"namn": "The Gate of Jakriborg", "latitude": 55.673991, "longitude": 13.135728},
	{"namn": "Brunnshögs Kojskog", "latitude": 55.718551, "longitude": 13.23795},
	{"namn": "Tegnérhuset", "latitude": 55.704205, "longitude": 13.191227},
	{"namn": "Juridicum", "latitude": 55.705081, "longitude": 13.191602},
	{"namn": "City Silhouette.", "latitude": 55.720404, "longitude": 13.1944},
	{"namn": "Folkparken", "latitude": 55.704525, "longitude": 13.166535},
	{"namn": "Carl Linnæus Statue", "latitude": 55.706527, "longitude": 13.192126},
	{"namn": "Boat for Sand", "latitude": 55.731384, "longitude": 13.173219},
	{"namn": "Fysicum Fountain", "latitude": 55.710556, "longitude": 13.203498},
	{"namn": "Uggla På Spaning", "latitude": 55.698941, "longitude": 13.198053},
	{"namn": "Woody Waves", "latitude": 55.704802, "longitude": 13.155138},
	{"namn": "Blue Clock", "latitude": 55.708132, "longitude": 13.185989},
	{"namn": "Lunds Örn På Hörnan", "latitude": 55.703217, "longitude": 13.192474},
	{"namn": "Hallowed Altar", "latitude": 55.733145, "longitude": 13.181833},
	{"namn": "F", "latitude": 55.710968, "longitude": 13.206805},
	{"namn": "Glasskulptur", "latitude": 55.700008, "longitude": 13.202098},
	{"namn": "Tåget I Stadsparken", "latitude": 55.699458, "longitude": 13.18699},
	{"namn": "Klosterkyrkan", "latitude": 55.704234, "longitude": 13.18587},
	{"namn": "Knotted Tree", "latitude": 55.713333, "longitude": 13.212605},
	{"namn": "Squirrel", "latitude": 55.700934, "longitude": 13.198454},
	{"namn": "Otto Lindblad", "latitude": 55.70491, "longitude": 13.19452},
	{"namn": "Lost at Sea", "latitude": 55.707789, "longitude": 13.231064},
	{"namn": "North Cemetery Bell Tower", "latitude": 55.715865, "longitude": 13.191606},
	{"namn": "Flormanska Stiftelsen", "latitude": 55.703236, "longitude": 13.196196},
	{"namn": "Garage Art", "latitude": 55.698513, "longitude": 13.180821},
	{"namn": "Botaniska Kartan", "latitude": 55.704195, "longitude": 13.204931},
	{"namn": "Walls #3 on John Ericssons vag", "latitude": 55.71214, "longitude": 13.209348},
	{"namn": "Metalltupp", "latitude": 55.657753, "longitude": 13.0869},
	{"namn": "Flower Shield", "latitude": 55.705846, "longitude": 13.198631},
	{"namn": "Abstract Geometry", "latitude": 55.69506, "longitude": 13.2419},
	{"namn": "Earth", "latitude": 55.693855, "longitude": 13.224808},
	{"namn": "Lomma Zoo", "latitude": 55.683335, "longitude": 13.105408},
	{"namn": "Alzheimerföreningens Slott", "latitude": 55.710132, "longitude": 13.191669},
	{"namn": "Alfalaval Lund", "latitude": 55.721821, "longitude": 13.157913},
	{"namn": "Bear Statue", "latitude": 55.723532, "longitude": 13.215577},
	{"namn": "Fågelhyddan", "latitude": 55.724303, "longitude": 13.198222},
	{"namn": "Gambrinus", "latitude": 55.704013, "longitude": 13.189161},
	{"namn": "S:T Stefans", "latitude": 55.698907, "longitude": 13.19075},
	{"namn": "Borg", "latitude": 55.702711, "longitude": 13.190366},
	{"namn": "Allhelgonaklostret", "latitude": 55.709694, "longitude": 13.197279},
	{"namn": "Tak", "latitude": 55.729691, "longitude": 13.192896},
	{"namn": "Castel El Play", "latitude": 55.720752, "longitude": 13.181481},
	{"namn": "Colored light art.", "latitude": 55.721753, "longitude": 13.203438},
	{"namn": "Constantly Changing Wall Art", "latitude": 55.703039, "longitude": 13.186976},
	{"namn": "Tree dragon", "latitude": 55.729381, "longitude": 13.173789},
	{"namn": "Word of the Lord - Statue", "latitude": 55.703773, "longitude": 13.193488},
	{"namn": "Det Lilla Stora Lusthuset", "latitude": 55.701463, "longitude": 13.188712},
	{"namn": "Lackalänga Minneskapell", "latitude": 55.776897, "longitude": 13.111609},
	{"namn": "Naturreservat", "latitude": 55.706835, "longitude": 13.15366},
	{"namn": "Blaeddran", "latitude": 55.691275, "longitude": 13.173936},
	{"namn": "Dragons", "latitude": 55.700282, "longitude": 13.199165},
	{"namn": "The Tunnel", "latitude": 55.704778, "longitude": 13.197292},
	{"namn": "Vattenhallen", "latitude": 55.711955, "longitude": 13.211533},
	{"namn": "Fontän Vid Kyrkan", "latitude": 55.704314, "longitude": 13.185673},
	{"namn": "Monument I Stenimitation", "latitude": 55.697095, "longitude": 13.184847},
	{"namn": "Totem Pole", "latitude": 55.72898, "longitude": 13.173703},
	{"namn": "Lunds stads gräns", "latitude": 55.71626, "longitude": 13.159559},
	{"namn": "Giant Play Park Nya Linero", "latitude": 55.701786, "longitude": 13.252217},
	{"namn": "En Krok", "latitude": 55.703407, "longitude": 13.177364},
	{"namn": "Museum of History", "latitude": 55.704383, "longitude": 13.194744},
	{"namn": "St Jakobs Kyrka", "latitude": 55.704933, "longitude": 13.189596},
	{"namn": "Stones in Land", "latitude": 55.703023, "longitude": 13.218227},
	{"namn": "Blue Wave", "latitude": 55.696303, "longitude": 13.174427},
	{"namn": "Lion Gate", "latitude": 55.708175, "longitude": 13.18772},
	{"namn": "SLU", "latitude": 55.657796, "longitude": 13.082284},
	{"namn": "Welcome Sign", "latitude": 55.722468, "longitude": 13.202146},
	{"namn": "Högevallsbadet", "latitude": 55.70044, "longitude": 13.183771},
	{"namn": "Höjdådalen", "latitude": 55.698361, "longitude": 13.157816},
	{"namn": "Owl", "latitude": 55.705781, "longitude": 13.196076},
	{"namn": "Little Garden", "latitude": 55.700943, "longitude": 13.19579},
	{"namn": "Ideon Seagull", "latitude": 55.714299, "longitude": 13.214554},
	{"namn": "Blue Playpark", "latitude": 55.713081, "longitude": 13.227199},
	{"namn": "Lunds Universitetssjukhus Info", "latitude": 55.710293, "longitude": 13.196874},
	{"namn": "Hedda Andersson Student House", "latitude": 55.711122, "longitude": 13.189058},
	{"namn": "Children Playing", "latitude": 55.70419, "longitude": 13.18752},
	{"namn": "Mamma med barn", "latitude": 55.651677, "longitude": 13.109152},
	{"namn": "Gullåkra Natur- Och Rekreationsområde", "latitude": 55.655823, "longitude": 13.216583},
	{"namn": "Gymnastikhus på Hvilan", "latitude": 55.651038, "longitude": 13.115777},
	{"namn": "Quercus", "latitude": 55.702867, "longitude": 13.202501},
	{"namn": "Cirkelns Expansion", "latitude": 55.708197, "longitude": 13.197233},
	{"namn": "Välkommen Till Kävlinge Kommun", "latitude": 55.771216, "longitude": 13.082446},
	{"namn": "Tennis Court of Madness", "latitude": 55.727294, "longitude": 13.204196},
	{"namn": "nova monilith", "latitude": 55.712731, "longitude": 13.157321},
	{"namn": "Climbing Adventure", "latitude": 55.698696, "longitude": 13.201802},
	{"namn": "Bingo", "latitude": 55.721807, "longitude": 13.179613},
	{"namn": "Roby Lund", "latitude": 55.689194, "longitude": 13.237884},
	{"namn": "The Old Gate", "latitude": 55.710893, "longitude": 13.193093},
	{"namn": "St. Lars Park", "latitude": 55.681679, "longitude": 13.177077},
	{"namn": "Battleship", "latitude": 55.729578, "longitude": 13.205746},
	{"namn": "Åkarps Bibliotek", "latitude": 55.656361, "longitude": 13.110826},
	{"namn": "House in a House", "latitude": 55.711545, "longitude": 13.201373},
	{"namn": "Husbåt Park", "latitude": 55.721682, "longitude": 13.163153},
	{"namn": "Pavillion at City Libary", "latitude": 55.707165, "longitude": 13.191473},
	{"namn": "Murarvägens Lekplats", "latitude": 55.652433, "longitude": 13.20813},
	{"namn": "MAX IV", "latitude": 55.72623, "longitude": 13.235539},
	{"namn": "The Well of Faith", "latitude": 55.703989, "longitude": 13.195772},
	{"namn": "Harald BT", "latitude": 55.716656, "longitude": 13.226626},
	{"namn": "Lund Trainstation", "latitude": 55.705066, "longitude": 13.187394},
	{"namn": "Skåne Siluett", "latitude": 55.711085, "longitude": 13.168554},
	{"namn": "Trädgårdslundens Lekplats", "latitude": 55.672343, "longitude": 13.153507},
	{"namn": "Samvetet", "latitude": 55.706821, "longitude": 13.194128},
	{"namn": "Mini Castle", "latitude": 55.704906, "longitude": 13.203531},
	{"namn": "Stångby Library", "latitude": 55.750997, "longitude": 13.196503},
	{"namn": "Crest On Bricks", "latitude": 55.707689, "longitude": 13.187741},
	{"namn": "KG Colorful Playground", "latitude": 55.693106, "longitude": 13.180895},
	{"namn": "Elephant and Crocodile", "latitude": 55.721729, "longitude": 13.208563},
	{"namn": "Gigant Spinner", "latitude": 55.70122, "longitude": 13.179001},
	{"namn": "Classicum", "latitude": 55.706964, "longitude": 13.198857},
	{"namn": "Flicka Med Fruktfat", "latitude": 55.724238, "longitude": 13.177447},
	{"namn": "Faculty Of Biology", "latitude": 55.713376, "longitude": 13.207956},
	{"namn": "Hexagon", "latitude": 55.71716, "longitude": 13.193546},
	{"namn": "Wallflower", "latitude": 55.730266, "longitude": 13.20308},
	{"namn": "Tree Face", "latitude": 55.724434, "longitude": 13.188393},
	{"namn": "Stenar På Stolpar", "latitude": 55.700106, "longitude": 13.184387},
	{"namn": "Entre Till Stadsparken", "latitude": 55.701222, "longitude": 13.185797},
	{"namn": "Big Shiny Metal Thingy", "latitude": 55.717116, "longitude": 13.200082},
	{"namn": "Windy Boomerang", "latitude": 55.711468, "longitude": 13.210564},
	{"namn": "Planets in the Ground", "latitude": 55.695901, "longitude": 13.196017},
	{"namn": "Venus Bike Trap", "latitude": 55.710758, "longitude": 13.207347},
	{"namn": "Skarpskyttemålet", "latitude": 55.724455, "longitude": 13.189494},
	{"namn": "Concrete Turbine", "latitude": 55.699954, "longitude": 13.187916},
	{"namn": "A locomotive", "latitude": 55.723617, "longitude": 13.158328},
	{"namn": "Stora Valvet", "latitude": 55.70856, "longitude": 13.195185},
	{"namn": "Lindhaga Klocka", "latitude": 55.653192, "longitude": 13.111714},
	{"namn": "Åkarps Station", "latitude": 55.657841, "longitude": 13.10891},
	{"namn": "Glass Bowl", "latitude": 55.718396, "longitude": 13.228488},
	{"namn": "Slutet För Tuna Slott", "latitude": 55.707408, "longitude": 13.210619},
	{"namn": "Folkhogskolan Hvilan", "latitude": 55.65063, "longitude": 13.115877},
	{"namn": "Hjärups Församlingsgård", "latitude": 55.668707, "longitude": 13.139786},
	{"namn": "Micklagård", "latitude": 55.708796, "longitude": 13.181177},
	{"namn": "Joh. Henr. Thomanders Studenthem", "latitude": 55.707233, "longitude": 13.196566},
	{"namn": "Svampar", "latitude": 55.701876, "longitude": 13.210073},
	{"namn": "Radiation Therapy Building", "latitude": 55.710784, "longitude": 13.195539},
	{"namn": "StonyArt", "latitude": 55.70567, "longitude": 13.158792},
	{"namn": "S:t Olof Chapel", "latitude": 55.715917, "longitude": 13.190137},
	{"namn": "Home of Hjalmar Gullberg", "latitude": 55.702406, "longitude": 13.187822},
	{"namn": "Röd Liggande Stege", "latitude": 55.651982, "longitude": 13.213693},
	{"namn": "Bridge", "latitude": 55.738425, "longitude": 13.156922},
	{"namn": "S:ta Maria Magle", "latitude": 55.702743, "longitude": 13.199205},
	{"namn": "Rymdfält Av Frid", "latitude": 55.702583, "longitude": 13.193178},
	{"namn": "Vindruvedörren", "latitude": 55.711001, "longitude": 13.19188},
	{"namn": "Wibbly Wobbly Lines Undergroun", "latitude": 55.717208, "longitude": 13.207443},
	{"namn": "Växtkraft", "latitude": 55.687749, "longitude": 13.193976},
	{"namn": "Draped Concrete Wall", "latitude": 55.698637, "longitude": 13.190509},
	{"namn": "Stora Råby Kyrka", "latitude": 55.685832, "longitude": 13.224941},
	{"namn": "Staffanstorp Raceway", "latitude": 55.656057, "longitude": 13.222792},
	{"namn": "Lunds Bryggeri", "latitude": 55.711316, "longitude": 13.191515},
	{"namn": "Info Mechanic", "latitude": 55.710481, "longitude": 13.204978},
	{"namn": "Sparbanken Skåne Arena", "latitude": 55.6971, "longitude": 13.180114},
	{"namn": "Gymnasieskolan Vipan", "latitude": 55.702212, "longitude": 13.221214},
	{"namn": "Giant Beer", "latitude": 55.71303, "longitude": 13.2108},
	{"namn": "Angry Bord Bin", "latitude": 55.709885, "longitude": 13.167854},
	{"namn": "Sven Nilsson", "latitude": 55.705444, "longitude": 13.193155},
	{"namn": "Fish Fountain and Lamp", "latitude": 55.703265, "longitude": 13.190273},
	{"namn": "Ladugårdsmarksstråket", "latitude": 55.72987, "longitude": 13.213678},
	{"namn": "Wooden Boat (Delfi)", "latitude": 55.723769, "longitude": 13.211001},
	{"namn": "Black Diabase Triangle", "latitude": 55.713805, "longitude": 13.178606},
	{"namn": "The Black Shield", "latitude": 55.724345, "longitude": 13.195013},
	{"namn": "Tonsättarstenen", "latitude": 55.653253, "longitude": 13.111035},
	{"namn": "Wooden Boat (Magistratsvägen)", "latitude": 55.722023, "longitude": 13.205287},
	{"namn": "Wooden Squirrel", "latitude": 55.686299, "longitude": 13.175972},
	{"namn": "Kompassen", "latitude": 55.714108, "longitude": 13.20021},
	{"namn": "Solgubbe", "latitude": 55.703165, "longitude": 13.188693},
	{"namn": "Verba Volant Scripta Manet", "latitude": 55.708505, "longitude": 13.199697},
	{"namn": "Lekplats Trekanter", "latitude": 55.651554, "longitude": 13.202571},
	{"namn": "EOS", "latitude": 55.703494, "longitude": 13.194961},
	{"namn": "Eagle of Stone", "latitude": 55.703328, "longitude": 13.202986},
	{"namn": "S:T Trinitatis", "latitude": 55.702081, "longitude": 13.191823},
	{"namn": "Stencirkel", "latitude": 55.678857, "longitude": 13.0921},
	{"namn": "Scientist-Cell Confession Dialogue", "latitude": 55.712202, "longitude": 13.201728},
	{"namn": "Stenpartiet", "latitude": 55.704055, "longitude": 13.202573},
	{"namn": "Home of August Strindberg", "latitude": 55.702107, "longitude": 13.19007},
	{"namn": "Gympark", "latitude": 55.69942, "longitude": 13.244599},
	{"namn": "Psykiatrisk Klinik", "latitude": 55.717534, "longitude": 13.190027},
	{"namn": "Tre Blå Korvar På Pinne", "latitude": 55.71764, "longitude": 13.228637},
	{"namn": "Trädboll", "latitude": 55.702529, "longitude": 13.201474},
	{"namn": "Radioactive Storage", "latitude": 55.706618, "longitude": 13.19906},
	{"namn": "Joy of Movement", "latitude": 55.708929, "longitude": 13.201565},
	{"namn": "Axis of Time", "latitude": 55.715466, "longitude": 13.214801},
	{"namn": "Lunds Stads Gräns", "latitude": 55.706624, "longitude": 13.260449},
	{"namn": "Sliding Stones", "latitude": 55.713286, "longitude": 13.211651},
	{"namn": "Fyrklöverns Trädgård Main Entrance", "latitude": 55.721549, "longitude": 13.218984},
	{"namn": "Circle King", "latitude": 55.718823, "longitude": 13.193375},
	{"namn": "C A Agardh", "latitude": 55.70195, "longitude": 13.201664},
	{"namn": "Saluhallen", "latitude": 55.701723, "longitude": 13.195048},
	{"namn": "Gullåkra information board", "latitude": 55.653717, "longitude": 13.201965},
	{"namn": "Statue Ulrikedal", "latitude": 55.697938, "longitude": 13.204952},
	{"namn": "Lund Fairtraide City", "latitude": 55.718077, "longitude": 13.21078},
	{"namn": "Wrangel", "latitude": 55.706672, "longitude": 13.199819},
	{"namn": "Sälen", "latitude": 55.709177, "longitude": 13.243905},
	{"namn": "Playing Beneath the Road", "latitude": 55.719489, "longitude": 13.20912},
	{"namn": "Hästen", "latitude": 55.689586, "longitude": 13.198139},
	{"namn": "Vällingklockan", "latitude": 55.656777, "longitude": 13.085016},
	{"namn": "Ling Monument", "latitude": 55.700019, "longitude": 13.185177},
	{"namn": "Stone Sculpture", "latitude": 55.703866, "longitude": 13.188164},
	{"namn": "Lettered Black Wall", "latitude": 55.707325, "longitude": 13.197279},
	{"namn": "Bilprovningen Monolith in Lund", "latitude": 55.692976, "longitude": 13.220015},
	{"namn": "Möllegården infotavla", "latitude": 55.65007, "longitude": 13.111997},
	{"namn": "Giant Slide", "latitude": 55.72942, "longitude": 13.216528},
	{"namn": "The Faculty of Science", "latitude": 55.711571, "longitude": 13.204861},
	{"namn": "Knästorp Kyrka", "latitude": 55.675789, "longitude": 13.199785},
	{"namn": "Lund Lighthouse", "latitude": 55.716444, "longitude": 13.151259},
	{"namn": "Jacques Borelius", "latitude": 55.707043, "longitude": 13.195876},
	{"namn": "Infoplate Lund", "latitude": 55.689699, "longitude": 13.187605},
	{"namn": "Päronlekan", "latitude": 55.693712, "longitude": 13.203346},
	{"namn": "Norra Fäladsstigen", "latitude": 55.723825, "longitude": 13.21041},
	{"namn": "Diving Pods on Land", "latitude": 55.722221, "longitude": 13.212947},
	{"namn": "Angel Monument", "latitude": 55.714365, "longitude": 13.190515},
	{"namn": "Fountain at Helgeands church", "latitude": 55.693649, "longitude": 13.179212},
	{"namn": "Urnan", "latitude": 55.70247, "longitude": 13.203957},
	{"namn": "Sven Ingvar", "latitude": 55.711515, "longitude": 13.19831},
	{"namn": "Axel", "latitude": 55.7132, "longitude": 13.193717},
	{"namn": "Rune Stone", "latitude": 55.704472, "longitude": 13.19609},
	{"namn": "Ernst Wigforss Fountain", "latitude": 55.7059, "longitude": 13.15877},
	{"namn": "Asklönn", "latitude": 55.704961, "longitude": 13.204272},
	{"namn": "Variations of a Theme", "latitude": 55.713868, "longitude": 13.209287},
	{"namn": "Fountain Lamp", "latitude": 55.702909, "longitude": 13.193116},
	{"namn": "Forest Duck", "latitude": 55.691796, "longitude": 13.171},
	{"namn": "Relief Konst På Vägg", "latitude": 55.704127, "longitude": 13.189938},
	{"namn": "Tufsen", "latitude": 55.70036, "longitude": 13.185951},
	{"namn": "Golden Thread", "latitude": 55.712652, "longitude": 13.200491},
	{"namn": "Broken Wall", "latitude": 55.711066, "longitude": 13.1745},
	{"namn": "Yellow Cat", "latitude": 55.704346, "longitude": 13.154131},
	{"namn": "Glass Art", "latitude": 55.711217, "longitude": 13.195673},
	{"namn": "Golden Triad Structure", "latitude": 55.712542, "longitude": 13.202991},
	{"namn": "A walk in the park", "latitude": 55.699641, "longitude": 13.184892},
	{"namn": "Viking Nation", "latitude": 55.710154, "longitude": 13.207566},
	{"namn": "Dahlgren", "latitude": 55.701791, "longitude": 13.180959},
	{"namn": "Round Playground", "latitude": 55.709102, "longitude": 13.174774},
	{"namn": "Flower 1912", "latitude": 55.706048, "longitude": 13.197062},
	{"namn": "Botulfsplatsen", "latitude": 55.701846, "longitude": 13.193936},
	{"namn": "Plommonvägen Fountain", "latitude": 55.693329, "longitude": 13.196722},
	{"namn": "Baby On A Turtle", "latitude": 55.718303, "longitude": 13.185075},
	{"namn": "Sculpture", "latitude": 55.702056, "longitude": 13.191108},
	{"namn": "Enter the Rainbow", "latitude": 55.718727, "longitude": 13.185202},
	{"namn": "Thousand years Grove", "latitude": 55.709535, "longitude": 13.24661},
	{"namn": "Walk By Höje Å", "latitude": 55.688986, "longitude": 13.167596},
	{"namn": "Underground Painting", "latitude": 55.720775, "longitude": 13.174845},
	{"namn": "Tree Lion Hare", "latitude": 55.701412, "longitude": 13.195672},
	{"namn": "Birdwatching Tower", "latitude": 55.698767, "longitude": 13.157257},
	{"namn": "Margot Hedeman Solspegel", "latitude": 55.706582, "longitude": 13.189092},
	{"namn": "Villa Sunna", "latitude": 55.700265, "longitude": 13.210537},
	{"namn": "Tullkammare", "latitude": 55.707156, "longitude": 13.1873},
	{"namn": "Penna", "latitude": 55.703274, "longitude": 13.191037},
	{"namn": "Magic Glider", "latitude": 55.701634, "longitude": 13.240346},
	{"namn": "Se-saw Att Brynjegränd", "latitude": 55.698269, "longitude": 13.237177},
	{"namn": "Höjdpunkten Bus Stop", "latitude": 55.715766, "longitude": 13.228474},
	{"namn": "röd och blå", "latitude": 55.714347, "longitude": 13.21556},
	{"namn": "Playpark", "latitude": 55.70005, "longitude": 13.249106},
	{"namn": "Equmeniakyrkan", "latitude": 55.775318, "longitude": 13.098547},
	{"namn": "Hidden Fountain", "latitude": 55.718937, "longitude": 13.187427},
	{"namn": "Info Alnarp", "latitude": 55.659436, "longitude": 13.08817},
	{"namn": "Bulten", "latitude": 55.709697, "longitude": 13.209719},
	{"namn": "Birds.", "latitude": 55.720705, "longitude": 13.188591},
	{"namn": "Sun Clock", "latitude": 55.710532, "longitude": 13.187828},
	{"namn": "A Little Slide", "latitude": 55.705594, "longitude": 13.156595},
	{"namn": "ING-Monument", "latitude": 55.712816, "longitude": 13.210175},
	{"namn": "J.G. Agardh", "latitude": 55.705314, "longitude": 13.203153},
	{"namn": "Singlade Slant", "latitude": 55.692629, "longitude": 13.173678},
	{"namn": "Football Fields", "latitude": 55.668391, "longitude": 13.154302},
	{"namn": "Playfort", "latitude": 55.714954, "longitude": 13.177379},
	{"namn": "Botaniska Trädgården Lund", "latitude": 55.704711, "longitude": 13.202542},
	{"namn": "City Art", "latitude": 55.701064, "longitude": 13.190872},
	{"namn": "Eos the Rose Fingered", "latitude": 55.707316, "longitude": 13.188439},
	{"namn": "Sumpcypress", "latitude": 55.70375, "longitude": 13.203809},
	{"namn": "A Hoop", "latitude": 55.721953, "longitude": 13.206586},
	{"namn": "Torns Ryttarförening", "latitude": 55.741305, "longitude": 13.184408},
	{"namn": "Scout Lily", "latitude": 55.730606, "longitude": 13.204118},
	{"namn": "Hacke Wants You", "latitude": 55.711364, "longitude": 13.210046},
	{"namn": "Pale Tree", "latitude": 55.721083, "longitude": 13.188338},
	{"namn": "Råby Lunds Utegym", "latitude": 55.688179, "longitude": 13.229673},
	{"namn": "Gravplats", "latitude": 55.712317, "longitude": 13.193275},
	{"namn": "Birdman Sculpture", "latitude": 55.705416, "longitude": 13.212166},
	{"namn": "Hillfontänen", "latitude": 55.70281, "longitude": 13.196451},
	{"namn": "Dalamoose", "latitude": 55.709407, "longitude": 13.215071},
	{"namn": "Portal to the North", "latitude": 55.717849, "longitude": 13.16762},
	{"namn": "Ostrolocvs", "latitude": 55.704518, "longitude": 13.19808},
	{"namn": "Lekplatsen på gränden", "latitude": 55.726018, "longitude": 13.203936},
	{"namn": "Lusthus", "latitude": 55.729574, "longitude": 13.168224},
	{"namn": "S:t Lars Cemetery", "latitude": 55.682133, "longitude": 13.169035},
	{"namn": "Sankt Hans kyrka.", "latitude": 55.723319, "longitude": 13.204222},
	{"namn": "Color house", "latitude": 55.71982, "longitude": 13.188815},
	{"namn": "Crystal Portal", "latitude": 55.708695, "longitude": 13.185464},
	{"namn": "Metal house With Holes", "latitude": 55.710371, "longitude": 13.194896},
	{"namn": "Tower of Time", "latitude": 55.724113, "longitude": 13.202381},
	{"namn": "Champagne Fountain", "latitude": 55.709855, "longitude": 13.195136},
	{"namn": "Ding Dong", "latitude": 55.724194, "longitude": 13.197705},
	{"namn": "Rymdlekplatsen", "latitude": 55.667559, "longitude": 13.142772},
	{"namn": "Stadshuset", "latitude": 55.70445, "longitude": 13.192487},
	{"namn": "Brunnshögs mölla", "latitude": 55.730883, "longitude": 13.244238},
	{"namn": "Kanontorn", "latitude": 55.750757, "longitude": 13.205939},
	{"namn": "Fire", "latitude": 55.693538, "longitude": 13.225675},
	{"namn": "Fontänbanan", "latitude": 55.714478, "longitude": 13.230564},
	{"namn": "St. Laurentii Kyrka", "latitude": 55.695591, "longitude": 13.20088},
	{"namn": "Tornhallen", "latitude": 55.751472, "longitude": 13.195649},
	{"namn": "Lund Hospital", "latitude": 55.711721, "longitude": 13.197816},
	{"namn": "Tennis Court", "latitude": 55.725173, "longitude": 13.216802},
	{"namn": "Karusell", "latitude": 55.725897, "longitude": 13.177038},
	{"namn": "Agardh", "latitude": 55.705548, "longitude": 13.201027},
	{"namn": "Jaktlaget & Hubertus", "latitude": 55.728849, "longitude": 13.177057},
	{"namn": "Magic Rocks", "latitude": 55.715457, "longitude": 13.210033},
	{"namn": "Nr 2 Med Tunga", "latitude": 55.707533, "longitude": 13.189489},
	{"namn": "Fenced In", "latitude": 55.721643, "longitude": 13.201034},
	{"namn": "Magdalena Clock Tower", "latitude": 55.712908, "longitude": 13.236883},
	{"namn": "Stångby Station", "latitude": 55.750279, "longitude": 13.199757},
	{"namn": "Systematiska Kvarteret", "latitude": 55.704592, "longitude": 13.204098},
	{"namn": "Träd Och Buskar", "latitude": 55.704328, "longitude": 13.203318},
	{"namn": "Liberiet", "latitude": 55.703684, "longitude": 13.194066},
	{"namn": "Outdoor Gym", "latitude": 55.654672, "longitude": 13.207176},
	{"namn": "Key Fountain", "latitude": 55.714316, "longitude": 13.208473},
	{"namn": "Runstenen i Stadsparken", "latitude": 55.697835, "longitude": 13.185345},
	{"namn": "Stone Formation", "latitude": 55.723203, "longitude": 13.201684},
	{"namn": "Tire from U.S. B 29", "latitude": 55.652926, "longitude": 13.236099},
	{"namn": "News Board", "latitude": 55.723776, "longitude": 13.194277},
	{"namn": "Kemicentrum", "latitude": 55.716512, "longitude": 13.209932},
	{"namn": "Fontain in the park", "latitude": 55.672922, "longitude": 13.143555},
	{"namn": "Esaias Tegner", "latitude": 55.704677, "longitude": 13.195314},
	{"namn": "Kraka", "latitude": 55.707866, "longitude": 13.182087},
	{"namn": "Hus Mus", "latitude": 55.699273, "longitude": 13.185989},
	{"namn": "Röd Kana", "latitude": 55.74836, "longitude": 13.200671},
	{"namn": "Lusthuset", "latitude": 55.701299, "longitude": 13.210009},
	{"namn": "North Cemetery Big Cross", "latitude": 55.715225, "longitude": 13.194575},
	{"namn": "Leaf Mural", "latitude": 55.711079, "longitude": 13.170875},
	{"namn": "Furulunds Gamla Stationshus", "latitude": 55.775049, "longitude": 13.096451},
	{"namn": "Playpark Linero", "latitude": 55.702543, "longitude": 13.246552},
	{"namn": "Little Houses", "latitude": 55.719623, "longitude": 13.192923},
	{"namn": "Seminariets Klocka", "latitude": 55.712745, "longitude": 13.198817},
	{"namn": "JRB Art", "latitude": 55.705383, "longitude": 13.183903},
	{"namn": "Pillar of Books", "latitude": 55.690876, "longitude": 13.217796},
	{"namn": "Plugged Cannon", "latitude": 55.7178, "longitude": 13.207819},
	{"namn": "Lackalängaravinen", "latitude": 55.775489, "longitude": 13.109454},
	{"namn": "Astronomy Tower", "latitude": 55.711787, "longitude": 13.203986},
	{"namn": "Blomstrand", "latitude": 55.70227, "longitude": 13.202811},
	{"namn": "Arc of Bricks", "latitude": 55.713677, "longitude": 13.21113},
	{"namn": "St. Stefan Stones", "latitude": 55.732055, "longitude": 13.181551},
	{"namn": "The not so Changing Wall", "latitude": 55.691213, "longitude": 13.163015},
	{"namn": "Time at the Center", "latitude": 55.701847, "longitude": 13.192762},
	{"namn": "Plague Burial Ground", "latitude": 55.71694, "longitude": 13.180632},
	{"namn": "Nöbbelövs Mosse", "latitude": 55.730111, "longitude": 13.154735},
	{"namn": "Machineries", "latitude": 55.709112, "longitude": 13.209551},
	{"namn": "North Cemetary fountain", "latitude": 55.716038, "longitude": 13.189373},
	{"namn": "Apotekaren", "latitude": 55.703779, "longitude": 13.192482},
	{"namn": "Båt På Nöbbelövsgården", "latitude": 55.732, "longitude": 13.165069},
	{"namn": "Anders Jahan Retzius", "latitude": 55.705504, "longitude": 13.19376},
	{"namn": "Large Cross", "latitude": 55.713693, "longitude": 13.192428},
	{"namn": "The Purple Sculpture", "latitude": 55.724333, "longitude": 13.205183},
	{"namn": "Dragon", "latitude": 55.709516, "longitude": 13.194448},
	{"namn": "Hole #10", "latitude": 55.705116, "longitude": 13.219346},
	{"namn": "Landstigningsplats", "latitude": 55.702045, "longitude": 13.143365},
	{"namn": "Källby", "latitude": 55.690062, "longitude": 13.168051},
	{"namn": "Treklotsplatsen", "latitude": 55.751892, "longitude": 13.188161},
	{"namn": "Söderlyckan Skateboardpark", "latitude": 55.69605, "longitude": 13.187028},
	{"namn": "Let's Dance", "latitude": 55.702665, "longitude": 13.197752},
	{"namn": "Playground Gazebo", "latitude": 55.707536, "longitude": 13.211044}
	/*{"namn": "", "latitude": 55.656074, "longitude": 13.109515},*/
];