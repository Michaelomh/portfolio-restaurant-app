import PropTypes from "prop-types";

export default function MenuItem({ dishName, ingredients, description, price }) {
  return (
    <div className="mb-8">
      <h1 className="mb-4 text-lg header tracking-[4px] my-1">{dishName}</h1>
      {ingredients && <p className="text-md ">{ingredients}</p>}
      {description && <p className="text-gray-600 italic text-md my-1">{description}</p>}
      <p className="font-bold text-lg font-heading mt-2">{price}</p>
    </div>
  );
}

MenuItem.propTypes = {
  dishName: PropTypes.string.isRequired,
  ingredients: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
};
