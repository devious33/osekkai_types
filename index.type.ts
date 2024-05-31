export type Player = {
    id: number;
    account: string;
    password: string;
    name: string;
    name_kana: string;
    readonly created_at: Date;
    readonly updated_at: Date;
    deleted_at: Date;
  };
  