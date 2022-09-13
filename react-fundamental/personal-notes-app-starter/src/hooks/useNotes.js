import React from "react";
import { getActiveNotes, getArchivedNotes } from "../utils/api";

export const useNotes = (type) => {
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (type === "active") {
      getActiveNotes().then((res) => {
        if (!res.error) {
          setNotes(res.data);
          setLoading(false);
        }
      });
    } else if (type === "archived") {
      getArchivedNotes().then((res) => {
        if (!res.error) {
          setNotes(res.data);
          setLoading(false);
        }
      });
    } else {
      console.error("Type not available!");
    }
  }, []);

  return [notes, loading];
};
