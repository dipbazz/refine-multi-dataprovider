import React from "react";

import { Refine } from "@pankod/refine-core";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import 'index.css';

import { PostList } from "pages/refine/posts";
import { Layout } from "components/Layout";
import { JsonPostList } from "pages/json/posts";
import { JSON_API, REFINE_API } from "config";


function App() {
  return (
    <Refine
      dataProvider={{
        default: dataProvider(REFINE_API),
        jsonPlaceholder: dataProvider(JSON_API)
      }}
      routerProvider={routerProvider}
      Layout={Layout}
      resources={[
        {
          name: 'posts',
          list: PostList,
          options: {
            label: 'Refine posts'
          }
        },
        {
          name: 'json',
          list: JsonPostList,
          options: {
            label: 'JSON placeholder posts'
          }
        }
      ]}
    />
  );
}

export default App;
