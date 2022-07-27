import { useEffect, useState } from "react";
import * as contentful from "contentful";

export const useArticles = () => {
  const [client, setClient] = useState(null);
  const [articles, setArticles] = useState([]);

  const getarticles = async () => {
    const response = await client.getEntries({
      content_type: "article",
    });

    console.log(response.items);

    setArticles(response.items);
  };

  const initializeClient = () => {
    const contentfulClient = contentful.createClient({
      space: process.env.CONTENTFUL_SPACEID,
      accessToken: process.env.CONTENTFUL_APIKEY,
    });

    setClient(contentfulClient);
  };

  useEffect(() => {
    if (!client) {
      initializeClient();
    } else {
      getarticles();
    }
  }, [client]);

  return {
    articles,
  };
};
