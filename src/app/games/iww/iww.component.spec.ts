import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IwwComponent } from './iww.component';

describe('IwwComponent', () => {
  let component: IwwComponent;
  let fixture: ComponentFixture<IwwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IwwComponent]
    });
    fixture = TestBed.createComponent(IwwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
