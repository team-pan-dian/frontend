import myzod from "myzod";
import useSWR from "swr";
import DataFetcher, {
  BasicResponseSchema,
  ResponseParser,
} from "./DataFetcher";

export const CoursesListDataSchema = myzod.object({
  id: myzod.string(),
  name: myzod.string(),
  information: myzod.string(),
  img: myzod.string(),
  type: myzod.string(),
});

export const CoursesListSchema = BasicResponseSchema.and(
  myzod.object({
    data: myzod.array(CoursesListDataSchema),
  })
);

export default function useCoursesList() {
  const { data, error } = useSWR<ReturnType<typeof DataFetcher>, unknown>(
    "/api/classes",
    DataFetcher
  );

  return ResponseParser(data, error, CoursesListSchema);
}
