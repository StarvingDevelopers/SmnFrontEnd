import {Injectable} from "@angular/core";
import {DataService} from "./data.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private dataService: DataService) { }

  getFriendsList(user: string): Observable<any>{
    return this.dataService.getData('/friend/friend-list-details/' + user).pipe(map(data => data.friendsProfile))
  }

  getFriendRequestList(user: string) {
    return this.dataService.getData('/friend-request/pending-requests/' + user).pipe(map(data => data.friendRequests))
  }

  acceptFriendRequest(id: number) {
    return this.dataService.postDataWithoutBody('/friend-request/accept/' + id).pipe(map(data => data.friendRequests))
  }

  denyFriendRequest(id: number) {
    return this.dataService.deleteData('/friend-request/delete/' + id).pipe(map(data => data.friendRequests))
  }
}
