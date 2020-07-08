import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestingPage } from './testing.page';

describe('TestingPage', () => {
  let component: TestingPage;
  let fixture: ComponentFixture<TestingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
