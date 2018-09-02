import { observable , action} from 'mobx';

class Service {
    @observable loading = false ;
    @action on() {
        this.loading = false;
    }
    @action off() {
        this.loading = true;
    }
}

export default new Service();