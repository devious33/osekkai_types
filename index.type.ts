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
    game_id: number;
    name: string;
    sound_effect_id: number;
    color_code: string;
    camera_id: number;
    hits_count: number;
  };
  
  