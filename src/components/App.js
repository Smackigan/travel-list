import { useState } from 'react';

// Importing components
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

// Definning App Component
export default function App() {
	const [items, setItems] = useState([]); // Initialize items state

	// Add item to items
	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	// Delete item from items
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	// Change packed status
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	// Clear list of items
	function handleClearList() {
		const confirmed = window.confirm(
			'Are you sure you want to clear the list?'
		);

		if (confirmed) setItems([]);
	}

	// Return JSX
	return (
		<div>
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}
