# ⚡ RemixJS

SoftEdge UI works seamlessly with [Remix](https://remix.run) using native web features and React. You can use it with `useSearchParams()` to enable URL-based filtering and pagination.

### 🔗 GitHub Example

👉 Check out the full RemixJS example here:  
[🔗 SoftEdge UI Remix Example (GitHub)](https://github.com/softedge-core/softedge-ui-remix-example)

### 🛠 Recommended Setup

1. Install dependencies

```bash
npm install softedge-ui
```

2. Use useSearchParams from @remix-run/react:
```tsx
import { useSearchParams } from '@remix-run/react';
import { SoftEdgeTable } from 'softedge-ui';

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SoftEdgeTable
      data={exampleData}
      columns={[...]}
      searchParams={searchParams}
      setSearchParams={setSearchParams}
    />
  );
}
```

3.	To persist filters and page state across reloads, use Remix loaders and inject URL params into the SoftEdgeTable.