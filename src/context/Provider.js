import React, { useState, useEffect } from 'react';
import MyContext from './Context';
import getServers from '../services/fetch';

export default function ServerProvider({ children }) {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        const servers = await getServers();
        setServers(servers);
        setLoading(false);
      } catch (error) {
        console.log(error);
      };
    };
    fetchServers();
  }, [])
  
  const contextValue = {
    servers,
    loading,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}
