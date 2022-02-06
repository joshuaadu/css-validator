import { useState } from "react";

import { useQuery } from "react-query";

const useCSSValidator = () => {
  const [url, setUrl] = useState();
  const submitURL = (url) => {
    setUrl(url);
  };
  const validatorURL =
    "https://jigsaw.w3.org/css-validator/validator" +
    `?uri=${url}&profile=css3&output=json`;
  // fetch(validatorURL)
  const sendRequest = async () => {
    if (!url) {
      throw new Error("Enter a url");
    }

    const response = await fetch(validatorURL);
    if (!response.ok) {
      throw new Error("Website not found! Please enter a valid url.");
    }
    const data = response.json();
    if (!data) {
      throw new Error("No validation results found");
    }
    return data;

    // const response = await fetch(validatorURL).then((response) =>
    //   response.json()
    // );
    // return response;
  };
  const query = useQuery(["validation", validatorURL], sendRequest, {
    refetchOnWindowFocus: false
  });
  return [query, submitURL];
};

export default useCSSValidator;
