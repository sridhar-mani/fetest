import axios from 'axios'

const BASE_URL =  import.meta.env.VITE_API_URL || "http://localhost:5173"

const apiClient = axios.create({
    baseURL:BASE_URL,
    timeout:10000
}) 

apiClient.interceptors.response.use((responce)=>responce,(error)=>{
    console.error("API Call Error: ",error);
    return Promise.reject(error)
})

export interface Collection{
    id: string;
    name: string;
    artist: string;
    type: "EP" | "Album" | "Single";
  songCount: number;
  durationInSeconds: number;
  sizeInBytes: number;
  releasedOn: string; 
}

export interface Song {
    title: string;
    durationInSeconds: number;
    sizeInBytes: number;
    performers: string[];
  }


  export interface CollectionDetails extends Collection {
    songs: Song[];
  }

  export interface TableItem {
    type: "text" | "multistring" | "button" | "string";
    value: string | string[];
  }
  
  export interface TableRow {
    id: string;
    data: TableItem[];
  }

  const formatDuration = (durationInSeconds: number): string => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;
    return [hours, minutes, seconds]
      .map(unit => String(unit).padStart(2, '0'))
      .join(':');
  };


  const formatSize = (sizeInBytes: number): string => {
    console.log(sizeInBytes/ (1024 * 1024));
    const sizeInMB = sizeInBytes / (1024 * 1024);
    return `${Math.round(sizeInMB)} MB`;
  };

  const formatReleasedOn = (isoDate: string): string => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  };


  export const convertCollectionToTableRow = (collection: Collection): TableRow => {
    return {
      id: collection.id,
      data: [
        { type: "multistring", value: [collection.name, collection.artist] },
        { type: "text", value: collection.type },
        { type: "text", value: collection.songCount.toString() },
        { type: "text", value: formatDuration(collection.durationInSeconds) },
        { type: "text", value: formatSize(collection.sizeInBytes) },
        { type: "text", value: formatReleasedOn(collection.releasedOn) },
        { type: "button", value: "View Details" }
      ]
    };
  };
  

  export const convertSongToTableRow = (song: Song, id: string): TableRow => {
    return {
      id,
      data: [
        { type: "text", value: song.title },
        { type: "text", value: song.performers.join(", ") },
        { type: "text", value: formatDuration(song.durationInSeconds) },
        { type: "text", value: formatSize(song.sizeInBytes) }
      ]
    };
  };


  export const getCollections = async (): Promise<TableRow[]> => {
    try {
      const response = await apiClient.get<Collection[]>("/collections");
      const collectionsData = response.data;
      console.log("collectionsData", collectionsData);
      if (!Array.isArray(collectionsData)) {
        throw new Error("Expected collectionsData to be an array");
      }
      return collectionsData.map(convertCollectionToTableRow);
    } catch (error) {
      console.error("Error fetching collections:", error);
      throw error;
    }
  };
  


  export const getCollectionDetails = async (id: string): Promise<{
    collection: TableRow;
    songs: TableRow[];
  }> => {
    try {
      const response = await apiClient.get<CollectionDetails>(`/collections/${id}`);
      const data = response.data;
      const collectionRow = convertCollectionToTableRow(data);
      const songRows = data.songs.map((song, index) =>
        convertSongToTableRow(song, `${data.id}-${index}`)
      );
      return { collection: collectionRow, songs: songRows };
    } catch (error) {
      console.error(`Error fetching details for collection ${id}:`, error);
      throw error;
    }
  };