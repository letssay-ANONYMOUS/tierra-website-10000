import { addDoc, collection } from 'firebase/firestore';

export class OrderService {
  constructor(db, appId) {
    this.db = db;
    this.appId = appId;
  }

  async placeOrder(userId, payload) {
    return addDoc(
      collection(this.db, 'artifacts', this.appId, 'users', userId, 'orders'),
      payload
    );
  }
}
