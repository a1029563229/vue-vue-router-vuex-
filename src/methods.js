/**
 * Created by ddy on 2017/2/27.
 */
import {store} from './store/store';

export const main = {
  classObject(number) {
      if (store.state.Keys.keysCurrentCount == number) {
          return 'item-active';
      } else if (store.state.Keys.keysCurrentCount != number) {
          return 'item-leaveout';
      }
  },

    classHeader(number) {
        if (store.state.Keys.keysCurrentCount == number) {
            return 'header-box-item-active';
        }
    }
};