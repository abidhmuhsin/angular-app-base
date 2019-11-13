import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
  key: any;
  data?: any;
}

export class BroadcasterService {
  private _eventBus: Subject<BroadcastEvent>;

  constructor() {
    this._eventBus = new Subject<BroadcastEvent>();
  }

  broadcast(key: any, data?: any) {
    this._eventBus.next({key, data});
    console.log("BROADCAST:: "+key+" data -"+data);
    console.log( this._eventBus)
    /*Subject-No states saved.
      BehaviorSubject - single _event -latest event only kept
      ReplaySubject - Array<_event> - all previous events kept
    */
  }

  on<T>(key: any): Observable<T> {
    return this._eventBus.asObservable()
      .filter(event => event.key === key)
      .map(event => <T>event.data);
  }
}


/*
Usage::
Inject 'private broadcaster:BroadcasterService' and then use
Emitter->
this.broadcaster.broadcast('AdminsMsg', 'Admin says shut down!');
Receiver->
this.broadcaster.on<string>('AdminsMsg')
 .subscribe(message => {
   console.log("BROADCAST::Received Msg with data -"+message)
 });

 For a lazy loaded module,
 this will work only after module is loaded and once subscription is registered
 Any prior broadcasts will be lost by the receiver.

 //https://blog.lacolaco.net/post/event-broadcasting-in-angular-2/
 //http://thingsofgeek.com/2016/07/03/events-in-angular2.html
  */
