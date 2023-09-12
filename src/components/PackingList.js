import { useState } from 'react';
import Item from './Item';

export default function PackingList({
	items,
	onDeleteItem,
	onToggleItem,
	onClearList,
}) {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems;

	// Choose how to sort list
	if (sortBy === 'input') sortedItems = items; // Original order

	if (sortBy === 'description')
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description)); // Sort by alphabet

	if (sortBy === 'packed')
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed)); // Sort by packed status

	return (
		<div className="list bg-[#5a3e2b] text-[#ffebb3] py-16 px-4 h-3/6 flex justify-between flex-col gap-12 items-center">
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						key={item.id}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select
					className="uppercase py-3 px-10 text-2xl font-bold my-0 mx-3"
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>

				<button
					onClick={() => onClearList()}
					className="uppercase py-3 px-10 text-2xl font-bold my-0 mx-3">
					Clear list
				</button>
			</div>
		</div>
	);
}
