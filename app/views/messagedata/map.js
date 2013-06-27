function (doc) {
	if (doc._id.substring(0, 11) === "messagedata") {
		emit(doc._id.substr(11), {
			"id": doc._id,
			"rev": doc._rev,
			
			"subject": doc.subject,
			"todoMess": doc.todoMess
		});
	}
};