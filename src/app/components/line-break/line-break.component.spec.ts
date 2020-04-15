import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineBreakComponent } from './line-break.component';

describe('LineBreakComponent', () => {
  let component: LineBreakComponent;
  let fixture: ComponentFixture<LineBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineBreakComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
