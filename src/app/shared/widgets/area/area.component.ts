import { Component, OnInit, Input } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridsterItemComponentInterface,GridType } from 'angular-gridster2';

@Component({
  selector: "app-widget-area",
  templateUrl: "./area.component.html",
  styleUrls: ["./area.component.scss"],
})
export class AreaComponent implements OnInit {
  chartOptions: {};
  @Input() data: any = [];

  Highcharts = Highcharts;
  chart: Highcharts.Chart | null;
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  public unitHeight: number;
  public item1: GridsterItem;  
  width;
  height;
  constructor() {
    this.unitHeight = 0;
    this.item1 = { x: 100, y: 100, rows: 3, cols: 10 };
     this.options = {      
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      fixedRowHeight: 120,      
      gridType: GridType.VerticalFixed,
      resizable: {
        enabled: true
      },
      draggable: {
        enabled: true
      }
    };
  }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "area",
      },
      title: {
        text: "Random Data",
      },
      subtitle: {
        text: "Demo",
      },
      tooltip: {
        split: true,
        valueSuffix: " millions",
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: [
        {
          name: "Asia",
          data: [502, 635, 809, 947, 1402, 3634, 5268],
        },
        {
          name: "Africa",
          data: [106, 107, 111, 133, 221, 767, 1766],
        },
        {
          name: "Europe",
          data: [163, 203, 276, 408, 547, 729, 628],
        },
        {
          name: "America",
          data: [18, 31, 54, 156, 339, 818, 1201],
        },
        {
          name: "Oceania",
          data: [2, 2, 2, 6, 13, 30, 46],
        },
      ],
    };

    HC_exporting(Highcharts);
    
    setTimeout(() => {
      document.dispatchEvent(new Event("resize"));
    }, 300);
  }
}
