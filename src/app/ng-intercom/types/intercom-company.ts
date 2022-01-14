export interface IntercomCompany {
  company_id: string | number;
  name: string;
  monthly_spend?: number;
  plan?: string;
  size?: number;
  created_at?: number;
  website?: string;
  industry?: string;
  id?: string | number | undefined;
  remote_created_at?: number | undefined;
  user_count?: number | undefined;
}
