export default interface IAdmin {
  _id: string;
  title: string;
  description: string;
  url: string;
  aws_thumnail: Record<string, unknown>;
  meta: {
    view_count: number;
    manufactured_at: Date;
    released_at: Date;
  };
  category: CategoryType;
  aws?: Record<string, unknown>;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export enum CategoryType {
  Comedy = "comedy",
  Horror = "horror",
  Documentary = "documentary",
  Family = "family",
  Kid = "kid",
  Vietnam = "vietnam",
  USUK = "usuk",
}
