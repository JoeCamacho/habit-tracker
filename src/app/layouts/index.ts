import {NonAuthenticatedLayoutComponent} from "./non-authenticated-layout/non-authenticated-layout.component";
import {AuthenticatedLayoutComponent} from "./authenticated-layout/authenticated-layout.component";

export * from "./non-authenticated-layout/non-authenticated-layout.component";
export * from "./authenticated-layout/authenticated-layout.component";

export const Layouts = [
    NonAuthenticatedLayoutComponent,
    AuthenticatedLayoutComponent
];