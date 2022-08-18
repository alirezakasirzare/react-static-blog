import { useEffect, useState } from 'react';
import axios from 'axios';

function useReqGet(link, defaultValue = null) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [data, setDate] = useState(defaultValue);

  useEffect(() => {
    (async function fetchDate() {
      try {
        const response = await axios.get(link);
        setDate(response.data);
      } catch (ex) {
        setError(ex);
      } finally {
        setLoading(false);
      }
    })();
  }, [link]);

  return { data, loading, error };
}

export default useReqGet;
