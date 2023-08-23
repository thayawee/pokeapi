const Loading = () => {
  return (
    <div>
      <h1 className="flex justify-center items-end gap-[10px] text-yellow-300 text-[30px] font-bold animate-pulse">
        Loading <span className="loading loading-dots loading-md"></span>
      </h1>
    </div>
  );
};

export default Loading;
