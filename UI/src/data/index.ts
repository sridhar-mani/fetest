const  selectFilterdat = [
"Album", "EP", "Single"
]

const landingtableDat=[
        "Collection Name",
        "Type",
        "Song Count","Duration","Size","Released On",""
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


const landingcolumnWidths = ["40%", "10%", "8%", "10%", "7%", "15%", "10%"];



export {selectFilterdat,landingtableDat,resultTableDat,sampleTabDat,landingcolumnWidths}