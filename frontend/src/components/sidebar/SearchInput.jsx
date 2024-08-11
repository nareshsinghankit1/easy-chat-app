import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search_"
        className="input input-bordered rounded-full"
      />
      <button type="submt" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp />
      </button>
    </form>
  );
};

export default SearchInput;


// STARTING CODE FOR THIS FILE
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className="flex items-center gap-2">
//       <input
//         type="text"
//         placeholder="Search_"
//         className="input input-bordered rounded-full"
//       />
//       <button type="submt" className="btn btn-circle bg-sky-500 text-white">
//         <IoSearchSharp />
//       </button>
//     </form>
//   );
// };

// export default SearchInput;

