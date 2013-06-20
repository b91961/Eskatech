function (doc) {
	if (doc._id.substring(0, 6) === "client") {
		emit(doc._id.substr(6), {
			"id": doc.id,
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