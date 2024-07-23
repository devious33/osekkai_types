export type D_Player = {
    id: number;
    account: string;
    password: string;
    name: string;
    name_kana: string;
    readonly created_at: Date;
    readonly updated_at: Date;
    deleted_at: Date;
  };

  export type Player = {
    id: number;
    camera_id: string;
    color_code: string;
  };
  
  