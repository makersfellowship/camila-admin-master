import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { ModalService } from "src/app/core/services/modal.service";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"],
})
export class NavigationBarComponent implements OnInit {
  public activatedMenu = "Wallet";
  readonly MENU_ITEMS = [
    {
      title: "Dashboard",
      iconOff: "./assets/svgs/grid-off.svg",
      iconOn: "./assets/svgs/grid-on.svg",
    },
    {
      title: "Templates",
      iconOff: "./assets/svgs/edit-document-off.svg",
      iconOn: "./assets/svgs/edit-document-on.svg",
    },
    {
      title: "Company",
      iconOff: "./assets/svgs/building-off.svg",
      iconOn: "./assets/svgs/building-on.svg",
    },
    // {
    //   title: "Resources",
    //   iconOff: "./assets/svgs/file-attachment-off.svg",
    //   iconOn: "./assets/svgs/file-attachment-on.svg",
    // },
  ];

  constructor(
    private router: Router,
    private modalService: ModalService,
    private activatedRoute: ActivatedRoute
  ) {
    this.changeUnexpectedItem({ url: this.router.url.replace("/", "") });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.changeUnexpectedItem({ url: event.url.replace("/", "") });
      });
  }

  public onSelectItem({ item }) {
    switch (item.title) {
      case "Dashboard":
        this.activatedMenu = item.title;
        this.router.navigate(["/dashboard"]);
        break;
      default:
        alert("Module disabled");
        break;
    }
  }

  public changeUnexpectedItem({ url }) {
    switch (url) {
      case "dashboard":
        this.activatedMenu = "Dashboard";
        break;
      default:
        this.activatedMenu = "Dashboard";
        break;
    }
  }
}
