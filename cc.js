// Price Low To High
array?.sort((a, b) => (a.price > b.price ? 1 : -1))
// Price High To Low
array?.sort((a, b) => (a.price > b.price ? -1 : 1))
// Name A to Z
array?.sort((a, b) => (a.name > b.name ? 1 : 1))
// Name Z to A
array?.sort((a, b) => (a.name > b.name ? -1 : 1))
// Sort by date
array.sort((a,b) =>  new Date(b.date) - new Date(a.date));
