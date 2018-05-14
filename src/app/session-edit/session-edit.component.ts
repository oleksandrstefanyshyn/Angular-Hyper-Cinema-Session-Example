import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../shared/session/session.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-session-edit',
  templateUrl: './session-edit.component.html',
  styleUrls: ['./session-edit.component.css']
})
export class SessionEditComponent implements OnInit {
  session: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sessionService: SessionService,
              private giphyService: GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.sessionService.get(id).subscribe((session: any) => {
          if (session) {
            this.session = session;
            //this.session.href = session._links.self.href;
            this.giphyService.get(session.movieTitle).subscribe(url => session.giphyUrl = url);
          } else {
            console.log(`Session with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/session-list']);
  }

  save(form: NgForm) {
    this.sessionService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id) {
    this.sessionService.remove(id).subscribe(result => {
      this.gotoList();
    });
  }

}
