import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { GdgDevFestEventItem } from "../../../models/gdg-devfest-event-item.model";
import {
  faUserAlt,
  faClock,
  faComments,
  faMicrophoneAlt,
  faUtensils,
  faQuestionCircle,
  faIdCard,
  faCocktail,
  faChild,
  faTrophy,
  faFilm,
  faDoorOpen,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";

export enum EventItemIconWeb {
  PRESENTATION = "fa-microphone-alt",
  BREAK = "fa-comments",
  EATING = "fa-utensils",
  QA = "fa-question-circle",
  REGISTRATION = "fa-id-card",
  PARTY = "fa-cocktail",
  WELCOME = "fa-child",
  AWARD = "fa-trophy",
  MOVIE = "fa-film",
  FINAL = "fa-door-open"
}

@Component({
  selector: "app-devfest-schedule-item",
  templateUrl: "./devfest-schedule-item.component.html",
  styleUrls: ["./devfest-schedule-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevfestScheduleItemComponent implements OnInit {
  @Input()
  eventItem: GdgDevFestEventItem;

  faClock = faClock;
  faUserAlt = faUserAlt;
  faComments = faComments;
  faMicrophoneAlt = faMicrophoneAlt;
  faUtensils = faUtensils;
  faQuestionCircle = faQuestionCircle;
  faIdCard = faIdCard;
  faCocktail = faCocktail;
  faChild = faChild;
  faTrophy = faTrophy;
  faFilm = faFilm;
  faDoorOpen = faDoorOpen;

  constructor() {}

  ngOnInit() {}

  isNow(): boolean {
    const now = new Date();
    // console.log("Now: " + now);

    const eventStart = new Date(this.eventItem.startDate);
    const eventEnd = new Date(this.eventItem.endDate);

    if (eventStart <= now && eventEnd >= now) {
      // console.log("tak to teraz!");

      return true;
    } else {
      return false;
    }
  }

  getEventIcon(): IconDefinition {
    switch (this.eventItem.getEventItemIcon(true).toLowerCase()) {
      case EventItemIconWeb.BREAK:
        return this.faClock;
      case EventItemIconWeb.EATING:
        return this.faUtensils;
      case EventItemIconWeb.PARTY:
        return this.faCocktail;
      case EventItemIconWeb.PRESENTATION:
        return this.faMicrophoneAlt;
      case EventItemIconWeb.QA:
        return this.faQuestionCircle;
      case EventItemIconWeb.REGISTRATION:
        return this.faIdCard;
      case EventItemIconWeb.WELCOME:
        return this.faChild;
      case EventItemIconWeb.AWARD:
        return this.faTrophy;
      case EventItemIconWeb.MOVIE:
        return this.faFilm;
      case EventItemIconWeb.FINAL:
        return this.faDoorOpen;
      default:
        return null;
    }
  }
}
