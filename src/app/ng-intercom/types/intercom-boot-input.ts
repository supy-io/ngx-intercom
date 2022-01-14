export interface IntercomBootInput {
    custom_launcher_selector?: string;
    user_id?: string;
    email?: string;
    /**
     * If no app_id is passed, the value on config will be used.
     * If app_id is not passed here or in config, error will be thrown.
     */
    app_id?: string;
    [propName: string]: any;
}
