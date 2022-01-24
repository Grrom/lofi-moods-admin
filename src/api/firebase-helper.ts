import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { apiResponse, mood, music, musicProps } from "../types/types";

export default class FireBaseHelper {
  firestore = getFirestore();

  public addMusic = async (music: music): Promise<apiResponse<music>> => {
    let response;
    try {
      let newlyAdded = await addDoc(
        collection(this.firestore, music.mood!),
        music
      );

      response = {
        message: `${music.title} added succesfully`,
        success: true,
        data: { id: newlyAdded.id, ...music },
      };
    } catch (e) {
      response = {
        message: `failed to add ${music.title}`,
        success: false,
      };
    }
    return response;
  };

  public deleteMusic = async (
    music: music
  ): Promise<apiResponse<undefined>> => {
    try {
      let ref = collection(this.firestore, music.mood!);
      await deleteDoc(doc(ref, music.id));
      return {
        message: `${music.title} deleted succesfully`,
        success: true,
      };
    } catch (e) {
      return {
        message: `Failed to delete ${music.title}: ${e}`,
        success: false,
      };
    }
  };

  public fetchMusic = async (
    mood: mood
  ): Promise<apiResponse<Array<music>>> => {
    try {
      const querySnapshot = await getDocs(collection(this.firestore, mood!));
      let datas: Array<music> = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data.id = doc.id;
        datas.push(data as music);
      });

      return {
        message: `${mood} music fetched`,
        success: true,
        data: datas,
      };
    } catch (e) {
      return {
        message: `Failed to fetch music: ${e}`,
        success: false,
      };
    }
  };

  public fetchMoods = async (): Promise<apiResponse<Array<mood>>> => {
    try {
      const querySnapshot = await getDocs(collection(this.firestore, "moods"));
      let datas: Array<string> = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        datas.push(data.name);
      });

      return {
        message: "Moods fetched",
        success: true,
        data: datas,
      };
    } catch (e) {
      return {
        message: `Failed to fetch Moods: ${e}`,
        success: false,
      };
    }
  };

  public updateMusic = async (
    music: music,
    key: musicProps,
    value: string
  ): Promise<apiResponse<undefined>> => {
    try {
      await updateDoc(doc(collection(this.firestore, music.mood!), music.id), {
        [key]: value,
      });
      return {
        message: `${music.title} updated succesfully`,
        success: true,
      };
    } catch (e) {
      return {
        message: `Failed to update ${music.title}: ${e}`,
        success: false,
      };
    }
  };

  public deleteMood = async (mood: mood): Promise<apiResponse<undefined>> => {
    try {
      const moodsRef = collection(this.firestore, "moods");
      const toDeleteId = (
        await getDocs(query(moodsRef, where("name", "==", mood)))
      ).docs[0].id;

      await deleteDoc(doc(moodsRef, toDeleteId));

      this.deleteCollection(mood!);
      this.deleteCollection(`${mood}_chatroom`);

      return {
        message: `${mood} successfully deleted`,
        success: true,
      };
    } catch (e) {
      return {
        message: `Failed to delete ${mood}: ${e}`,
        success: false,
      };
    }
  };

  public addMood = async (mood: mood): Promise<apiResponse<mood>> => {
    try {
      await addDoc(collection(this.firestore, "moods"), { name: mood });

      return {
        message: `${mood} successfully added`,
        success: true,
        data: mood,
      };
    } catch (e) {
      return {
        message: `Failed to add ${mood}: ${e} `,
        success: false,
      };
    }
  };

  private deleteCollection = async (collectionName: string) => {
    try {
      const querySnapshot = await getDocs(
        collection(this.firestore, collectionName!)
      );
      if (querySnapshot.size > 0) {
        await new Promise((resolve) =>
          querySnapshot.forEach(async (fetchedDoc) => {
            await deleteDoc(
              doc(collection(this.firestore, collectionName!), fetchedDoc.id)
            );
            resolve(true);
          })
        );
      }

      return true;
    } catch (e) {
      return false;
    }
  };
}
