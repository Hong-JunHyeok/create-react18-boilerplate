# 새로운 클라이언트 및 서버 렌더링 API

## React DOM Client

**이제는 `react-dom/client`를 사용합니다.**

- `createRoot render` : 기존 React17에서 `ReactDOM.render`를 대신하여 사용합니다. React18의 새로운 기능은 `createRoot render`가 없으면 동작하지 않습니다.

- `hydrateRoot` : 서버 사이드 렌더링 된 애플리케이션을 Hydration하는 방법입니다. 기존의 `ReactDOM.hydrate` 대신 사용합니다. React18의 새로운 기능은 `hydrateRoot`가 없으면 동작하지 않습니다.

## React DOM Server

**새로운 API는 `react-dom/server`에서 내보내져 서버에서의 스트리밍 서스펜스를 완전히 지원합니다.**

- `renderToPipeableStream`: 노드 환경에서 스트리밍을 위한 것입니다.

- `renderToReadableStream`: Deno 및 Cloudflare 작업자와 같은 최신 에지 런타임 환경용.
