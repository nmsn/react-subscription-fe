import { observable, action } from "mobx";

export default class UserStore {
  @observable userInfo = {};
  
  @action
  saveUser(user: object) {
    this.userInfo = user;
  }
}

const userStore = new UserStore();

export {
  userStore,
};
