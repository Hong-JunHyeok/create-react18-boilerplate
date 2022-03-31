## 자동 배치란 더 나은 리렌더링을 위해 여러 개의 상태 업데이트를 한번에 처리하는 방식입니다.

기존에 리액트에서는 이벤트 핸들러 내에서만 상태 업데이트를 일괄처리
했습니다. 즉, Promise, setTimeout등에서는 일괄 처리가 되지 않았다는
뜻입니다. 하지만 이제 React 18부터는 출처에 관계없이 일괄적으로 상태
업데이트가 진행되니까 좀 더 효율적인 렌더링을 경험할 수 있습니다.

```js
// After React 18 updates inside of timeouts, promises,
// native event handlers or any other event are batched.

function handleClick() {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // React will only re-render once at the end (that's batching!)
}

setTimeout(() => {
  setCount((c) => c + 1);
  setFlag((f) => !f);
  // React will only re-render once at the end (that's batching!)
}, 1000);
```

만약, 자동 일괄 처리기능을 삭제하고 싶다면 flushSync를 사용하면 됩니다.
해당 콜백에 상태 업데이트 로직을 넣게되면 상태는 하나하나 렌더링 될
것입니다.

```js
import { flushSync } from "react-dom";

function handleClick() {
  flushSync(() => {
    setCounter((c) => c + 1);
  });
  // React has updated the DOM by now
  flushSync(() => {
    setFlag((f) => !f);
  });
  // React has updated the DOM by now
}
```

자세한 내용은 [여기](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#automatic-batching)를 참고해주세요.
