import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./subCom/NavBar";
import { resultTableDat, songcolumnWidths } from "../data";
import { ChevronRight } from "lucide-react";
import SmallInfoDiv from "./subCom/SmallInfoDiv";
import TableShow from "./subCom/TableShow";
import { useEffect, useState } from "react";
import { getCollectionDetails, TableRow } from "../services/apiService";

const CollectionPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Use singular state for the main collection and an array for its songs.
  const [collection, setCollection] = useState<TableRow | null>(null);
  const [songs, setSongs] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("Collection id:", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await getCollectionDetails(id);
          console.log("Fetched collection details:", data);
          setCollection(data.collection);
          setSongs(data.songs);
        } else {
          console.error("No id provided in URL");
        }
      } catch (error) {
        console.error("Error fetching collection details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleClick = () => {
    navigate('/');
  };

  if (loading) return 
  if (!collection) return 

  const dat = {
    ...collection,
    data: collection.data.map((item) => ({ ...item }))
  };

  return (
    <div className="bg-gray-100 min-h-screen p-0 m-0">
      <div className="text-left text-black w-full flex py-1 px-4">
        <span
          onClick={handleClick}
          className="text-gray-500 font-semibold hover:cursor-pointer hover:text-black flex items-center"
        >
          Overview <ChevronRight size={16} />
        </span>
        {dat.data[0].value[0]}
      </div>
      <NavBar>{dat.data[0].value[0]}</NavBar>
      <div className="p-4 gap-5 flex flex-col max-w-full rounded-md bg-gray-100 max-h-11/12">
        <SmallInfoDiv dat={dat} />
        <TableShow tData={songs} widths={songcolumnWidths} headers={resultTableDat} />
      </div>
    </div>
  );
};

export default CollectionPage;
