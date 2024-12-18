const EmptyState = () => (
  <div className="h-100vh bg-[linear-gradient(180deg,_#F4F4F5_0%,_#D9E6FF_100%)] flex justify-center items-center">
    <div className="text-center  mt-24">
      <img
        src="EmptyState.png"
        alt="No results"
        className="mb-4 w-48 h-48 sm:w-64 sm:h-64 mx-auto"
      />
      <p className="text-gray-700 text-sm sm:text-base">No results found.</p>
    </div>
  </div>
);

export default EmptyState;
