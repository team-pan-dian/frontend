export interface VideoInfo {
  url: string;
}

/**
 * 預先快取指定課程的影片組。
 *
 * @param videos 影片資訊
 * @return {Blob} 影片 Blob。
 */
export async function PrefetchVideoGroup(videos: VideoInfo[]): Promise<null> {
  await Promise.all(
    videos.map(async (video) =>
      fetch(video.url, {
        mode: "no-cors",
      })
    )
  );

  return null;
}
