function (doc) {
	if (doc._id.substring(0, 7) === "message") {
		emit(doc._id.substr(7), {
			"subject": doc.subject,
			"todoMess": doc.todoMess
		});
	}
};