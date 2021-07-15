import myzod from "myzod";
import useSWR from "swr";
import DataFetcher, {
  BasicResponseSchema,
  ResponseParser,
} from "./DataFetcher";
import { VideoSchema } from "./useVideoData";

export const CoursesDataSchema = myzod.object({
  id: myzod.string(),
  name: myzod.string(),
  count: myzod.number(),
  information: myzod.string(),
  img: myzod.string(),
  type: myzod.string(),
  videoList: myzod.array(VideoSchema),
});

export const CourseDataResponseSchema = BasicResponseSchema.and(
  myzod.object({
    data: CoursesDataSchema,
  })
);

export default function useCourseData(cid: string) {
  const { data, error } = useSWR<ReturnType<typeof DataFetcher>, unknown>(
    `/api/class/${cid}`,
    DataFetcher
  );

  return ResponseParser(data, error, CourseDataResponseSchema);
}
