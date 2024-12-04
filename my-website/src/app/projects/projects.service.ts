import { Injectable } from '@angular/core';
import { ProjectsInterface } from './projects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects: ProjectsInterface[] = [

    {
      imageUrl: "asstes/images/temp-hero-img.jpg",
      title: "Titolo 1",
projectSummury: "summury 1 summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1"
    },

    {
      imageUrl: "asstes/images/temp-hero-img.jpg",
      title: "Titolo 2",
      projectSummury: "summury 1 summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1"

    },

    {
      imageUrl: "asstes/images/temp-hero-img.jpg",
      title: "Titolo 3",
      projectSummury: "summury 1 summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1"

    },

    {
      imageUrl: "asstes/images/temp-hero-img.jpg",
      title: "Titolo 4",
      projectSummury: "summury 1 summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1summury 1"

    },

  ]


  getProjects(): ProjectsInterface[] {
    return this.projects;
  }

}
