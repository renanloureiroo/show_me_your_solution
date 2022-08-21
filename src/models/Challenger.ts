import { ImageType } from "./Image";

export type ChallengerType = {
  id: string;
  title: string;
  description: string;
  banner: ImageType;
  thumbnail: ImageType;
  challenger_in_course: string;
  slug: string;
};