import { Note as TNote } from "../api/note/Note";

export const NOTE_TITLE_FIELD = "id";

export const NoteTitle = (record: TNote): string => {
  return record.id?.toString() || String(record.id);
};
