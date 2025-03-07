const  selectFilterdat = [
"Album", "EP", "Single"
]

const landingtableDat=[
        "Collection Name",
        "Type",
        "Song Count","Duration","Size","Released On",""
    ]
    const collectableDat=[
      "Artist",
      "Type",
      "Song Count","Size","Duration","Released On"
  ]

const resultTableDat=[
"Song","Performers","Duration","Size"
]

const sampleTabDat = [
    {
        id: "1",
        data: [
          { type: "multistring", value: ["EPIC: The Troy Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "5" },
          { type: "text", value: "00:15:40" },
          { type: "text", value: "45 MB" },
          { type: "text", value: "03 Sept 2024, 02:35 PM" },
          { type: "button", value: "View Details" }
        ]
      },
      {
        id: "2",
        data: [
          { type: "multistring", value: ["EPIC: The Ocean Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "4" },
          { type: "text", value: "00:13:00" },
          { type: "text", value: "15 MB" },
          { type: "text", value: "04 Sept 2024, 10:00 AM" },
          { type: "button", value: "View Details" }
        ]
      },  {
        id: "3", 
        data: [
          { type: "multistring", value: ["EPIC: The Troy Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "Album" },
          { type: "text", value: "5" },
          { type: "text", value: "00:15:40" },
          { type: "text", value: "45 MB" },
          { type: "text", value: "03 Sept 2024, 02:35 PM" },
          { type: "button", value: "View Details" }
        ]
      },
      {
        id: "4",
        data: [
          { type: "multistring", value: ["EPIC: The Ocean Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "4" },
          { type: "text", value: "00:13:00" },
          { type: "text", value: "15 MB" },
          { type: "text", value: "04 Sept 2024, 10:00 AM" },
          { type: "button", value: "View Details" }
        ]
      },  {
        id: "5", 
        data: [
          { type: "multistring", value: ["EPIC: The Troy Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "5" },
          { type: "text", value: "00:15:40" },
          { type: "text", value: "45 MB" },
          { type: "text", value: "03 Sept 2024, 02:35 PM" },
          { type: "button", value: "View Details" }
        ]
      },
      {
        id: "6",
        data: [
          { type: "multistring", value: ["EPIC: The Ocean Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "4" },
          { type: "text", value: "00:13:00" },
          { type: "text", value: "15 MB" },
          { type: "text", value: "04 Sept 2024, 10:00 AM" },
          { type: "button", value: "View Details" }
        ]
      },  {
        id: "7", 
        data: [
          { type: "multistring", value: ["Testing", "Jorge Rivera-Herrans"] },
          { type: "text", value: "Single" },
          { type: "text", value: "5" },
          { type: "text", value: "00:15:40" },
          { type: "text", value: "45 MB" },
          { type: "text", value: "03 Sept 2024, 02:35 PM" },
          { type: "button", value: "View Details" }
        ]
      },
      {
        id: "8",
        data: [
          { type: "multistring", value: ["EPIC: The Ocean Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "4" },
          { type: "text", value: "00:13:00" },
          { type: "text", value: "15 MB" },
          { type: "text", value: "04 Sept 2024, 10:00 AM" },
          { type: "button", value: "View Details" }
        ]
      },  {
        id: "9",
        data: [
          { type: "multistring", value: ["EPIC: The Troy Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "5" },
          { type: "text", value: "00:15:40" },
          { type: "text", value: "45 MB" },
          { type: "text", value: "03 Sept 2024, 02:35 PM" },
          { type: "button", value: "View Details" }
        ]
      },
      {
        id: "10",
        data: [
          { type: "multistring", value: ["EPIC: The Ocean Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "4" },
          { type: "text", value: "00:13:00" },
          { type: "text", value: "15 MB" },
          { type: "text", value: "04 Sept 2024, 10:00 AM" },
          { type: "button", value: "View Details" }
        ]
      },  {
        id: "11",
        data: [
          { type: "multistring", value: ["EPIC: The Troy Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "5" },
          { type: "text", value: "00:15:40" },
          { type: "text", value: "45 MB" },
          { type: "text", value: "03 Sept 2024, 02:35 PM" },
          { type: "button", value: "View Details" }
        ]
      },
      {
        id: "12",
        data: [
          { type: "multistring", value: ["EPIC: The Ocean Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "4" },
          { type: "text", value: "00:13:00" },
          { type: "text", value: "15 MB" },
          { type: "text", value: "04 Sept 2024, 10:00 AM" },
          { type: "button", value: "View Details" }
        ]
      },  {
        id: "13",
        data: [
          { type: "multistring", value: ["EPIC: The Troy Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "5" },
          { type: "text", value: "00:15:40" },
          { type: "text", value: "45 MB" },
          { type: "text", value: "03 Sept 2024, 02:35 PM" },
          { type: "button", value: "View Details" }
        ]
      },
      {
        id: "14",
        data: [
          { type: "multistring", value: ["EPIC: The Ocean Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "4" },
          { type: "text", value: "00:13:00" },
          { type: "text", value: "15 MB" },
          { type: "text", value: "04 Sept 2024, 10:00 AM" },
          { type: "button", value: "View Details" }
        ]
      },  {
        id: "15",
        data: [
          { type: "multistring", value: ["EPIC: The Troy Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "5" },
          { type: "text", value: "00:15:40" },
          { type: "text", value: "45 MB" },
          { type: "text", value: "03 Sept 2024, 02:35 PM" },
          { type: "button", value: "View Details" }
        ]
      },
      {
        id: "16",
        data: [
          { type: "multistring", value: ["EPIC: The Ocean Saga", "Jorge Rivera-Herrans"] },
          { type: "text", value: "EP" },
          { type: "text", value: "4" },
          { type: "text", value: "00:13:00" },
          { type: "text", value: "15 MB" },
          { type: "text", value: "04 Sept 2024, 10:00 AM" },
          { type: "button", value: "View Details" }
        ]
      },
];

const sampleSongDat = [
  {
    id: "1",
    data: [
      { type: "text", value: "The Horse and the Infant" },
      { type: "text", value: "Jorge Rivera-Herrans, Luke Holt & Cast of EPIC: The Musical" },
      { type: "text", value: "00:02:15" },
      { type: "text", value: "15 MB" },
    ]
  },
  {
    id: "2",
    data: [
      { type: "text", value: "Just a Man" },
      { type: "text", value: "Jorge Rivera-Herrans & Cast of EPIC: The Musical" },
      { type: "text", value: "00:02:30" },
      { type: "text", value: "16 MB" },
  
    ]
  },
  {
    id: "3",
    data: [
      { type: "text", value: "Full Speed Ahead" },
      { type: "text", value: "Jorge Rivera-Herrans, Armando Julián, Steven Dookie & Cast of EPIC: The Musical" },
      { type: "text", value: "00:05:10" },
      { type: "text", value: "24 MB" },
    
    ]
  },
  {
    id: "4",
    data: [
      { type: "text", value: "Open Arms" },
      { type: "text", value: "Jorge Rivera-Herrans & Steven Dookie" },
      { type: "text", value: "00:05:10" },
      { type: "text", value: "23 MB" },
    
    ]
  },
  {
    id: "5",
    data: [
      { type: "text", value: "Warrior of the Mind" },
      { type: "text", value: "Jorge Rivera-Herrans, Teagan Earley & Cast of EPIC: The Musical" },
      { type: "text", value: "00:05:10" },
      { type: "text", value: "23 MB" },
     
    ]
  }
];


const landingcolumnWidths = ["40%", "10%", "8%", "10%", "7%", "15%", "10%"];

const headercolumnWidths = ["38%", "10%", "10%", "12%", "15%", "15%"];

const songcolumnWidths = ["30%", "25%", "25%", "20%"];

export {selectFilterdat,landingtableDat,resultTableDat,sampleTabDat,landingcolumnWidths,collectableDat,headercolumnWidths,sampleSongDat,songcolumnWidths}