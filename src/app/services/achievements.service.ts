import { Injectable } from '@angular/core';
import { Award, Card } from '../components/achievements/achievements.model';

@Injectable({
  providedIn: 'root',
})
export class AchievementsService {
  private cards: Array<Card> = new Array<Card>();

  constructor() {}

  private makeData() :void {
    this.cards.push(
      new Card(
        '1',
        'award',
        new Award(
          'Quarterly Award',
          'July, 2020',
          `This is a prestigious award for employees in Software AG, it was 
      awarded for my best focus on code quality in the features assigned to me for June 2020 Release.`
        )
      )
    );
    this.cards.push(
      new Card(
        '2',
        'award',
        new Award(
          'Thank you Award',
          'February, 2020',
          `Thank you award is recommended by peers. This award was given for me for taking up the 
          complete ownership of feature.`
        )
      )
    );
    this.cards.push(
      new Card(
        '3',
        'award',
        new Award(
          'Thank you Award',
          'December, 2019',
          `Thank you award was awarded for completing few shared or common Angular User Interface 
          components for B2B application.`
        )
      )
    );
    this.cards.push(
      new Card(
        '4',
        'award',
        new Award(
          'Winner of Finnovatica contest',
          'February, 2018',
          `Finnovatica is a contest conducted by Fullerton India, Mumbai an NBFC. 
          In this competition we as a team in college proposed an idea to capture more customers and to 
          empower rural area people using a mobile app. This app helps organization in micro financing, 
          showing localized news and weather reports in regional language. To enlighten people about 
          financing, and to track their expenses for better loan approach methods. They awarded us a 
          sum of Rs. 10 Lakhs.`
        )
      )
    );
  }

  getData(): Array<Card> {
    this.makeData();
    return this.cards.slice();
  }
}
