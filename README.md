# Y2K 한글 변환기 (Y2K Hangul Converter)

한글 텍스트를 Y2K 시대 감성의 특별한 문자 조합으로 변환해주는 라이브러리입니다.

## 설치

```bash
# npm
npm install @drasla/y2k-korean-converter
# pnpm
pnpm add @drasla/y2k-korean-converter
```

## 사용법

### 기본 사용

```typescript
import { applyY2KEffect } from '@drasla/y2k-korean-converter';

// 기본 변환
const result = applyY2KEffect('안녕하세요');
console.log(result); // 예: "ㅇrㄴ형ㅎrㅅㅔ요"
```

### 변환 확률 조정
```typescript
// 50% 확률로 글자 변환
const subtle = applyY2KEffect('안녕하세요', { changeChance: 0.5 });
// 100% 확률로 모든 글자 변환
const extreme = applyY2KEffect('안녕하세요', { changeChance: 1.0 });
```

### 사용자 정의 변환 맵
```typescript
import { applyY2KEffect, ConvertCharacterMapType } from 'y2k-hangul-converter';
// 사용자 정의 맵
const myCustomMap: ConvertCharacterMapType = { '안': ['ㅇr', '0ㅏㄴ'], '녕': ['ㄴㅕㅇ', 'ㄴ1ㅕㅇ'], '하': ['ㅎr', 'H'], '세': ['ㅅㅔ', '5ㅔ'], '요': ['ㅇㅛ', 'yo'] };
// 사용자 정의 맵으로 변환
const customized = applyY2KEffect('안녕하세요', { map: myCustomMap });
```