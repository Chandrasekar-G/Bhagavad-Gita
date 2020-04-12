import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerseDetailPage } from './verse-detail.page';

describe('VerseDetailPage', () => {
  let component: VerseDetailPage;
  let fixture: ComponentFixture<VerseDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerseDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
