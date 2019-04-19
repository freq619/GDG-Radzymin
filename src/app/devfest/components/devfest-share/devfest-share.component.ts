import { Component, OnInit, Input, ChangeDetectionStrategy } from "@angular/core";
import { GdgImage } from "../../../models/gdg-image.model";

@Component({
  selector: "app-devfest-share",
  templateUrl: "./devfest-share.component.html",
  styleUrls: ["./devfest-share.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevfestShareComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  content: string;

  @Input()
  image: GdgImage;

  constructor() {}

  ngOnInit() {
  }

}
