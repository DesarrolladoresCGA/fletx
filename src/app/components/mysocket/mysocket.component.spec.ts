import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysocketComponent } from './mysocket.component';

describe('MysocketComponent', () => {
  let component: MysocketComponent;
  let fixture: ComponentFixture<MysocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysocketComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
