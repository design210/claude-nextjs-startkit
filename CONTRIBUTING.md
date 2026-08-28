# 브랜치 전략 (Git Flow)

이 저장소는 [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) 브랜치 전략을 따릅니다. 로컬에는 [git-flow (AVH Edition)](https://github.com/petervanderdoes/gitflow-avh)가 `git flow init`으로 초기화되어 있습니다.

## 브랜치 종류

| 브랜치       | 용도                                             | 분기 기준 | 병합 대상        |
| ------------ | ------------------------------------------------ | --------- | ----------------- |
| `master`     | 배포(프로덕션) 이력. 항상 배포 가능한 상태 유지  | -         | -                  |
| `develop`    | 다음 릴리스를 위한 통합 개발 브랜치              | `master`  | -                  |
| `feature/*`  | 기능 개발                                        | `develop` | `develop`          |
| `bugfix/*`   | `develop`에서 발견된 버그 수정                   | `develop` | `develop`          |
| `release/*`  | 배포 준비(버전 고정, 문서 정리 등)               | `develop` | `master`, `develop` |
| `hotfix/*`   | 배포된 `master`의 긴급 버그 수정                 | `master`  | `master`, `develop` |

## 기본 사용법

```bash
# 기능 개발 시작
git flow feature start <feature-name>
# ... 작업 및 커밋 ...
git flow feature finish <feature-name>   # develop으로 병합

# 릴리스 준비
git flow release start <version>
# ... 버전/문서 정리 ...
git flow release finish <version>        # master + develop으로 병합, 태그 생성

# 긴급 수정
git flow hotfix start <version>
# ... 수정 ...
git flow hotfix finish <version>         # master + develop으로 병합, 태그 생성
```

`git flow` CLI 없이 표준 `git`만으로 작업해도 무방합니다. 이 경우 브랜치명 규칙(`feature/`, `bugfix/`, `release/`, `hotfix/`)만 그대로 따르고, PR을 통해 `develop`(또는 `master`)에 병합하면 됩니다.

## 규칙

- `master`, `develop`에는 직접 커밋/푸시하지 않고 PR을 통해서만 병합합니다.
- 커밋 메세지는 한글로 작성합니다 (`CLAUDE.md` 참고).
- `feature/*`, `bugfix/*`는 작업이 끝나면 삭제합니다.
