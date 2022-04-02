# 엄격 모드 (Strict Mode)에서 새로운 Effect가 추가되었습니다.

`StrictMode`는 응용 프로그램의 잠재적인 문제를 강조 표시하는 도구입니다.
`StrictMode`는 UI를 렌더링하지 않고하위 항목에 대한 추가 검사 및 경고를 활성화합니다.

React18이 릴리스됨과 동시에 `StrictMode`는 `Strict Effects` 모드라고 불리는 추가 동작을 할 수 있게 되었습니다.
`Strict Effects`이 활성화 되어있는 경우에는 React개발 모드에서 새로 마운트된 컴포넌트에 대해 이중 Effect를 호출합니다. `(mount -> unmount -> mount)`

이러한 효과를 추가한 이유는 컴포넌트를 여러 번 탄력적으로 마운트 및 언마운트되어야 하는 때가 있습니다.

예를 들어서 화면에서 이동한 후, 뒤로가기를 하게되면 React는 이전 화면을 즉시 표시해야합니다. 이를 위해서 React는 이전과 동일한 구성 요소 상태를 사용하여 트리를 마운트 해제하고 다시 마운트합니다. 다시 로드하는 사이에 구성요소를 정확하게 유지하여서 우수한 개발 경험을 제공할 수 있습니다.

이 기능을 사용하면 React앱에 더 나은 성능을 제공하지만, 여러 번 마운트되고 파괴되는 효과에 대해서 탄력적이게 동작해야 합니다. 이를 위해서 React18은 `StrictMode`에 대한 새로운 개발 전용 체크를 도입했습니다. 이 검사는 구성 요소가 처음 마운트될 때마다 모든 구성 요소를 자동으로 언마운트하고 두 번째 마운트의 이전 상태를 복원합니다.

Strict Mode 변경 전에는 React 컴포넌트를 마운트하여 다음과 같은 Effect를 생성했습니다.

```
* React mounts the component.
  * Layout effects are created.
  * Effects are created.
```

React18에서는 개발 모드에서 컴포넌트의 마운트 해제 및 재마운트를 시뮬레이션 합니다.

```
* React mounts the component.
  * Layout effects are created.
  * Effects are created.
* React simulates unmounting the component.
  * Layout effects are destroyed.
  * Effects are destroyed.
* React simulates mounting the component with the previous state.
  * Layout effects are created.
  * Effects are created.
```
