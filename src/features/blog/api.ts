import api from "@/common/services/api";

const blogApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getPosts: builder.query<ApiResponse<Post[]>, void>({
      query: () => ({
        url: `/blogs`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result?.data.map(({ id }) => ({ type: "Post" as const, id })),
              "Post",
            ]
          : ["Post"],
    }),
    getPost: builder.query<ApiResponse<Post>, PostApi.PostId>({
      query: ({ id }) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: (result) => [{ type: "Post", id: result?.data.id }],
    }),
    updatePost: builder.mutation<
      ApiResponse<Post>,
      PostApi.PostRequest & PostApi.PostId
    >({
      query: ({ id, title, content }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body: {
          title,
          content,
        },
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: (result) => [{ type: "Post", id: result?.data.id }],
    }),
    deletePost: builder.mutation<void, PostApi.PostId>({
      query: ({ id }) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    createPost: builder.mutation<ApiResponse<Post>, PostApi.PostRequest>({
      query: ({ title, content }) => ({
        url: `/blogs`,
        method: "POST",
        body: {
          title,
          content,
        },
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
} = blogApi;
