import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
  selector: "toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["./toast.component.scss"],
})
export class ToastComponent implements OnInit, OnChanges {
  @Input() showToast;
  @Input() message;
  constructor() {}

  ngOnInit() {}

  public ngOnChanges(input: any): void {
    if (input.showToast.currentValue) {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    }
  }
}
