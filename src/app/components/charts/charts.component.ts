import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Color } from 'ng2-charts';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public barChartOptions: any = {
    responsive: true,
  };
  public barChartLabels: string[] = [];
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [{ data: [] }]
  };
  public barChartType: ChartType = 'bar';
  public barChartColors: Color[] = [{ backgroundColor: '#42A5F5' }];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const users = this.userService.getUsers();
    const workouts = users.flatMap(user => user.workouts);
    const workoutTypes = Array.from(new Set(workouts.map(w => w.type)));
    this.barChartLabels = workoutTypes;
    this.barChartData.datasets[0].data = workoutTypes.map(type =>
      workouts.filter(w => w.type === type).reduce((acc, cur) => acc + cur.minutes, 0)
    );
  }
}
