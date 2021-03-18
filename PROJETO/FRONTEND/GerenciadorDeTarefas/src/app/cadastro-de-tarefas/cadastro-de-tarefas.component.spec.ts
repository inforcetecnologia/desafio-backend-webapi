import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeTarefasComponent } from './cadastro-de-tarefas.component';

describe('CadastroDeTarefasComponent', () => {
  let component: CadastroDeTarefasComponent;
  let fixture: ComponentFixture<CadastroDeTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
