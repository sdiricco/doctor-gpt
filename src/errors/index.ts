export class AppError extends Error {
  code?: number;
  details?: string;
  hint?: string;
  constructor(message:string, options?:{
    name?: string;
    code?: number;
    details?: string;
    hint?: string;
  }) {
    super(message);
    this.name = options!.name || 'Unknown error'
    this.code = options!.code; 
    this.details = options!.details;
    this.hint = options!.hint
  }
}
