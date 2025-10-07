import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faLayerGroup,
  faMobileAlt,
  faServer,
  faShieldAlt,
  faWindowMaximize,
  faBell
} from '@fortawesome/free-solid-svg-icons';
import {
  faGitAlt as faGitAltIcon,
  faNodeJs,
  faDocker,
  faAngular
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPageComponent {
  faLayerGroup: IconDefinition = faLayerGroup;
  faMobileAlt: IconDefinition = faMobileAlt;
  faServer: IconDefinition = faServer;
  faShieldAlt: IconDefinition = faShieldAlt;
  faWindowMaximize: IconDefinition = faWindowMaximize;
  faBell: IconDefinition = faBell;

  faGitAlt: IconDefinition = faGitAltIcon;
  faNodeJs: IconDefinition = faNodeJs;
  faDocker: IconDefinition = faDocker;
  faAngular: IconDefinition = faAngular;

  faCode: IconDefinition = faShieldAlt;
  faDatabase: IconDefinition = faServer;
  faKey: IconDefinition = faShieldAlt;

  avatarImgPath = 'affiche-mucha-printemps.jpg';
  anamnesisLogoPath = 'Anamnesis.svg';

  constructor() {}
}
