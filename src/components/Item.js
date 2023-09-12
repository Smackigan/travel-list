export default function Item({ item, onDeleteItem, onToggleItem }) {
	return (
		<li>
			<input
				className="h-8 w-8 accent-orange-500"
				type="checkbox"
				value={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>🩸</button>
		</li>
	);
}
