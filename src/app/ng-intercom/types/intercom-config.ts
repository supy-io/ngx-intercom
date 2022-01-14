import { IntercomCompany } from './intercom-company'
import { IntercomAvatar } from './intercom-avatar'

export interface IntercomConfig {
  // Messenger attributes

  /**
   * Your intercom App ID
   */
  app_id?: string

  /**
   * Customize left or right position of messenger
   */
  alignment?: 'left' | 'right'

  /**
   * Customize horizontal padding
   */
  horizontal_padding?: number

  /**
   * Customize vertical padding
   */
  vertical_padding?: number

  custom_launcher_selector?: string;
  hide_default_launcher?: boolean;
  session_duration?: number;
  action_color?: string;
  background_color?: string;

  // Data attributes
  email?: string;
  phone?: string;
  created_at?: number;
  name?: string;
  /**
   * arbitrarily localize your intercom messenger
   */
  language_override?: string
  user_id?: string;
  user_hash?: string;
  unsubscribed_from_emails?: boolean;
  utm_campaign?: string;
  utm_content?: string;
  utm_medium?: string;
  utm_source?: string;
  utm_term?: string;
  company?: IntercomCompany;
  companies?: IntercomCompany[];
  avatar?: IntercomAvatar;
}
