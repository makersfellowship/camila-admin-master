import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-modal-success",
  templateUrl: "./modal-success.component.html",
  styleUrls: ["./modal-success.component.scss"],
})
export class ModalSuccessComponent implements OnInit {
  @Input() success;
  @Output() close = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onClose() {
    this.close.emit("Hide");
  }
}
