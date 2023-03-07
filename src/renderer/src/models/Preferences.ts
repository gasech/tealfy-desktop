export type timeFormat = 12 | 24

export default interface Preferences {
  colorSheme: string;
  fontSize: number;
  fontFamily: string;
  clockFormat: timeFormat;
}
