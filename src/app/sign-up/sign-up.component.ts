import { Component, OnInit } from "@angular/core";
import { truncate } from "fs/promises";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  isSlideUp: boolean = false;
  isMainChange: boolean = false;

  constructor() {}

  ngOnInit() {}

  clickBtn(): void {
    this.isSlideUp = !this.isSlideUp;
    setTimeout(() => (this.isMainChange = !this.isMainChange), 500);
  }
}
