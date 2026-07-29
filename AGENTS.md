# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Content lives in `content/copy.ts`

Every user-facing sentence on this site is in `content/copy.ts`. Components read
from it and must never hardcode copy. Marketing text is refined externally and
dropped back into that one file, so keeping the boundary clean is what makes
copy changes cheap.

# Claims must be true

`content/copy.ts` documents a list of claims this product cannot make
(no in-app checkout, no delivery, no ratings or user counts, not yet on the app
stores). Read it before adding or editing copy.
