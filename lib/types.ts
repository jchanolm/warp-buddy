// lib/types.ts
export type Viewer = {
    fid: number;
    username?: string;
    displayName?: string;
  };
  
  export type MiniKitContext = {
    viewer?: Viewer;
  };
  