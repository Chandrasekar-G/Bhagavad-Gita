import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerseOfTheDayPage } from './verse-of-the-day.page';

describe('VerseOfTheDayPage', () => {
  let component: VerseOfTheDayPage;
  let fixture: ComponentFixture<VerseOfTheDayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseOfTheDayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerseOfTheDayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
