export interface VideoInfo {
  cid: string;
  vid: string;
  url: string;
}

/**
 * 預先快取指定課程的影片組。
 *
 * @param videos 影片資訊
 * @return {Blob} 影片 Blob。
 */
export async function PrefetchVideoGroup(videos: VideoInfo[]): Promise<null> {
  await Promise.all([
    // video
    ...videos.map(async ({ url }) =>
      fetch(url, {
        mode: "no-cors",
      })
    ),
    // player
    ...videos.map(async ({ cid, vid }) =>
      fetch(`/course/${cid}/video/${vid}`, {
        mode: "no-cors",
      })
    ),
  ]);

  return null;
}
