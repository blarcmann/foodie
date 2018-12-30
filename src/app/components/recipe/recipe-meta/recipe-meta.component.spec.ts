import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMetaComponent } from './recipe-meta.component';

describe('RecipeMetaComponent', () => {
  let component: RecipeMetaComponent;
  let fixture: ComponentFixture<RecipeMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
