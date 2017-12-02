import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargamesaComponent } from './cargamesa.component';

describe('CargamesaComponent', () => {
  let component: CargamesaComponent;
  let fixture: ComponentFixture<CargamesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargamesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargamesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
