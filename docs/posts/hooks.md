# 새로운 Hooks

### useId

_사전 지식_

> Hydration은 구성 요소를 렌더링하고 `이벤트 핸들러`를 연결하는 과정을 의미합니다.
> Hydration 이후에만 사용자가 애플리케이션과 상호작용 가능합니다.

접근성을 지원하기 위해서 `aria`및 `a11y`등의 API가 브라우저에 널리 사용된다. 이러한 API들은 구성 요소를 연결하기 위해 ID를 기반으로 합니다. 만일 `Math.random()`같은 메서드로 ID를 생성한다면, 다른 외부 라이브러리를 사용하여 필요한 때마다 ID를 생성합니다. 그러나 Server-Side와 Client-Side는 ID의 불일치로 인해서 문제가 발생합니다.

지금 직면한 상황을 정리하자면 다음과 같습니다.

1. 서버 측에서 렌더링한 다음, Hydration하면 ID 불일치가 발생할 수 있습니다.
2. 페이지의 한 부분에서 서버 측에서 렌더링하고 페이지의 다른 부분에서 클라이언트 측에서 렌더링하는 경우 두 ID가 다를 수 있으며 동일해야 합니다.
3. 조건부로 ID가 있는 무언가를 렌더링하면 ID 불일치가 발생할 수도 있습니다.

위의 문제를 해결하기 위해서 `useId` Hook이 등장했습니다. 서버 렌더링 및 수화 중에 안정적인 ID를 생성합니다. 서버 렌더링 콘텐츠 외부에서는 전역 카운터로 대체됩니다.

```js
import React, { useId } from "react";

function App() {
  const id = useId();
  return (
    <>
      <div className="field">
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" name="name" id={`${id}-name`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-address`}>Address</label>
        <input type="text" aria-labelledBy={`${id}-name ${id}-address`} />
      </div>
      <div className="field">
        <label htmlFor={`${id}-passport`}>Do you have passport?</label>
        <input type="checkbox" name="passport" id={`${id}-passport`} />
      </div>
    </>
  );
}
```

### useTransition

`useTransition`과 `startTransition`으로 일부 상태 업데이트를 긴급하지 않은 것으로 표시할 수 있습니다.
자세한 내용은 [여기]("https://react18-boilerplate.vercel.app/#/transition")를 참고해주세요.

### useDeferredValue

이 훅을 사용하면 트리의 긴급하지 않은 부분의 재렌더링을 연기할 수 있습니다. debouncing과 비슷하지만 그에 비해서 몇가지 장점이 있는데, 일정 시간 지연이 없기 때문에 React는 첫 번째 렌더가 화면에 반영되는 즉시 지연 렌더링을 시도합니다. 이는 인터럽트 가능하며 사용자 입력을 차단하지 않습니다. [자세한 내용](https://reactjs.org/docs/hooks-reference.html#usedeferredvalue)을 살펴보세요.

### useSyncExternalStore

useSyncExternalStore는 외부 저장소가 저장소에 대한 업데이트를 동기식으로 강제하여 동시 읽기를 지원할 수 있게 해주는 새로운 후크입니다. 외부 데이터 소스에 대한 구독을 구현할 때 useEffect가 필요하지 않으며 React 외부의 상태와 통합되는 모든 라이브러리에 권장됩니다. 여기 [문서](https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore)를 참조하십시오.

> **Note**
> useSyncExternalStore는 어플리케이션코드가 아닌 라이브러리에서 사용하는 것을 목적으로 하고 있습니다.

### useInsertionEffect

useInsertionEffect는 CSS-in-JS 라이브러리가 렌더링에 스타일을 삽입하는 성능 문제를 해결할 수 있는 새로운 후크입니다. CSS-in-JS 라이브러리를 구축하지 않은 경우 이 라이브러리를 사용할 수 없습니다. 이 후크는 DOM이 변환된 후 실행되지만 레이아웃 효과를 보기 전에 새 레이아웃을 읽습니다. 이렇게 하면 React 17 이하에 이미 존재하는 문제가 해결되지만 React 18에서는 React가 동시 렌더링 중에 브라우저에 반환되므로 레이아웃을 다시 계산할 수 있는 기회가 생기기 때문에 더욱 중요합니다. [여기](https://reactjs.org/docs/hooks-reference.html#useinsertioneffect)를 참조해 주세요.

> **Note**
> useInsertionEffect는 응용 프로그램 코드가 아닌 라이브러리에서 사용하는 것을 목적으로 합니다.
