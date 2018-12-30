import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/core';
import { HomeComponent } from '@app/components/home/home.component';
import { RecipePreviewComponent } from '@app/components/recipe/recipe-preview/recipe-preview.component';
import { RecipeDetailsComponent } from '@app/components/recipe/recipe-details/recipe-details.component';

const routes: Routes = [
  // Shell.childRoutes([
  // { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }]),
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, data: { title: extract('Welcomeee') }},
  {path: 'details', component: RecipeDetailsComponent},
  { path: 'recipe', component: RecipePreviewComponent, data: {title: extract('recipe') }},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { 
  
}