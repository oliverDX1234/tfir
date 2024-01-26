export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "font-inter px-8 py-3 text-lg font-semibold rounded bg-purple text-white";
		case "secondary":
			return "px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100";
		default:
			return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900";
	}
}
