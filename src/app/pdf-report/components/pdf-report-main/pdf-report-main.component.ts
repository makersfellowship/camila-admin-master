import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MainService } from "src/app/core/services/main.service";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
@Component({
  selector: "app-pdf-report-main",
  templateUrl: "./pdf-report-main.component.html",
  styleUrls: ["./pdf-report-main.component.scss"],
})
export class PdfReportMainComponent implements OnInit {
  readonly API_SURVEY: string = "api/survey";
  public surveyResponse: any = {};
  public evaluators = [
    {
      firstName: "Camila",
      lastName: "Zancanella",
      relation: "Coworker",
      company: "Makers",
      linkedin: "https://www.linkedin.com/in/camilazancanella/",
    },
    {
      firstName: "Camila",
      lastName: "Zancanella",
      relation: "Coworker",
      company: "Makers",
      linkedin: "https://www.linkedin.com/in/camilazancanella/",
    },
    {
      firstName: "Camila",
      lastName: "Zancanella",
      relation: "Coworker",
      company: "Makers",
      linkedin: "https://www.linkedin.com/in/camilazancanella/",
    },
  ];

  public test = [1, 1, 2, 4, 5, 6];
  public testtt = [1, 1, 2, 4, 5];

  public candidate: any = {};
  public references: any = [];

  public formatResponses: any = {};

  /** Loader settings */
  public loading: boolean = false;
  public customLoadingTemplate = {};

  @ViewChild("reportpdf", { static: false }) reportPDF: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mainService: MainService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.getReportInformation({ surveyId: params["id"] });
    });
  }

  public getReportInformation({ surveyId }) {
    this.loading = true;
    this.mainService
      .get({ api: `${this.API_SURVEY}/report/survey/${surveyId}` })
      .subscribe(async (response) => {
        this.loading = false;
        this.candidate = response["candidate"];
        this.references = response["references"];
        this.formatResponses = response["formatResponses"];
        this.surveyResponse = response;
      });
  }

  public onDownloadReport() {
    this.loading = true;
    html2canvas(this.reportPDF.nativeElement, { scale: 2 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL("image/png");
      const fileWidth = 250;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF("p", "mm", [fileWidth, generatedImageHeight]);
      PDF.addImage(
        imageGeneratedFromTemplate,
        "PNG",
        0,
        0,
        fileWidth,
        generatedImageHeight
      );
      PDF.html(this.reportPDF.nativeElement.innerHTML);
      PDF.save(
        `${this.candidate.firstName} ${this.candidate.lastName} - Camila reference check.pdf`
      );
      this.loading = false;
    });
  }

  public concatText({ array }) {
    let text = "";
    if (array.length == 1) {
      text = array[0];
    } else {
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array.length - 1 == i) {
          text = text + element;
        } else if (array.length - 2 == i) {
          text = text + element + " and ";
        } else {
          text = text + element + ", ";
        }
      }
    }
    return text;
  }
}
