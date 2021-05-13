import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'lwandza-drag-drop';

  todos = [
    {
      name: 'Product Launch Event',
      category: 'A/V Equipment Rental',
      date: '05/15/2018',
    },
    {
      name: 'Online Marketing',
      category: 'Launch Event Advertising',
      date: '06/30/2018',
    },
    {
      name: 'Online Marketing',
      category: 'Search Optimization',
      date: '05/15/2018',
    }
  ];

  inProgress = [
    {
      name: 'Project Tasks',
      category: 'Create Walking Deck',
      date: '05/15/2018',
    },
    {
      name: 'Human Resources',
      category: 'Work Station for Henritta Mueller',
      date: '05/15/2018',
    },
    {
      name: 'Marketing Campaigns',
      category: 'Draft Presentation',
      date: '05/15/2018',
    },
    {
      name: 'Product Launch Event',
      category: 'Future Rental for Launch Event',
      date: '05/15/2018',
    }
  ];

  completed = [
    {
      name: 'Marketing Campaigns',
      category: 'Create pitch deck',
      date: '05/15/2018',
    },
    {
      name: 'Marketing Campaigns',
      category: 'Editorial review',
      date: '05/15/2018'
    },
    {
      name: 'Product Launch Event',
      category: 'Invite list for product launch event',
      date: '05/15/2018',
    },
    {
      name: 'Product Launch Event',
      category: 'Choose Venue for Keynote',
      date: '05/15/2018',
    }
  ];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
