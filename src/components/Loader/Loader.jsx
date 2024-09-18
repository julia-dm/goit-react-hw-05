import { ThreeDots } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css'

export default function Loader() {
  return (
    <div className={css.loading}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#8AC7DB"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}