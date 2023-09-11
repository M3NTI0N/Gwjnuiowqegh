export function getTwelveHour(numberValue) {
	return numberValue === 0 || numberValue === 12 ? 12 : numberValue % 12;
};

export function getMeridiemText(twentyFourHour) {
	return twentyFourHour > 11 ? 'PM' : 'AM'
};