# ipadorusa~

## List

### **즐겨찾기 링크**
- [UI Laboratory] (http://mylko72.maru.net/) - UI 관련 STUDY 자료
- [jsMatch] (http://jindo.dev.naver.com/jsMatch/index.html) - 자바스크립트 코드 성능 테스트
- [Mobile Convergence] (http://mobicon.tistory.com/) - 여러종류의 스크립트 및 다양한 정보 Full Stacker 윤영식사이트
- [오늘도 끄적끄적] (https://perfectacle.github.io/) - es6 외에 정보 정리중인 개인 사사이트
- [김코딩] (http://huns.me/) - 개인사이트
- [기사자료] (http://www.bloter.net/archives/233564) - 기사자료
- [추천정보사이트] (http://blog.javarouka.me/2012/03/javascript-performance-with-coding.html) - 스크립트 성능 최적화
- [velopert] (https://velopert.com/) - 개발자사이트
- [IBM DeveloperConnect 2016] (http://www-903.ibm.com/kr/devcon2016/agenda.html) - IBM DeveloperConnect 2016
- [gomugom] (https://gomugom.github.io/) - 개발자사이트
- [quirksmode] (http://quirksmode.org/dom/core/) - 자바스크립트 사이트 caniuse와 비슷
- [Native JavaScript Equivalents of jQuery Methods: CSS and Animation] (https://www.sitepoint.com/jquery-vs-raw-javascript-2-css3-animation/)
- [clean-code-javascript] (https://github.com/ryanmcdermott/clean-code-javascript/blob/master/README.md)
- [googlejavascirptstyleguide] (https://google.github.io/styleguide/javascriptguide.xml)

## **Git 공부하기**
- 모르는 용어
	- fork
	    - 다른 사람 저장소를 가져와 저장소로 만들어 놓는 기능
	- fetch
	- smart commit
	- rebase
	- github flow
	- git vs github 의 차이
	    - Git 저장소를 직접 설치하지 않고 Github를 통해 사용 가능
    - Git 의 활용 예~ 실예

- 명령어 비교

		기능           			Git 			        Svn
		저장소의복제    		git clone   			svn checkout
		커밋           		    git commit  			svn commit
		상태확인				git status  			svn status
		변경 취소			git checkout/reset 		svn revert
		브랜치 생성			git branch				svn copy
		브랜치 전환			git checkout			svn switch
		병함					git merge				svn merge
		업데이트				git pull/git fetch		svn update
		원격 저장소에 반영	git push				svn commit
- git_command_line
![Alt text](https://github.com/ipadorusa/2017_list/blob/master/img/git/git_command_line.jpg?raw=true)
![Alt text](https://github.com/ipadorusa/2017_list/blob/master/img/git/git_command_01.jpg?raw=true)

## 퍼블리셔 지원요건 중 용어 (사이트개편하다가 궁금해서 찾아봄)
- Grunt,Gulp ,babel,react.js, angular.js
- 소스 코드 공동 작업 도구 (예: GitHub, GitLab, Bitbucket)
- 이슈 트래커 (예: JIRA, YouTrack)
- 코드 검토 도구 (예: Crucible, Upsource)
- 연속 통합(CI) 도구 (예: Travis, Jenkins)
- 정적 분석 도구 (예: CodeClimate)
- 통합 개발 환경(IDE) (예: Eclipse, IntelliJ IDEA)
- 경량 데스크톱 편집기 (예: Sublime Text, Atom, VS Code, Vim)
- 클라우드 기반 편집기 또는 IDE

## 모듈로더
- Browserify
- Webpack
- RequireJS
- SystemJS
- Rollup

## agile software development
- Scrum
- Kanban
- XP
- Combined

## 정리는 나중에
- Node.js - 실시간으로 트랜스파일이 가능한 개발환경의 기반이 됩니다.
- Electron - 구글 크롬 브라우저에서 import(require)문을 직접 이용하는 데 필요합니다.
- Babel - ES6, ES7, JSX등 차세대 자바스크립트 코드를 구사하기 위해 사용합니다.
- ESLint - 코드 스타일을 안내해주고, 빈번히 발생하는 개발 실수를 줄여줍니다.
- Webpack - 프로덕션 빌드 과정에서 모듈 패키징에 사용됩니다.
- Jest - 자바스크립트 유닛 테스트의 고통을 덜 수 있습니다.
- Nightwatch.js - 구글 크롬 외 다른 브라우저에서의 작동 여부를 테스트하고 자동화를 위해 사용합니다.
- Grunt - 이 모든 과정을 수월하게 관리할 수 있도록 도와주는 태스크 매니저입니다.


## CR LF CRLF

Carriage Return
- CR = \r
Line Feed
- LF = \N
Carriage Return and Line Feed
- CRLF = \R\N

CR 과 LF 는 줄바꿈을 의미하는 컨트롤 캐릭터이고, 각각 0x0D (13 decimal), 0x0A (10 decimal)를 가리킨다.
윈도우는 CR LF 를, 유닉스는 LF를, 맥의 초기 버전(9 버전 이하)은 CR을 사용한다.

이 두 키는 오래 전 타자기 시절부터 있었던 건데,
LF는 커서의 위치는 그대로 두고 종이를 한 라인 위로 올리는 동작을,
CR는 현재 라인에서 커서의 위치를 맨 앞으로 옮기는 동작을 의미했다고 한다.
CR + LF 는 두 동작을 합해서, 커서를 다음 라인의 맨 앞으로 옮겨주는 것이었다.

이후, 메모리 절약을 위해 OS 디자이너들이 문자열을 줄이면서 차이가 생겼다고 한다.




1. ES6의 제너레이터를 사용한 비동기 프로그래밍
http://meetup.toast.com/posts/73
---
ES6가 다른 언어로 느껴지실 지도 모릅니다.

2. Chrome Devtools를 이용한 Web Application Memory 분석법
https://sculove.github.io/blog/2016/10/05/memory/

3. 전국 도서관을 분석해보자
https://brunch.co.kr/@sunghyunlim/20
---
ElasticSearch(엔진) - Logstash(데이터 수집기) - Kibana(가시화)

4. 나만 모르고 있던 – HTTP/2

http://www.popit.kr/나만-모르고-있던-http2/

5. 하나의 생태계는 어떻게 갈라파고스화 되어 가는가?
http://seokjun.kr/how-to-make-galapagos/
---
해외 컨퍼런스에 참석하며 느낀점이랍니다. 추천!

6. safari 10에서 ES6 100% 지원
https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Articles/Safari_10_0.html

7. CORS
https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS
- - -
http://d2.naver.com/helloworld/1899560 여기서 많이 언급되어서 찾아봤습니다.
https://www.html5rocks.com/static/images/cors_server_flowchart.png 이 차트를 통해 대략 flow를 파악하실 수 있습니다.
아닌가..복잡하죠..

8. [코드 리뷰 이야기] 단수형을 단수형이라 부르지 못하고, 복수형을 복수형이라 부르지 못하니
http://www.popit.kr/코드-리뷰-이야기-단수형을-단수형이라-부르지-못하/
---
코드리뷰 합시다, 여러분!

9. 확장하기 쉬운 코드가 아니라 삭제하기 쉬운 코드를 작성하자
https://harfangk.github.io/2016/10/30/write-code-that-is-easy-to-delete-not-easy-to-extend-ko.html
---
쉽게 읽으면 쉽고, 어렵게 읽으면 어렵네요.
저는 잘 모르겠지만...'우리 좀 치우고 살자'라고 말해봅니다.

10. 10 Modern Software Over-Engineering Mistakes
https://medium.com/@rdsubhas/10-modern-software-engineering-mistakes-bc67fbef4fc8#.6n85ipdba
---
주의하겠습니다.

11. 외적 동기가 내적 동기를 갉아먹는다
http://agile.egloos.com/5881049

12. Rust 와 시스템 프로그래밍의 미래
http://hacks.mozilla.or.kr/2016/12/rust-and-the-future-of-systems-programming/
---
앞으로 몇 주에 걸쳐 발표된다고 합니다. 관심있는 분들은 참고!!

13. 어떤 팀이 좋은 팀일까요? – Tech planet 2016 참가 후기
https://selfothercontext.com/2016/10/19/great-team/

14. 회의 시간에 똑똑해보이는법 9가지
https://sangminpark.blog/2016/10/25/회의-시간에-똑똑해보이는법-9가지/
