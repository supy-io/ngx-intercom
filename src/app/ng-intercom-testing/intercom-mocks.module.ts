import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import {
    Intercom, IntercomConfigObject, IntercomHideDirective, IntercomShowDirective,
    IntercomShowMessagesDirective, IntercomShowNewMessageDirective,
    IntercomShutdownDirective, IntercomTrackEventDirective
} from '../ng-intercom/index'
import { IntercomMocks } from './intercom-mocks'


@NgModule({
    imports: [
        RouterTestingModule
    ],
    declarations: [
        // IntercomHideDirective,
        // IntercomShowMessagesDirective,
        // IntercomShowNewMessageDirective,
        // IntercomShowDirective,
        // IntercomShutdownDirective,
        // IntercomTrackEventDirective
    ],
    exports: [
        // IntercomHideDirective,
        // IntercomShowMessagesDirective,
        // IntercomShowNewMessageDirective,
        // IntercomShowDirective,
        // IntercomShutdownDirective,
        // IntercomTrackEventDirective
    ],
    providers: [
        {
            provide: Intercom,
            useClass: IntercomMocks
        }
    ]
})
export class IntercomTestingModule {
    static forRoot(config: IntercomConfigObject): ModuleWithProviders<IntercomTestingModule> {
        return {
            ngModule: IntercomTestingModule,
            providers: [
                { provide: IntercomConfigObject, useValue: config },
                { provide: Intercom, useClass: IntercomMocks }
            ]
        }
    }
}
