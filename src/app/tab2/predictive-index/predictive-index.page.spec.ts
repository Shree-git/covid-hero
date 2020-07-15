import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PredictiveIndexPage } from './predictive-index.page';

describe('PredictiveIndexPage', () => {
  let component: PredictiveIndexPage;
  let fixture: ComponentFixture<PredictiveIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictiveIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PredictiveIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
