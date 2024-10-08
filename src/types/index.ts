export interface IMetaHead {
  title: string;
  description: string;
  ogImageUrl: string;
}

export interface IHeroProps {
  name: string;
  about: string;
  greeting: string;
}

export interface IExperience {
  name: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  url: string;
}
export interface IExperiences {
  title: string;
  details: IExperience[];
}

export interface IProject {
  title: string;
  description: string;
  technologies: string[];
  isFeatured: boolean;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
}
export interface IProjects {
  projects: IProject[];
}

export interface IProjectDetails {
  projectDetail: IProject;
}

export interface IFancyButton {
  text: string;
  icon: string;
  url: string;
  gradient: string;
  shadow: string;
}

export interface IFancyButtons {
  buttons: IFancyButton[];
}

export interface IFancyButtonDetails {
  buttonDetail: IFancyButton;
}
