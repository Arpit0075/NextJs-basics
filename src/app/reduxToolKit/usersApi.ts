import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "users",
      providesTags: ["Users"],
    }),
    getOneUser: builder.query({
      query: (userId) => ({
        url: `users/${userId}`,
      }),
      providesTags: (result, error, id) => [{ type: "Users", id }],
    }),
    createNewUser: builder.mutation({
      query: (newUser) => ({
        url: "users",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `users/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: (obj) => ({
        url: `users/${obj.userId}`,
        method: "PUT",
        body: { password: obj.password },
      }),
      // invalidatesTags: ["Users"],
      invalidatesTags: (result, error, arg) => [{ type: "Users", id: arg.id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery,
  // useLazyGetAllUsersQuery lazy is used to query based on event like click
  useCreateNewUserMutation,
  useDeleteUserMutation,
  useGetOneUserQuery,
  useUpdateUserMutation,
} = usersApi;
