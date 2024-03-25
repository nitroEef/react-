
const LineItem = () => {
        return (
        <li className="item" key={item.id}>
        <input
            type="checkbox"
            onClick={() => handleCheck(item.id)}
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
        />
        </li>
        )
        }

export default LineItem
