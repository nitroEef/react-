import { FaTrashRestoreAlt } from "react-icons/fa";

const LineItem = ({item, handleCheck, handleDelete}) => {
        return (
        <li className="item" key={item.id}>
        <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
        />

        <label
        style={(item.checked) ? {textDecoration: "line-through"} : null}
        onDoubleClick={() => handleDelete(item.id)}
        >
            {item.item}
        </label>
        <FaTrashRestoreAlt
        onClick={() => handleDelete(item.id)} 
        role="button"
        tabIndex="0"
        aria-label="{"
        />
        </li>
        )
        }

export default LineItem
