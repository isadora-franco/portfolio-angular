import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Trainee Desktop',
        p: 'Asimov JR / UNIFEI | Abr 2026 - Atual',
      },
      text: '<p>Atuação como Trainee de Desenvolvimento Desktop na empresa júnior Asimov JR, vinculada à Universidade Federal de Itajubá (UNIFEI).</p><p>Desenvolvimento de aplicações desktop, colaborando em projetos reais com foco em qualidade de código e boas práticas de engenharia de software.</p>',
    },
    {
      summary: {
        strong: 'Membro de Sistemas Embarcados',
        p: 'Cheetah E-Racing / UNIFEI | Mar 2023 - Jan 2026',
      },
      text: '<p>Participação na equipe Cheetah E-Racing da UNIFEI, projeto de Fórmula Elétrico estudantil, atuando na área de Sistemas Embarcados.</p><p>Responsabilidades incluíam o desenvolvimento de esquemas elétricos, criação e revisão de PCBs, programação de microcontroladores e realização de testes em bancada e em pista.</p><p>Experiência prática com hardware embarcado, eletrônica aplicada e trabalho em equipe multidisciplinar em ambiente de competição de engenharia.</p>',
    },
  ]);
}
