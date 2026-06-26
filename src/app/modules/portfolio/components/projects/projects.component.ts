import { Component, inject, signal } from '@angular/core';

//interface
import { IProjects } from '../../interface/IProjects.interface';

//material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/curriculo-card.png',
      alt: 'Projeto currículo de Isadora Franco',
      title: 'Currículo digital',
      summary:
        'Página responsiva criada para apresentar formação, experiências, habilidades e interesses técnicos.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      with: '180px',
      height: '84px',
      description:
        '<p>Site de currículo e portfólio desenvolvido como projeto pessoal, apresentando minha trajetória acadêmica, habilidades técnicas e experiências profissionais.</p><p>Construído com HTML, CSS e JavaScript, com design responsivo e foco em identidade visual própria.</p>',
      links: [
        {
          name: 'Visitar o Projeto',
          href: 'https://isadora-franco.github.io/isadora-portfolio/',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}