import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// const baseURL = "http://127.0.0.1:3000";
const baseURL = "";
const prefix = "/api/";
const routes = {
  login: baseURL + prefix + 'user/login',
  isAdmin: baseURL + prefix + 'user/isadmin',
  self: baseURL + prefix + 'user/self',
  changePassword: baseURL + prefix + 'user/changepassword',
  usersCount: baseURL + prefix + 'user/count',
  allUsers: baseURL + prefix + 'user/all',
  addUser: baseURL + prefix + 'user/register',
  deleteUser: baseURL + prefix + 'user/delete',
  logsCount: baseURL + prefix + 'log/count',
  allLogs: baseURL + prefix + 'log/all',
  allRooms: baseURL + prefix + 'room/all',
  roomsCount: baseURL + prefix + 'room/count',
  addRoom: baseURL + prefix + 'room/add',
  deleteRoom: baseURL + prefix + 'room/delete',
  patternsCount: baseURL + prefix + 'pattern/count',
  allPatterns: baseURL + prefix + 'pattern/all',
  addPattern: baseURL + prefix + 'pattern/add',
  deletePattern: baseURL + prefix + 'pattern/delete',
  activatePattern: baseURL + prefix + 'pattern/activate',


};
@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  token: string;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) {
  }
  setToken(token) {
    if (this.token)
      this.removeToken();
    this.token = token;
    this.httpOptions.headers = this.httpOptions.headers.append("x-access-token", token);
  }
  removeToken() {
    this.token = null;
    this.httpOptions.headers = this.httpOptions.headers.delete("x-access-token");
  }
  ///////////////////////////////////////////////////////////////////////////////////////
  login(username, password) {
    var user = {
      'username': username,
      'password': password
    };
    return this.http.post<any>(routes.login, user, this.httpOptions);
  }
  isAdmin() {
    return this.http.post<any>(routes.isAdmin, null, this.httpOptions);
  }
  self() {
    return this.http.post<any>(routes.self, null, this.httpOptions);
  }
  changePassword(oldPass, newPass) {
    var pass = {
      'password': oldPass,
      'newpassword': newPass
    };
    return this.http.post<any>(routes.changePassword, pass, this.httpOptions);
  }
  usersCount() {
    return this.http.post<any>(routes.usersCount, null, this.httpOptions);
  }
  allUsers(offset, limit) {
    var crit = {
      'limit': limit,
      offset: offset
    };
    return this.http.post<any>(routes.allUsers, crit, this.httpOptions);
  }
  addUser(name, username, passowrd) {
    var user = {
      name: name,
      username: username,
      password: passowrd
    };
    return this.http.post<any>(routes.addUser, user, this.httpOptions);
  }
  logsCount() {
    return this.http.post<any>(routes.logsCount, null, this.httpOptions);
  }
  allLogs(offset, limit) {
    var crit = {
      'limit': limit,
      offset: offset
    };
    return this.http.post<any>(routes.allLogs, crit, this.httpOptions);
  }
  deleteUser(id) {
    var user = {
      'id': id,
    };
    return this.http.post<any>(routes.deleteUser, user, this.httpOptions);
  }
  roomsCount() {
    return this.http.post<any>(routes.roomsCount, null, this.httpOptions);
  }
  allRooms(offset, limit) {
    var crit = {
      'limit': limit,
      offset: offset
    };
    return this.http.post<any>(routes.allRooms, crit, this.httpOptions);
  }
  deleteRoom(id) {
    var room = {
      'id': id,
    };
    return this.http.post<any>(routes.deleteRoom, room, this.httpOptions);
  }
  addRoom(name, inPort, inType, outPort, outType) {
    var room = {
      name: name,
      inputPort: inPort,
      inputType: inType,
      outputPort: outPort,
      outputType: outType,
    };
    return this.http.post<any>(routes.addRoom, room, this.httpOptions);
  }
  patternsCount() {
    return this.http.post<any>(routes.patternsCount, null, this.httpOptions);
  }
  allPatterns(offset, limit) {
    var crit = {
      'limit': limit,
      offset: offset
    };
    return this.http.post<any>(routes.allPatterns, crit, this.httpOptions);
  }
  addPattern(name, values) {
    var crit = {
      'name': name,
      'criteria': values,
    };
    return this.http.post<any>(routes.addPattern, crit, this.httpOptions);
  }
  deletePattern(id) {
    var room = {
      'id': id,
    };
    return this.http.post<any>(routes.deletePattern, room, this.httpOptions);
  }
  activatePattern(id) {
    var room = {
      'id': id,
    };
    return this.http.post<any>(routes.activatePattern, room, this.httpOptions);
  }
}
