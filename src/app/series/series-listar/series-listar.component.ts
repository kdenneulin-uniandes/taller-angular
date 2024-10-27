import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-listar',
  templateUrl: './series-listar.component.html',
  styleUrls: ['./series-listar.component.css']
})
export class SeriesListarComponent implements OnInit {
  seriesData: Array<Serie> = []
  averageString: string = " "; 
  average:number = 0; 

  constructor(private serieService: SeriesService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.seriesData = series; 
      this.getAverageSeasons(); 
    })
  }

  getAverageSeasons() {
    let totalSeries = 0;
    let totalSeasons = 0;
    for (let serie of this.seriesData){
      totalSeries++;
      totalSeasons = totalSeasons+ serie.seasons;
    }
    this.average = totalSeasons / totalSeries;
  }

  ngOnInit() {
    this.getSeries(); 
  }


}
