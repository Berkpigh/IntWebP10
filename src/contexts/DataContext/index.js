import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const getData = useCallback(async () => {
    try {
      setData(await api.loadData());
    } catch (err) {
      setError(err);
    }
  }, []);
  useEffect(() => {
    if (data) return;
    getData();
  });

// Find most recent event
const findMostRecentEvent = () => {
  if (data && data.events && data.events.length > 0) {
    return data.events.reduce((mostRecentEvent, event) => {
      const eventDate = new Date(event.date)
      const mostRecentDate = new Date(mostRecentEvent.date)
      return eventDate > mostRecentDate ? event : mostRecentEvent
    }, data.events[0])
  }
  return null;
};

const mostRecentEvent = findMostRecentEvent()

  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        mostRecentEvent,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useData = () => useContext(DataContext);

export default DataContext;
