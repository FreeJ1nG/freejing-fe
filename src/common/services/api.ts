import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_DOMAIN,
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

export default api;
