import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EditTextboxComponent } from './edit-text-box.component';

describe('EditTextboxComponent', () => {
  let component: EditTextboxComponent;
  let fixture: ComponentFixture<EditTextboxComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
