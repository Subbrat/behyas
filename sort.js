array = [{
  			id: 1, name: "test1", date: "2020-01-05",
			id: 2, name: "test2", date: "2020-01-02"
		}]

array.sort(function (a, b) {
	var dateA = new Date(a.date), dateB = new Date(b.date)
	return dateA - dateB
});

console.log(array) //array is now sorted by date
