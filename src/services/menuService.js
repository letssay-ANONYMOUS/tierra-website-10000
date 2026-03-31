import { collection, doc, getDocs, writeBatch } from 'firebase/firestore';

export class MenuService {
  constructor(db, appId, seedMenu) {
    this.db = db;
    this.appId = appId;
    this.seedMenu = seedMenu;
  }

  get collectionRef() {
    return collection(this.db, 'artifacts', this.appId, 'public', 'data', 'menu_items');
  }

  async getOrSeedMenu() {
    const snapshot = await getDocs(this.collectionRef);
    if (!snapshot.empty) {
      return snapshot.docs.map((itemDoc) => ({ id: itemDoc.id, ...itemDoc.data() }));
    }

    const batch = writeBatch(this.db);
    this.seedMenu.forEach((item) => {
      batch.set(doc(this.collectionRef, item.id), item);
    });
    await batch.commit();
    return this.seedMenu;
  }
}
