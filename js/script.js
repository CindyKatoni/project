(function ($) {
	/**Create an empty array to store all the notes created */
	let noteArray = [];

	/**Create note when the noted is added */
	$("#add-note").submit(function (event) {
		/**Prevent the default form action */
		event.preventDefault();

		/** Get the value of the textarea input*/
		const addedNote = $("#note-content").val();

		/** Add the value of the textarea to the array of notes: noteArray */
		noteArray.push(addedNote);

		/**View the notes in the noteArray object we created on line 3 */
		console.log(noteArray);

		/** Clear the row of notes in the HTML so that the notes are not duplicated */
		$("#note-display").html("");

		/** Go over each note, create a card for each, and display them in the HTML */
		noteArray.forEach(function(value) {
			return $("#note-display").append(function () {
				return `
					<div class = "col-sm-3">
						<div class="card" style="width: 18rem;">
							<div class="card-body">
								<h5 class="card-title">${value}</h5>
								<p class="card-text">${value}</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
					</div>
						`;
			});
		});

		/** TODO: Add functions to edlete a note & update a note */
	})
})(jQuery);