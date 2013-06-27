function (doc) {
	if (doc._id.substring(0, 10) === "clientdata") {
		emit(doc._id.substr(10), {
			"id": doc.id,
			"rev": doc._rev,
			"group": doc.group,
			"compName": doc.compName,
			"contName": doc.contName,
			"contPhone": doc.contPhone,
			"contEmail": doc.contEmail,
			"status": doc.status,
			"date": doc.date,
			"paymentStat": doc.paymentStat,
			"networkNotes": doc.networkNotes,
			"notes": doc.notes
		});
	}
};