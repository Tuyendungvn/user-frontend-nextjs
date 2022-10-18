type Callback = (args: any) => void;
export class EventManager implements IEventManager {
  listeners: Record<string, Set<Callback>> = {};
  addListener(name: string, fn: Callback) {
    (this.listeners[name] = this.listeners[name] || new Set()).add(fn);
    return this;
  }
  fire(name: string, payload: any) {
    let listCallbacks = this.listeners[name];
    if (listCallbacks !== undefined) {
      let data = {},
        evt;
      for (let cb of Array.from(listCallbacks)) {
        evt = this.EventArg(name, data);
        cb(payload);
        data = evt.data;
        if (evt.removed) {
          listCallbacks.delete(cb);
        }
        if (evt.cancelled) {
          break;
        }
      }
    }
    return this;
  }
  EventArg(name: string, data: any) {
    let cancelled = false;
    let removed = false;
    return {
      name,
      data,
      cancelled,
      removed,
      cancel() {
        this.cancelled = true;
      },
      remove() {
        this.removed = true;
      },
    };
  }
}
globalThis.eventManager = new EventManager();
