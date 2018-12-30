import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "@app/material.module";
import { CreateRecipeComponent } from "@app/components/recipe/create-recipe/create-recipe.component";
import { RecipeDetailsComponent } from "@app/components/recipe/recipe-details/recipe-details.component";
import { RecipeEditorComponent } from "@app/components/recipe/recipe-editor/recipe-editor.component";
import { RecipeListComponent } from "@app/components/recipe/recipe-list/recipe-list.component";
import { RecipeMetaComponent } from "@app/components/recipe/recipe-meta/recipe-meta.component";
import { RecipePreviewComponent } from "@app/components/recipe/recipe-preview/recipe-preview.component";
import { HomeComponent } from "@app/components/home/home.component";
// import { HeaderComponent } from './layout/header/header.component';
// import { FooterComponent } from './layout/footer/footer.component';
// import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    declarations: [
        CreateRecipeComponent,
        RecipeDetailsComponent,
        RecipeEditorComponent,
        RecipeListComponent,
        RecipeMetaComponent,
        RecipePreviewComponent,
        HomeComponent,
        // HeaderComponent,
        // FooterComponent,
        // SidebarComponent
    ],
    providers: []
})


export class ComponentsModule {}