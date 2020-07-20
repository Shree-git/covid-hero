import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeReviewsPage } from './see-reviews.page';

describe('SeeReviewsPage', () => {
  let component: SeeReviewsPage;
  let fixture: ComponentFixture<SeeReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
