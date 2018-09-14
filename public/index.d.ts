interface IStorage {
  key?: string;
  save?: (data: Object, theKey?: string) => void;
  load?: (theKey: string) => any;
}

interface IStore {
  getState: () => Object;
  subscribe: (fn: Function) => number;
  dispatch: (action: any) => void;
}

export const store: IStore;
export const storage: IStorage;
export const autoStorageSave: (store: any, needSaveKeys: Array<any>) => void;
export const Provider: Function;
export const connect: (
  mapStateToProps?: (state: Object, ownProps?: Object) => Object,
  mapDispatchToProps?: (dispatch: Function) => Object,
) => Function;
