import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostReviewPage } from './post-review.page';

describe('PostReviewPage', () => {
  let component: PostReviewPage;
  let fixture: ComponentFixture<PostReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
