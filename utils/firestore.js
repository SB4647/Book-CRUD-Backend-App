const cleanRecord = (record) => {
    return { id: record.id, ...record.data() };
}

const cleanRecords = (firebaseQueryResult) => {
    return firebaseQueryResult.docs.map(cleanRecord);
}


module.exports = {
    cleanRecord, cleanRecords
}