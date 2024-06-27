import {Injectable} from "@angular/core";
import {DataService} from "./data.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private dataService: DataService) { }

  getFriendsList(user: string): Observable<any>{
    return this.dataService.getData('/friend/friend-list/' + user).pipe(map(data => data.friends))
  }
}
