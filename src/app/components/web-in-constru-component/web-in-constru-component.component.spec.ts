import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebInConstruComponentComponent } from './web-in-constru-component.component';

describe('WebInConstruComponentComponent', () => {
  let component: WebInConstruComponentComponent;
  let fixture: ComponentFixture<WebInConstruComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebInConstruComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebInConstruComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
