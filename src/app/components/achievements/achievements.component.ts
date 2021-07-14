import { Component, OnInit } from '@angular/core';
import { AchievementsService } from 'src/app/services/achievements.service';
import { Card } from './achievements.model';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  awardInfo: string | undefined;
  page: any;
  awardId: number | undefined;

  openedId: string | undefined;
  cards: Array<Card> = new Array<Card>();
  constructor(
    private achievementsService: AchievementsService
  ) { }

  ngOnInit(): void {
    this.page = {
      name: "Achievements"
    };
    this.cards = this.achievementsService.getData();
    console.log(this.cards);
  }

  // showMore(value: number) {
  //   this.awardId = value;
  //   switch(value) {
  //     case 1: {
  //       this.awardInfo = "This is a prestigious award for employees in Software AG, it was awarded for my best focus on code quality in the features assigned to me for June 2020 Release.";
  //       break;
  //     }
  //     case 2: {
  //       this.awardInfo = "Thank you award is recommended by peers. This award was given for me for taking up the complete ownership of feature.";
  //       break;
  //     }
  //     case 3: {
  //       this.awardInfo = "Thank you award was awarded for completing few shared or common Angular User Interface components for B2B application.";
  //       break;
  //     }
  //     case 4: {
  //       this.awardInfo = "Finnovatica is a contest conducted by Fullerton India, Mumbai an NBFC. In this competition we as a team in college proposed an idea to capture more customers and to empower rural area people using a mobile app. This app helps organization in micro financing, showing localized news and weather reports in regional language. To enlighten people about financing, and to track their expenses for better loan approach methods. They awarded us a sum of Rs. 10 Lakhs.";
  //       break;
  //     }
  //   }
  // }

  showMore(card: Card) {
    this.openedId = card.id;
  }

  close() {
    this.openedId = undefined;
  }

  // close() {
  //   this.awardId = undefined;
  //   this.awardInfo = undefined;
  // }

}
