import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKegsComponent } from './list-kegs.component';

describe('ListKegsComponent', () => {
  let component: ListKegsComponent;
  let fixture: ComponentFixture<ListKegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKegsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
