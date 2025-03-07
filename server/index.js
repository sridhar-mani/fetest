const express=require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.port || 5000
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/musiccollection";

app.use(cors())
app.use(express.json())

const SongSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        durationInSeconds: { type: Number, required: true },
        sizeInBytes: { type: Number, required: true },
        performers: { type: [String], required: true }
    }
)

const CollectionSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        artist: { type: String, required: true },
        type: { type: String, enum: ['EP', 'Album', 'Single'], required: true },
        songCount: { type: Number, required: true },
        durationInSeconds: { type: Number, required: true },
        sizeInBytes: { type: Number, required: true },
        releasedOn: { type: Date, required: true },
        songs: [SongSchema]
    }
)



const Collection = mongoose.model('Collection',CollectionSchema)

async function seedData(){
    const count = await Collection.countDocuments();
    if(count==0){
        console.log('Seeding sample data...');
        const sampleCollections = [
            {
              name: "EPIC: The Troy Saga (Official Concept Album)",
              artist: "Jorge Rivera-Herrans",
              type: "EP",
              songCount: 5,
              durationInSeconds: 900,
              sizeInBytes: 484880,
              releasedOn: new Date("2024-09-03T14:35:00Z"),
              songs: [
                { title: "The Battle of Troy", durationInSeconds: 300, sizeInBytes: 120000, performers: ["Jorge Rivera-Herrans"] },
                { title: "The Siege", durationInSeconds: 300, sizeInBytes: 120000, performers: ["Jorge Rivera-Herrans"] },
                { title: "Fury of the Gods", durationInSeconds: 300, sizeInBytes: 120000, performers: ["Jorge Rivera-Herrans"] },
                { title: "Victory's Dawn", durationInSeconds: 300, sizeInBytes: 120000, performers: ["Jorge Rivera-Herrans"] },
                { title: "Eternal Echoes", durationInSeconds: 300, sizeInBytes: 1250000, performers: ["Jorge Rivera-Herrans"] }
              ]
            },
            {
              name: "EPIC: The Ocean Saga (Official Concept Album)",
              artist: "Jorge Rivera-Herrans",
              type: "EP",
              songCount: 4,
              durationInSeconds: 780,
              sizeInBytes: 1500000,
              releasedOn: new Date("2024-09-04T10:00:00Z"),
              songs: [
                { title: "Waves of Fury", durationInSeconds: 195, sizeInBytes: 4000670, performers: ["Jorge Rivera-Herrans"] },
                { title: "Calm Before the Storm", durationInSeconds: 195, sizeInBytes: 470000, performers: ["Jorge Rivera-Herrans"] },
                { title: "Deep Blue", durationInSeconds: 195, sizeInBytes: 400400, performers: ["Jorge Rivera-Herrans"] },
                { title: "Ocean's Roar", durationInSeconds: 195, sizeInBytes: 420000, performers: ["Jorge Rivera-Herrans"] }
              ]
            },
            {
              name: "EPIC: The Mountain Saga (Official Concept Album)",
              artist: "Maria Mountain",
              type: "Album",
              songCount: 6,
              durationInSeconds: 1080,
              sizeInBytes: 2000000,
              releasedOn: new Date("2024-08-15T09:30:00Z"),
              songs: [
                { title: "Rise of the Peaks", durationInSeconds: 180, sizeInBytes: 351000, performers: ["Maria Mountain"] },
                { title: "Echoes in the Valley", durationInSeconds: 180, sizeInBytes: 325000, performers: ["Maria Mountain"] },
                { title: "Whispering Winds", durationInSeconds: 180, sizeInBytes: 350400, performers: ["Maria Mountain"] },
                { title: "Climb to the Sky", durationInSeconds: 180, sizeInBytes: 351000, performers: ["Maria Mountain"] },
                { title: "Snowfall Serenade", durationInSeconds: 180, sizeInBytes: 135000, performers: ["Maria Mountain"] },
                { title: "Return from the Summit", durationInSeconds: 180, sizeInBytes: 535000, performers: ["Maria Mountain"] }
              ]
            },
            {
              name: "EPIC: The Desert Saga (Official Concept Album)",
              artist: "Ali Desert",
              type: "Single",
              songCount: 3,
              durationInSeconds: 600,
              sizeInBytes: 1200000,
              releasedOn: new Date("2024-07-20T16:00:00Z"),
              songs: [
                { title: "Sands of Time", durationInSeconds: 200, sizeInBytes: 405000, performers: ["Ali Desert"] },
                { title: "Heat Mirage", durationInSeconds: 200, sizeInBytes: 400600, performers: ["Ali Desert"] },
                { title: "Oasis Dreams", durationInSeconds: 200, sizeInBytes: 440000, performers: ["Ali Desert"] }
              ]
            },
            {
              name: "EPIC: The Forest Saga (Official Concept Album)",
              artist: "Lily Green",
              type: "Album",
              songCount: 7,
              durationInSeconds: 1260,
              sizeInBytes: 1800000,
              releasedOn: new Date("2024-10-10T11:15:00Z"),
              songs: [
                { title: "Whispers of the Trees", durationInSeconds: 180, sizeInBytes: 330000, performers: ["Lily Green"] },
                { title: "Dancing Leaves", durationInSeconds: 180, sizeInBytes: 305000, performers: ["Lily Green"] },
                { title: "Forest Shadows", durationInSeconds: 180, sizeInBytes: 300300, performers: ["Lily Green"] },
                { title: "Sunlit Canopy", durationInSeconds: 180, sizeInBytes: 300500, performers: ["Lily Green"] },
                { title: "Mystic Roots", durationInSeconds: 180, sizeInBytes: 300200, performers: ["Lily Green"] },
                { title: "Nature's Breath", durationInSeconds: 180, sizeInBytes: 302000, performers: ["Lily Green"] },
                { title: "Return to the Grove", durationInSeconds: 180, sizeInBytes: 301000, performers: ["Lily Green"] }
              ]
            },
            {
              name: "EPIC: The City Saga (Official Concept Album)",
              artist: "Urban Beats",
              type: "Album",
              songCount: 8,
              durationInSeconds: 1440,
              sizeInBytes: 2200000,
              releasedOn: new Date("2024-11-01T12:00:00Z"),
              songs: [
                { title: "Concrete Jungle", durationInSeconds: 180, sizeInBytes: 286000, performers: ["Urban Beats"] },
                { title: "Neon Nights", durationInSeconds: 180, sizeInBytes: 280070, performers: ["Urban Beats"] },
                { title: "City Lights", durationInSeconds: 180, sizeInBytes: 280070, performers: ["Urban Beats"] },
                { title: "Skyscraper Dreams", durationInSeconds: 180, sizeInBytes: 278000, performers: ["Urban Beats"] },
                { title: "Midnight Run", durationInSeconds: 180, sizeInBytes: 280700, performers: ["Urban Beats"] },
                { title: "Subway Rhythms", durationInSeconds: 180, sizeInBytes: 287000, performers: ["Urban Beats"] },
                { title: "Concrete Sunset", durationInSeconds: 180, sizeInBytes: 285000, performers: ["Urban Beats"] },
                { title: "Dawn Breaks", durationInSeconds: 180, sizeInBytes: 280700, performers: ["Urban Beats"] }
              ]
            },
            {
              name: "EPIC: The River Saga (Official Concept Album)",
              artist: "River Runners",
              type: "Album",
              songCount: 7,
              durationInSeconds: 1260,
              sizeInBytes: 1800000,
              releasedOn: new Date("2024-08-10T14:00:00Z"),
              songs: [
                { title: "Flowing Currents", durationInSeconds: 180, sizeInBytes: 309000, performers: ["River Runners"] },
                { title: "Meandering Paths", durationInSeconds: 180, sizeInBytes: 300700, performers: ["River Runners"] },
                { title: "Rapid Rush", durationInSeconds: 180, sizeInBytes: 3005600, performers: ["River Runners"] },
                { title: "Silent Banks", durationInSeconds: 180, sizeInBytes: 306000, performers: ["River Runners"] },
                { title: "Reflections", durationInSeconds: 180, sizeInBytes: 300500, performers: ["River Runners"] },
                { title: "Delta Dreams", durationInSeconds: 180, sizeInBytes: 340000, performers: ["River Runners"] },
                { title: "Return to Source", durationInSeconds: 180, sizeInBytes: 309000, performers: ["River Runners"] }
              ]
            },
            {
              name: "EPIC: The Sky Saga (Official Concept Album)",
              artist: "Cloud Chasers",
              type: "Single",
              songCount: 1,
              durationInSeconds: 240,
              sizeInBytes: 500000,
              releasedOn: new Date("2024-12-01T08:00:00Z"),
              songs: [
                { title: "Above the Horizon", durationInSeconds: 240, sizeInBytes: 507000, performers: ["Cloud Chasers"] }
              ]
            },
            {
              name: "EPIC: The Underground Saga (Official Concept Album)",
              artist: "Subway Rhythms",
              type: "Album",
              songCount: 6,
              durationInSeconds: 1080,
              sizeInBytes: 1600000,
              releasedOn: new Date("2024-11-15T17:30:00Z"),
              songs: [
                { title: "Tunnel Vision", durationInSeconds: 180, sizeInBytes: 274000, performers: ["Subway Rhythms"] },
                { title: "Echoes Below", durationInSeconds: 180, sizeInBytes: 270050, performers: ["Subway Rhythms"] },
                { title: "Dark Corners", durationInSeconds: 180, sizeInBytes: 270002, performers: ["Subway Rhythms"] },
                { title: "Rhythmic Beats", durationInSeconds: 180, sizeInBytes: 270020, performers: ["Subway Rhythms"] },
                { title: "Subterranean Pulse", durationInSeconds: 180, sizeInBytes: 217000, performers: ["Subway Rhythms"] },
                { title: "Dawn Underground", durationInSeconds: 180, sizeInBytes: 270090, performers: ["Subway Rhythms"] }
              ]
            },
            {
              name: "EPIC: The Galaxy Saga (Official Concept Album)",
              artist: "Star Explorers",
              type: "Album",
              songCount: 9,
              durationInSeconds: 1620,
              sizeInBytes: 2400000,
              releasedOn: new Date("2024-12-20T20:00:00Z"),
              songs: [
                { title: "Celestial Voyage", durationInSeconds: 180, sizeInBytes: 260040, performers: ["Star Explorers"] },
                { title: "Nebula Dreams", durationInSeconds: 180, sizeInBytes: 264000, performers: ["Star Explorers"] },
                { title: "Orbiting Hope", durationInSeconds: 180, sizeInBytes: 2603200, performers: ["Star Explorers"] },
                { title: "Stellar Winds", durationInSeconds: 180, sizeInBytes: 260010, performers: ["Star Explorers"] },
                { title: "Cosmic Dance", durationInSeconds: 180, sizeInBytes: 260200, performers: ["Star Explorers"] },
                { title: "Gravity's Pull", durationInSeconds: 180, sizeInBytes: 269000, performers: ["Star Explorers"] },
                { title: "Infinite Skies", durationInSeconds: 180, sizeInBytes: 260800, performers: ["Star Explorers"] },
                { title: "Moonlit Mirage", durationInSeconds: 180, sizeInBytes: 260400, performers: ["Star Explorers"] },
                { title: "Supernova", durationInSeconds: 180, sizeInBytes: 260004, performers: ["Star Explorers"] }
              ]
            },
            {
              name: "EPIC: The Time Saga (Official Concept Album)",
              artist: "Chronos Collective",
              type: "Album",
              songCount: 10,
              durationInSeconds: 1800,
              sizeInBytes: 3000000,
              releasedOn: new Date("2025-01-15T10:30:00Z"),
              songs: [
                { title: "Ticking Moments", durationInSeconds: 180, sizeInBytes: 300600, performers: ["Chronos Collective"] },
                { title: "Past Echoes", durationInSeconds: 180, sizeInBytes: 309000, performers: ["Chronos Collective"] },
                { title: "Future Visions", durationInSeconds: 180, sizeInBytes: 730000, performers: ["Chronos Collective"] },
                { title: "Temporal Rift", durationInSeconds: 180, sizeInBytes: 308000, performers: ["Chronos Collective"] },
                { title: "Lost in Time", durationInSeconds: 180, sizeInBytes: 300090, performers: ["Chronos Collective"] },
                { title: "Eternal Clock", durationInSeconds: 180, sizeInBytes: 300070, performers: ["Chronos Collective"] },
                { title: "Seconds of Silence", durationInSeconds: 180, sizeInBytes: 930000, performers: ["Chronos Collective"] },
                { title: "Winds of Change", durationInSeconds: 180, sizeInBytes: 300090, performers: ["Chronos Collective"] },
                { title: "Chrono Dreams", durationInSeconds: 180, sizeInBytes: 300080, performers: ["Chronos Collective"] },
                { title: "Timeless Journey", durationInSeconds: 180, sizeInBytes: 307000, performers: ["Chronos Collective"] }
              ]
            },
            {
              name: "EPIC: The Dream Saga (Official Concept Album)",
              artist: "Somnia",
              type: "Album",
              songCount: 7,
              durationInSeconds: 1260,
              sizeInBytes: 2000000,
              releasedOn: new Date("2025-02-10T14:00:00Z"),
              songs: [
                { title: "Lucid Visions", durationInSeconds: 180, sizeInBytes: 285070, performers: ["Somnia"] },
                { title: "Midnight Fantasies", durationInSeconds: 180, sizeInBytes: 278500, performers: ["Somnia"] },
                { title: "Dreamscape", durationInSeconds: 180, sizeInBytes: 285600, performers: ["Somnia"] },
                { title: "Surreal Journeys", durationInSeconds: 180, sizeInBytes: 285030, performers: ["Somnia"] },
                { title: "Whispers of Sleep", durationInSeconds: 180, sizeInBytes: 289500, performers: ["Somnia"] },
                { title: "Echoes of the Mind", durationInSeconds: 180, sizeInBytes: 258500, performers: ["Somnia"] },
                { title: "Awakening", durationInSeconds: 180, sizeInBytes: 285050, performers: ["Somnia"] }
              ]
            },
            {
              name: "EPIC: The Labyrinth Saga (Official Concept Album)",
              artist: "Maze Makers",
              type: "Album",
              songCount: 8,
              durationInSeconds: 1440,
              sizeInBytes: 2200000,
              releasedOn: new Date("2025-03-05T11:45:00Z"),
              songs: [
                { title: "Winding Paths", durationInSeconds: 180, sizeInBytes: 275500, performers: ["Maze Makers"] },
                { title: "Mystic Corners", durationInSeconds: 180, sizeInBytes: 276500, performers: ["Maze Makers"] },
                { title: "Lost in the Maze", durationInSeconds: 180, sizeInBytes: 257500, performers: ["Maze Makers"] },
                { title: "Turn of Fate", durationInSeconds: 180, sizeInBytes: 2755400, performers: ["Maze Makers"] },
                { title: "Hidden Exits", durationInSeconds: 180, sizeInBytes: 2750450, performers: ["Maze Makers"] },
                { title: "Echoes Within", durationInSeconds: 180, sizeInBytes: 275040, performers: ["Maze Makers"] },
                { title: "Shifting Walls", durationInSeconds: 180, sizeInBytes: 275400, performers: ["Maze Makers"] },
                { title: "Final Revelation", durationInSeconds: 180, sizeInBytes: 275500, performers: ["Maze Makers"] }
              ]
            },
            {
              name: "EPIC: The Legend Saga (Official Concept Album)",
              artist: "Mythic Voices",
              type: "EP",
              songCount: 5,
              durationInSeconds: 900,
              sizeInBytes: 1500000,
              releasedOn: new Date("2025-04-01T13:00:00Z"),
              songs: [
                { title: "Ancient Tales", durationInSeconds: 180, sizeInBytes: 300070, performers: ["Mythic Voices"] },
                { title: "Heroes of Old", durationInSeconds: 180, sizeInBytes: 300070, performers: ["Mythic Voices"] },
                { title: "Myth and Memory", durationInSeconds: 180, sizeInBytes: 370000, performers: ["Mythic Voices"] },
                { title: "The Oracle", durationInSeconds: 180, sizeInBytes: 300050, performers: ["Mythic Voices"] },
                { title: "Legacy", durationInSeconds: 180, sizeInBytes: 300800, performers: ["Mythic Voices"] }
              ]
            },
            {
              name: "EPIC: The Revolution Saga (Official Concept Album)",
              artist: "Rebel Rhythms",
              type: "Album",
              songCount: 7,
              durationInSeconds: 1260,
              sizeInBytes: 2000000,
              releasedOn: new Date("2025-05-20T09:30:00Z"),
              songs: [
                { title: "Rise Up", durationInSeconds: 180, sizeInBytes: 428500, performers: ["Rebel Rhythms"] },
                { title: "Breaking Chains", durationInSeconds: 180, sizeInBytes: 928500, performers: ["Rebel Rhythms"] },
                { title: "Voices United", durationInSeconds: 180, sizeInBytes: 728500, performers: ["Rebel Rhythms"] },
                { title: "The Spark", durationInSeconds: 180, sizeInBytes: 828500, performers: ["Rebel Rhythms"] },
                { title: "March of Freedom", durationInSeconds: 180, sizeInBytes: 628500, performers: ["Rebel Rhythms"] },
                { title: "Defiant Hearts", durationInSeconds: 180, sizeInBytes: 328500, performers: ["Rebel Rhythms"] },
                { title: "New Dawn", durationInSeconds: 180, sizeInBytes: 128500, performers: ["Rebel Rhythms"] }
              ]
            }
          ];
          
        await Collection.insertMany(sampleCollections)
        console.log('Seeding completed.');
    }
}

mongoose.connect(MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(async ()=>{
    await seedData();

    app.get('/collections', async (req, res) => {
      try {
        const collections = await Collection.find().lean();
        const transformed = collections.map(col => ({
          ...col,
          id: col._id.toString(),
        }));
        res.json(transformed);
      } catch (er) {
        console.error("Error fetching collections:", er);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.get('/collections/:collectionId', async (req, res) => {
      try {
        const { collectionId } = req.params;
        const collection = await Collection.findById(collectionId).lean();
        if (!collection) {
          res.status(404).json({ error: "Collection not found" });
        } else {
          collection.id = collection._id.toString();
          res.json(collection);
        }
      } catch (error) {
        console.error("Error fetching collection details:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

      app.listen(PORT, () => {
        console.log(`Music Collection API server is running at http://localhost:${PORT}`);
      });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });