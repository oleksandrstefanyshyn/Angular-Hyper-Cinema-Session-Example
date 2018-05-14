import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session/session.service'

import { GiphyService } from '../shared/giphy/giphy.service';
 
@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
    private sessions: Array<any>;
  
  constructor(private sessionService: SessionService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.sessionService.getAll().subscribe(data => {
      this.sessions = data;
      for (const session of this.sessions) {
        this.giphyService.get(session.movieTitle).subscribe(url => session.giphyUrl = url);
      }
    });
  }

}
