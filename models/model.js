const { firestore } = require("./../firebase.js");
const { cleanRecords, cleanRecord } = require("./../utils/firestore");

class Model {
    static collection = "";

    static async all() {
        const collection = await firestore.collection(this.collection).get();
        return cleanRecords(collection);
    }

    static async find(id) {
        const record = await firestore
            .collection(this.collection)
            .doc(id)
            .get();

        if (!record.exists) {
            return undefined;
        }

        return cleanRecord(record);
    }

    static async create(data) {
        const docref = await firestore.collection(this.collection).add(data);
        const doc = await doc.get();

        return cleanRecord(doc);
    }

    static async update(id, partial) {
        if (Object.keys(partial).length) {
            try {
                await firestore
                    .collection(this.collection)
                    .doc(id)
                    .update(partial);
            } catch (e) {
                return undefined;
            }
        }

        return this.find(id);
    }

    static async delete(id) {
        const record = this.find(id);

        if (!record) {
            return undefined;
        }

        await firestore.collection(this.collection).doc(id).delete();
        return record;
    }
}

class Book extends Model {
    static collection = "books";
}

module.exports = Book;
