## Suspense로 선언적 프로그래밍을 할 수 있습니다.

기존에는 컴포넌트를 렌더링 하기위해 준비해야하는 상태이면 로딩상태를 따로 구현해서 반복하는 작업을 했었어야 했습니다. 하지만 React팀에서 Suspense라는 기능을 제공하면서 이 반복되는 작업을 최소화하고 선언형 프로그래밍을 할 수있게 되었습니다.

따로 컴포넌트를 렌더링하는데 시간이 필요한 컴포넌트를 Suspense로 감싸면 fallback으로 전달한 컴포넌트를 준비단계에 보여지게 됩니다. 코드는 아래와 같습니다.

```js
<Suspense fallback={<Loader />}>
  <Profile />
</Suspense>
```

### 새로운 기능 : Suspense가 SSR(Server-Side Rendering)를 지원합니다.

기본적으로 SSR은 다음과 같은 FLOW로 진행됩니다.

1. 서버에서 앱 전체를 위한 데이터를 불러온다.
2. 서버세어 HTML로 렌더링 한 다음 이를 응답으로 돌려준다.
3. 클라이언트에서 JS코드를 실행한다.
4. 클라이언트에서 서버에서 만들어진 HTML과 JS를 결합한다. (HYDRATION 이라고 함)

Suspense는 이 페이지 단위로 진행되는 SSR을 서로 독립적으로 실행하고 서로 차단하지 않는 더 작은 독립 장치로 프로그램을 나눌 수 있게됩니다.

![](https://blog.kakaocdn.net/dn/p1adX/btq7GA1y9jr/DMA51F4wBrYHM5CTiga8bk/img.png)
위 사진 자료를 보면, 기존 SSR은 1,2,3,4 **리소스가 모두 다 로드**되어야만 한다. 사용자 측면에서는 긴 기다림일 뿐더러 비효율적입니다.
그래서 리액트 팀은 Code Splitting으로 문제 해결을 시도했습니다.
하지만 이 `React.lazy`와 `Suspense`는 SSR에서는 지원이 되지 않았지만
**React 18부터는 SSR에서 코드 스플리팅이 가능해졌습니다.**
