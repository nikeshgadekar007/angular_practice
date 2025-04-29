import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { ContactComponent } from "./components/routing/contact/contact.component";
import { ServicesComponent } from "./components/routing/services/services.component";

export const routes: Routes = [
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'services', component: ServicesComponent
    }
];
