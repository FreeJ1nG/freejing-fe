import { FC } from "react";
import { useGetPostsQuery } from "@/features/blog/api";
import { CircularProgress } from "@mui/material";

const BlogPage: FC = () => {
  const { data, isLoading } = useGetPostsQuery();
  console.log(data);

  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="flex flex-col gap-y-4">YOYO</div>
      )}
    </>
  );
};

export default BlogPage;
