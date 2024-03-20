const array1 = ['Rod', 'Reel', 'Tackle', 'Lure', 'Stream', 'Trout', 'Bass', 'Canoe', 'Kayak', 'Campfire', 'Tent', 'Backpack', 'Trail', 'Boots', 'Summit', 'Wilderness', 'Map', 'Compass', 'Hobbit', 'Elf', 'Dwarf', 'Wizard', 'Orc', 'Gondor', 'Mordor', 'Jedi', 'Sith', 'Droid', 'Lightsaber', 'Galaxy', 'Empire', 'Republic', 'Joy-Con', 'Cartridge', 'Console', 'Multiplayer', 'Quest', 'RPG', 'Platformer', 'Emulator', 'LAN', 'GPU', 'CPU', 'Monitor', 'Keyboard', 'Mouse', 'Software', 'Code', 'Program', 'Algorithm', 'Bug', 'Debug', 'Compiler', 'Estate', 'Mortgage', 'Broker', 'Lease', 'Tenant', 'Facade', 'Blueprint', 'Column', 'Beam', 'Arch', 'Soil', 'Seed', 'Shovel', 'Plant', 'Flower', 'Harvest', 'Stove', 'Oven', 'Recipe', 'Ingredient', 'Pan', 'Mixer', 'Dough', 'Frosting', 'Novel', 'Author', 'Genre', 'Library', 'Bookshelf', 'Dragon', 'Castle', 'Magic', 'Quest', 'Gnome', 'Timeline', 'Budget', 'Objective', 'Strategy', 'Deadline', 'Scope', 'Stakeholder', 'Risks', 'Sprint', 'Charter', 'Paddle', 'Waders', 'Fly', 'Bait', 'Anchor', 'RV', 'Sleeping Bag', 'Flashlight', 'Carabiner', 'Rucksack', 'Canteen', 'Ridge', 'Glade', 'Fellowship', 'Ring', 'Ent', 'Saruman', 'Ewok', 'Clone', 'Stormtrooper', 'Cruiser', 'Force', 'Rebel', 'Pro Controller', 'Indie', 'Shader', 'AI', 'Save', 'Frame Rate', 'Middleware', 'Hard Drive', 'RAM', 'Binary', 'Cache', 'Cloud', 'UI', 'UX', 'Patch', 'Realtor', 'Appraisal', 'Zoning', 'Duplex', 'Gable', 'Patio', 'Villa', 'Skyscraper', 'Mezzanine', 'Terrace', 'Hedge', 'Fertilizer', 'Compost', 'Pot', 'Pruner', 'Grill', 'Fillet', 'Sauté', 'Simmer', 'Whisk', 'Knead', 'Sourdough', 'Eclair', 'Paperback', 'E-reader', 'Manuscript', 'Prologue', 'Sorcerer', 'Lich', 'Grimoire', 'Artifact', 'Covenant', 'Paladin', 'Gantt Chart', 'Workflow', 'Deliverable', 'Milestone', 'Optimization', 'Allocation', 'Integration', 'Jig', 'Net', 'Trolling', 'Hatchet', 'Flare', 'Topography', 'Ranger', 'Precipice', 'Smaug', 'Isengard', 'AT-AT', 'Millennium Falcon', 'Haptic', 'Co-op', 'Hitbox', 'ASIC', 'Firmware', 'Kernel', 'Interface', 'Listings', 'Curb Appeal', 'Dormer', 'Cornice', 'Mulch', 'Spatula'];

const array2 = [
    "Chip", "Software", "Hardware", "Network", "Database", "Drone", "Interface", "Encryption", "Bandwidth",
    "Protocol", "Itinerary", "Passport", "Destination", "Airline", "Suitcase", "Kiwi",
    "Hobbiton", "Glacier", "Zoning", "Infrastructure", "Commute", "Metropolis", "Skyline", "Microhome",
    "Ecofootprint", "Minimalism", "Prefab", "Tinyhouse", "Sprint", "Kanban", "Backlog", "Standup", "Velocity",
    "Roadmap", "Launch", "Feature", "Branding", "Iteration", "Blueprint", "Wireframe", "Prototype", "Palette",
    "Typography", "Aesthetics", "Mockup", "Algorithm", "Function", "Debugging", "Array", "Compiler", "Syntax",
    "Sprinkler", "Hydrant", "Extinguisher", "Smoke Detector", "Alarm", "Flammability", "Resilience", "Beam",
    "Engraving", "Etching", "Focal Point", "Precision", "Leathercraft", "Tannin", "Stitching", "Dye",
    "Beveler", "Tannery", "Burnishing", "Innovation", "App", "Cloud Computing", "Robotics",
    "AI", "Biometrics", "Ticket", "Guidebook", "Excursion", "Transit", "Visa", "Peak", "Rugby", "Vineyard",
    "Geothermal", "Subdivision", "Gentrification", "Streetcar", "Greenbelt", "Scalability",
    "Efficiency", "Workspace", "Insulation", "Grid", "Taco", "Salsa", "Pizza", "Cupcake", "Icing", "Macaroon", "Cinnamon Roll"
];

let newArray = [];

function combineArrays(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        newArray.push(array1[i]);
    };
    for (let n = 0; n < array2.length; n++) {
        if(!newArray.includes(array2[n])) {
            newArray.push(array2[n]);
        };
    };
    return newArray;
}

combineArrays(array1, array2);

console.dir(newArray, {'maxArrayLength': null});
// console.log(newArray.length);



