import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCharactersListComponent } from './api-characters-list.component';

describe('ApiCharactersListComponent', () => {
  let component: ApiCharactersListComponent;
  let fixture: ComponentFixture<ApiCharactersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCharactersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
