import "/src/App.css";

function Header() {
  return (
    <div className="mx-width mx-auto flex  justify-between mb-8">
      <img src="/src/images/book.svg" alt="" />
      <div className=" flex  items-center gap-7 justify-between ">
        <select className="select select-bordered w-full max-w-lg">
          <option>
          Sans Serif
          </option>
          <option>Serif</option>
          <option>mono</option>
        </select>
        
        <input type="checkbox" className=" toggle" />
        <img src="/src/images/path.svg" alt="" />
      </div>
    </div>
  );
}

export default Header;
