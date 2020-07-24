import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayPhotoPage } from './display-photo.page';

describe('DisplayPhotoPage', () => {
  let component: DisplayPhotoPage;
  let fixture: ComponentFixture<DisplayPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
