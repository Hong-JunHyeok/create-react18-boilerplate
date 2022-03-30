# 어떤 부분이 달라졌나요?

## 더 이상 ReactDOM.render메서드는 사용되지 않습니다.

```
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
```
