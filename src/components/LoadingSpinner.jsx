
// import loadingImg from '../assets/logo.png'
const LoadingSpinner = ({count = 8}) => {
    return (
        
        <div  className="my-10 grid md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#D9D9D9] overflow-hidden">
  {Array.from({length: count}).map((_, i) => (
    <div key={i} className="flex items-center gap-4">
    <div className="skeleton h-56 w-16 shrink-0 rounded-full"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-20"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-32 w-full"></div>
    </div>
  </div>
  ))}
  
</div>

    );
};

export default LoadingSpinner;
{/* <div className="flex justify-center items-center w-full mx-auto ">
  <h1 className='text-gray-500 text-7xl'>L<span>{loadingImg}</span>ading</h1>
</div> */}