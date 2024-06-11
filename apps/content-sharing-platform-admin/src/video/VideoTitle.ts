import { Video as TVideo } from "../api/video/Video";

export const VIDEO_TITLE_FIELD = "id";

export const VideoTitle = (record: TVideo): string => {
  return record.id?.toString() || String(record.id);
};
