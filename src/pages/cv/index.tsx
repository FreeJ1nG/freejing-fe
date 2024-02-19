import { FC } from "react";

const CV: FC = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center py-10">
      <iframe
        className="w-[800px] h-full flex justify-center"
        src={process.env.NEXT_PUBLIC_CV_URL}
      ></iframe>
    </div>
  );
};

export default CV;
