# Transition

해당 기능은 상태 업데이트를 할 때 우선순위를 정하는데에 있어서 도움을 줍니다. 대표적으로 상태 업데이트는 크게 두 가지로 나뉘게되며 이는 다음과 같습니다.

- **Urgent Update** : `긴급한 업데이트`이며, 즉각적으로 상태가 변하는 것을 기대하는 업데이트입니다.

- **Transition Update** : `긴급하지 않은 업데이트`이며, 변화에 따른 모든 업데이트가 뷰에 즉각적으로 일어나는 것을 기대하지 않습니다.

키보드 입력과 같이 빈번히 일어나는 이벤트에 큰 화면이 업데이트가 되어야 한다면 렌더링에 큰 지장이 있을 것이고 이는 사용자의 입장에서 봤을 때 매우 좋지못한 UX로 남을 수 있습니다. 그 예시로 입력 폼과 결과 참이 있는데, 입력창은 네이티브 이벤트를 발생하는 컴포넌트이므로 즉각적인 업데이트가 요구되지만, 그에 반해 결과창은 입력창보다 업데이트가 느린 것에 대해 자연스럽게 받아들이게 됩니다.

보통의 경우, 해당 기능을 다음과 같은 코드로 구현을 할 것입니다.

```js
// Urgent: Show what was typed
setInputValue(input);

// Not urgent: Show the results
setSearchQuery(input);
```

하지만 리액트는 해당 업데이트를 동일한 우선순위에서 처리하기 때문에 렌더링하는 과정이 더욱 느려지게 됩니다.

리액트 18은 `startTransition`이라는 기능을 제공하여, 상태 업데이트에 대한 우선순위를 정해줄 수 있습니다.

```js
import { startTransition } from "react";

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
  // Transition: Show the results
  setSearchQuery(input);
});
```

해당 함수의 콜백으로 상태 업데이트를 진행하게 되면 긴급 업데이트가 진행된 후 다 끝난 뒤에 업데이트만 발생하게 됩니다. Transition을 이용하여 효율적인 렌더링이 가능하게 되었습니다. 또한, `useTransition` 훅을 사용하여 백그라운드에서 진행되고 있음을 알려주고 싶을때 유용하게 사용할 수 있습니다.

```js
import { useTransition } from 'react';

const [isPending, startTransition] = useTransition();
...
{isPending && <Spinner />}
...
```
