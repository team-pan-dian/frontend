import * as localforage from "localforage";

export interface VideoInfo {
  id: string;
  url: string;
}

const getStorage = (courseId: string) =>
  localforage.createInstance({
    name: "video-storage",
    storeName: courseId,
    description: "The storage for videos.",
  });

async function CacheVideo(
  storage: LocalForage,
  videoId: string,
  url: string
): Promise<Blob> {
  try {
    const video = await fetch(url, {
      headers: {
        "User-Agent": "demotion-client/1.0",
      },
    });

    if (video.ok) {
      return await storage.setItem(videoId, video.blob());
    }
  } catch (e: unknown) {
    throw new Error(`failed to get the video ${videoId}: ${e}`);
  }

  throw new Error(`failed to get the video ${videoId}.`);
}

async function GetVideoFromCache(
  storage: LocalForage,
  videoId: string
): Promise<Blob | null> {
  return storage.getItem<Blob>(videoId);
}

/**
 * 取得指定課程的影片。
 *
 * @param courseId 課程 ID
 * @param videoId 影片 ID
 * @param url 影片連結
 * @param userStorage 自己指定要存取的 LocalForage
 * @return {Blob} 影片 Blob。
 */
export async function GetVideo(
  courseId: string,
  videoId: string,
  url?: string,
  userStorage?: LocalForage
): Promise<Blob> {
  const storage = userStorage || getStorage(courseId);
  const video = await GetVideoFromCache(storage, videoId);

  if (!video && url) {
    return CacheVideo(storage, videoId, url);
  }

  throw new Error(
    `the video ${videoId} in the course ${courseId} is neither in the database nor in the remote.`
  );
}

/**
 * 預先快取指定課程的影片組。
 *
 * @param courseId 課程 ID
 * @param videos 影片資訊
 * @param userStorage 自己指定要存取的 LocalForage
 * @return {Blob} 影片 Blob。
 */
export async function PrefetchVideoGroup(
  courseId: string,
  videos: VideoInfo[],
  userStorage?: LocalForage
): Promise<null> {
  await Promise.all(
    videos.map(async (video) =>
      GetVideo(courseId, video.id, video.url, userStorage)
    )
  );

  return null;
}

/**
 * 清除指定課程的所有影片。
 *
 * @param courseId 課程 ID
 */
export async function ClearSpecifiedCourseVideo(
  courseId: string
): Promise<void> {
  const storage = getStorage(courseId);
  await storage.clear();
}

export async function HasSpecifiedCourseData(
  courseId: string
): Promise<boolean> {
  const storage = getStorage(courseId);
  return (await storage.length()) > 0;
}
