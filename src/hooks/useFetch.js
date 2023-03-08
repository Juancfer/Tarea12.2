
import React from "react";

const useFetch = (apiUrl) => {

  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {

    fetch(apiUrl)
      .then(data => data.json())
      .then(dataParsed => setInfo(dataParsed));

  }, [apiUrl]);

  return [info];
}

export default useFetch;
