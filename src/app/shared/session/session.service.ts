import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {

  public API = '//localhost:1305';
  public SESSION_API = this.API + '/sessions';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.SESSION_API);
  }

  get(id: number) {
    return this.http.get(this.SESSION_API + '/' + id);
  }

  save(session: any): Observable<any> {
    let result: Observable<Object>;
    if (session['href']) {
      result = this.http.put(session.href, session);
    } else {
      result = this.http.post(this.SESSION_API, session);
    }
    return result;
  }

  remove(id: string) {
    return this.http.delete(id);
  }
  
}
