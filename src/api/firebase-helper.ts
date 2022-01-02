import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { apiResponse, mood, music } from "../types/types";

export default class FireBaseHelper {
  firestore = getFirestore();

  public addMusic = async (music: music): Promise<apiResponse<undefined>> => {
    let response;
    try {
      await addDoc(collection(this.firestore, music.mood!), music);
      response = {
        message: `${music.title} added succesfully`,
        success: true,
      };
    } catch (e) {
      response = {
        message: `failed to add ${music.title}`,
        success: false,
      };
    }
    return response;
  };

  public pushPlaylist = async (
    playList: Array<music>
  ): Promise<apiResponse<undefined>> => {
    let hasError = false;
    if (playList.length > 0) {
      if (await this.deleteAllByMood(playList[0].mood!)) {
        let pushStatus = new Promise<apiResponse<undefined>>((resolve) => {
          playList.forEach(async (music: music, index: number) => {
            if (!(await this.addMusic(music)).success) {
              hasError = true;
            }

            if (index === playList.length - 1) {
              if (hasError) {
                resolve({ message: "Something went wrong", success: false });
              } else {
                resolve({
                  message: "Playlist pushed successfully",
                  success: true,
                });
              }
            }
          });
        });
        let apiResponse: apiResponse<undefined> = await pushStatus;

        return apiResponse;
      } else {
        return {
          message:
            "Failed to clear collection, check the Firestore dashboard for more info",
          success: false,
        };
      }
    } else {
      return {
        message: "There are no music in this collection",
        success: false,
      };
    }
  };

  public deleteMood = async (mood: mood) => {
    try {
      const moodsRef = collection(this.firestore, "moods");
      const toDeleteId = (
        await getDocs(query(moodsRef, where("name", "==", mood)))
      ).docs[0].id;

      await deleteDoc(doc(moodsRef, toDeleteId));

      this.deleteAllByMood(mood);

      return true;
    } catch (e) {
      return false;
    }
  };

  public addMood = async (mood: mood) => {
    let success;
    try {
      await addDoc(collection(this.firestore, "moods"), { name: mood });
      success = true;
    } catch (e) {
      window.alert(e);
      success = false;
    }
    return success;
  };

  private deleteAllByMood = async (mood: mood) => {
    let success;
    try {
      const querySnapshot = await getDocs(collection(this.firestore, mood!));
      if (querySnapshot.size > 0) {
        await new Promise((resolve) =>
          querySnapshot.forEach(async (fetchedDoc) => {
            await deleteDoc(
              doc(collection(this.firestore, mood!), fetchedDoc.id)
            );
            resolve(true);
          })
        );
      }

      success = true;
    } catch (e) {
      success = false;
    }
    return success;
  };
}
