import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerseCardComponent } from './verse-card.component';

describe('VerseCardComponent', () => {
  let component: VerseCardComponent;
  let fixture: ComponentFixture<VerseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
