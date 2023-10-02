import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-modal-error",
  templateUrl: "./modal-error.component.html",
  styleUrls: ["./modal-error.component.scss"],
})
export class ModalErrorComponent implements OnInit {
  @Input() error;
  @Output() close = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onClose() {
    this.close.emit("Hide");
  }
}
