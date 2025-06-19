declare module "formidable" {
  import { IncomingMessage } from "http";
  export interface File {
    filepath: string;
    originalFilename?: string;
    mimetype?: string;
    size: number;
  }
  export interface Fields {
    [key: string]: any;
  }
  export interface Files {
    [key: string]: File | File[];
    file?: File | File[];
  }
  export class IncomingForm {
    parse(
      req: IncomingMessage,
      callback: (err: any, fields: Fields, files: Files) => void
    ): void;
  }
  export default IncomingForm;
}
