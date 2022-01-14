import { Injectable } from '@angular/core'

@Injectable()
export class IntercomConfigObject {
  /**
   * Pass APP_ID using this config or when call `boot()` method
   */
  appId?: string
  /**
   * Update Intercom plugin on each route change.
   * Default: false
   */
  updateOnRouterChange?: boolean
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

  /**
   * arbitrarily localize your intercom messenger
   */
  language_override?: string
}
