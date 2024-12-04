import { Injectable } from '@angular/core';
import { ResumeInterface } from './resume.interface';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor() { }
 
resumes: ResumeInterface[] = [


{
title1: "2024 - Fidelio snc",
title2: "Full Stack Developer",
location: "Milano",
description: "Descrizione descrizoine descrizione del lavoro Descrizione descrizoine descrizione del lavoro Descrizione descrizoine descrizione del lavoro Descrizione descrizoine descrizione del lavoro Descrizione descrizoine descrizione del lavoro Descrizione descrizoine descrizione del lavoro "
},

{
title1: "2019 - Present",
  title2: "title2",
  location: "location1",
  description: "desc 1"
  },
  {
title1: "title1",
    title2: "title2",
    location: "location1",
    description: "desc 1"
    },
    {
      title1: "title1",
      title2: "title2",
      location: "location1",
      description: "desc 1"
      },
           


]

getResumes(): ResumeInterface [] {
return this.resumes
}

}
