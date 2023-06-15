## 실행

vscode 터미널에서 yarn dev 명령 입력해서 서버 실행
접속 주소: `http://localhost:3000`

## vscode extention 설치

1. 코드컨벤션: ESLint, Prettier

## 소스포맷팅 - prettier

1. `ctrl` + `,` → Settings → 'default formatter' 검색 → 'Prettier - Code Formatter' 선택
2. Setting → Text Editor → Formatting → 'Format On Paste', 'Format On Save' 체크 추천.

## package.json 업데이트

1. node_modules 삭제

- mac: `rm -rf node_modules`
- window: `rd /s /q node_modules`

2. 다시 설치

- `yarn install`
