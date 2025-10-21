export const years = [];
let year = new Date().getFullYear();
for (year; year >= year - 120; year--) {
    years.push({
        id: year,
        name: year.toString()
    });
}