import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryoutdoorComponent } from './inventoryoutdoor.component';

describe('InventoryoutdoorComponent', () => {
  let component: InventoryoutdoorComponent;
  let fixture: ComponentFixture<InventoryoutdoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryoutdoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryoutdoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
