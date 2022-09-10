var limit = 20;

function updateLimit(amount) {
	var counterElement = document.getElementById("counter");
	counterElement.innerHTML = `${amount}/${limit}`;
}

Sortable.create(simpleList, {
	group: {
		name: 'shared',
		put: function (to) {
			return to.el.children.length < limit;
		}
	},
	onSort: function () {
		updateLimit(this.el.children.length);
	}
});

Sortable.create(simpleList2, {
	group: 'shared',
});

updateLimit(simpleList.children.length);