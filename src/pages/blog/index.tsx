import { FC } from "react";
import { useGetPostsQuery } from "@/features/blog/api";
import { CircularProgress } from "@mui/material";

const BlogPage: FC = () => {
  const { data, isLoading } = useGetPostsQuery();

  return (
    <div className="">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className="flex flex-col gap-y-4">YOYO</div>
      )}
    </div>
  );
};

export default BlogPage;
