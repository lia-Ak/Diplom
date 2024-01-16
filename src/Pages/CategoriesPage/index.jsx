import s from "./CategoriesPage.module.css";
import CategoryList from "../../components/CategoryList";

function CategoriesPage() {
  return (
    <div className={s.categoriesPage}>
      <div className={s.categoriesPageContainer}>
        <h2 className={s.categoriesPageTitle}>Categories</h2>
        <CategoryList />
      </div>
    </div>
  );
}

export default CategoriesPage;
