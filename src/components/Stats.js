export default function Stats({ items }) {
	if (!items.length)
		return (
			<p className="bg-[#76c7ad] text-center font-bold py-12 px-0">
				<em>Start adding some items to your list 👓</em>
			</p>
		);

	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percents = Math.round((numPacked / numItems) * 100);

	return (
		<footer className="bg-[#76c7ad] text-center font-bold py-12 px-0">
			<em>
				{percents === 100
					? 'You got everything! 🎡'
					: `
				You have ${numItems} items 🥽 on your list, and u already packed ${numPacked} (${percents}%) `}
			</em>
		</footer>
	);
}
