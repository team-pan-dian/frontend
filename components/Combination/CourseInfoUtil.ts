export function CommaTagStringToTags(tagString: string): string[] {
  return tagString.split(",").map((tag) => tag.trim());
}

export default {};
