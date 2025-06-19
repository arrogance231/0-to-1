declare module "pdf-parse" {
  function pdfParse(
    buffer: Buffer | Uint8Array,
    options?: any
  ): Promise<{ text: string }>;
  export = pdfParse;
}
