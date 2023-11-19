import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpcComponent } from './add-pc/AddpcComponent';
import { pcsComponent } from './pc/pc.component';
import { UpdatepcComponent } from './update-pc/update-pc.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { pcGuard } from './pc.guard';



const routes: Routes = [
  { path: "pcs", component: pcsComponent },
  { path: "add-pc", component: AddpcComponent/* , canActivate: [pcGuard] */ },
  { path: "", redirectTo: "pcs", pathMatch: "full" },
  { path: "updatepc/:id", component: UpdatepcComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
