import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";

export default function OwnerSearchForm() {
  const [params, setParams] = useSearchParams();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.elements.owner.value.trim();
    
    if (query) {
      params.set("query", query); 
      setParams(params);
      event.target.reset();
    }
  };

  return (
    <form onSubmit={handleSearch} className={css.form}>
      <input
        type="text"
        name="owner"
        placeholder="Search movie..."
        className={css.input}
      />
      <button type="submit" className={css.button}>Search</button>
    </form>
  );
}
