// En un archivo global.d.ts
declare namespace NodeJS {
  interface Global {
    accessToken: string | null;
  }
}
