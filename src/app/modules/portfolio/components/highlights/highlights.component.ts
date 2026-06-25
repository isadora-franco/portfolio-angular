import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss',
})
export class HighlightsComponent {
  public arrayHighlights = signal([
    {
      title: 'Sistemas Embarcados',
      text: 'Experiência com microcontroladores, testes e integração entre hardware e software.',
    },
    {
      title: 'PCB Design',
      text: 'Desenvolvimento e revisão de placas, com atenção à organização, documentação e funcionamento do circuito.',
    },
    {
      title: 'Desenvolvimento Web',
      text: 'Criação de projetos responsivos utilizando tecnologias como HTML, CSS, JavaScript, TypeScript e Angular.',
    },
  ]);
}
