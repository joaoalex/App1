import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestepagePage } from './testepage.page';

describe('TestepagePage', () => {
  let component: TestepagePage;
  let fixture: ComponentFixture<TestepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
