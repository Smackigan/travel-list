import { useState } from 'react';

export default function Form({ onAddItems }) {
	// Initialize descrip and q-ty states
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	// Form submission
	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return; // if no description -> return nothing

		// Create new item object
		const newItem = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};

		onAddItems(newItem);

		// Clear input fields
		setDescription('');
		setQuantity(1);
	}

	return (
		<form
			className="bg-[#e5771f] py-11 px-0 flex items-center justify-center gap-3"
			onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}
