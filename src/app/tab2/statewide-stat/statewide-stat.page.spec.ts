import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatewideStatPage } from './statewide-stat.page';

describe('StatewideStatPage', () => {
  let component: StatewideStatPage;
  let fixture: ComponentFixture<StatewideStatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatewideStatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatewideStatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
