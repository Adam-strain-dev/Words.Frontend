import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInstanceFormComponent } from './search-instance-form.component';

describe('SearchInstanceFormComponent', () => {
  let component: SearchInstanceFormComponent;
  let fixture: ComponentFixture<SearchInstanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInstanceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInstanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
