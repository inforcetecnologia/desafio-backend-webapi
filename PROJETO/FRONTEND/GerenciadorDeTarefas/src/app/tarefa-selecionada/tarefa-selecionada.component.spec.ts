import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaSelecionadaComponent } from './tarefa-selecionada.component';

describe('TarefaSelecionadaComponent', () => {
  let component: TarefaSelecionadaComponent;
  let fixture: ComponentFixture<TarefaSelecionadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaSelecionadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaSelecionadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
