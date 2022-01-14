import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { IntercomHideDirective } from './directives/hide.directive'
import { IntercomShowMessagesDirective } from './directives/show-messages.directive'
import { IntercomShowNewMessageDirective } from './directives/show-new-message.directive'
import { IntercomShowDirective } from './directives/show.directive'
import { IntercomShutdownDirective } from './directives/shutdown.directive'
import { IntercomTrackEventDirective } from './directives/track-event.directive'
import { Intercom } from './intercom/intercom'
import { IntercomConfigObject } from './shared/intercom-config-object.service'


@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
    IntercomHideDirective,
    IntercomShowMessagesDirective,
    IntercomShowNewMessageDirective,
    IntercomShowDirective,
    IntercomShutdownDirective,
    IntercomTrackEventDirective
  ],
  exports: [
    IntercomHideDirective,
    IntercomShowMessagesDirective,
    IntercomShowNewMessageDirective,
    IntercomShowDirective,
    IntercomShutdownDirective,
    IntercomTrackEventDirective
  ],
  providers: [
    Intercom,
    IntercomConfigObject
  ]
})
export class IntercomModule {
  static forRoot(config: IntercomConfigObject): ModuleWithProviders<IntercomModule> {
    return {
      ngModule: IntercomModule,
      providers: [
        Intercom,
        { provide: IntercomConfigObject, useValue: config },
      ]
    }
  }
}
