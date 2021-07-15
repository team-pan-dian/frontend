import myzod from "myzod";
import useSWR from "swr";
import DataFetcher, {
  BasicResponseSchema,
  ResponseParser,
} from "./DataFetcher";

export const VideoSchema = myzod.object({
  id: myzod.string(),
  name: myzod.string(),
  information: myzod.string(),
  viewCount: myzod.number(),
  sequence: myzod.number(),
  classId: myzod.string(), // = CoursesDataSchema.classId
  fileName: myzod.string(),
});

export const VideoDataResponseSchema = BasicResponseSchema.and(
  myzod.object({
    data: VideoSchema,
  })
);

export default function useVideoData(cid: string, vid: string) {
  const { data, error } = useSWR<ReturnType<typeof DataFetcher>, unknown>(
    `/api/class/${cid}/${vid}`,
    DataFetcher
  );

  return ResponseParser(data, error, VideoDataResponseSchema);
}
