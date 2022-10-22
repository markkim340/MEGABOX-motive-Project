# 🎬 Project: Starbox

- 영화 예매 서비스를 제공하는 ['메가박스](https://www.megabox.co.kr/)' 사이트에 사용된 API 들을 참고하여 필요 기능들을 개발한 클론 프로젝트입니다. 개발은 초기 세팅부터 전부 직접 구현하였으며 사용된 데이터 또한 모두 직접 입력하였습니다.
  
- 사이트 선정 이유 - 기본적인 웹서비스의 CRUD 기능 이외에도 본인인증, 좌석예약, 리뷰, 좋아요 등 새로운 기능들을 접해볼 수 있고, 적지 않은 데이터들을 다양한 방법으로 입력해보고 테이블들의 연결 구조를 배워볼 수 있다는 점에서 선정하게 되었습니다.
  
- 서비스 시연영상
  
  - [전체서비스 ](https://youtu.be/K6d3YfHN9Jk)(약 7분)
    
  - [빠른예매](https://youtu.be/V87Euvf2jiY) (약 3분)
    
  - [상영시간표](https://youtu.be/c99YMNSKJbw) (약 1분)
    
<div align="center">
<img width="1000" alt="스크린샷 2022-10-04 오후 1 38 35" src="https://user-images.githubusercontent.com/70873668/197322159-cf41db23-8d35-4f1d-8f72-c357423500dd.png">
</div>

## 🎬 1. 개발기간 및 인원

- **개발 기간** : 22-09-19 ~ 22-09-30 (12 DAYS)
  
- **Front End** : 김정연, 박유빈, 양미옥, 이동호 - 4명
  
- **Back End** : 김민우, 오인환 - 2명
  
- [Front-End Repository 바로가기](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team2-front)
  
- [Back-End Repository 바로가기](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team2-back)
  

## 🎬 2. 데이터 모델링

▶️ [dbdiogram 링크](https://dbdiagram.io/d/6328594d0911f91ba5e24b09)
</br>
![Starbox_dbdiagram](https://user-images.githubusercontent.com/70873668/197322397-38c2fab9-b54a-4e07-ba03-fd53809de941.png)
</br>
## 🎬 3. 적용 기술 및 구현 기능

### 3-1. 적용 기술

- Front-end : React.js(개발환경은 CRU), sass, styled-componets, fetch, axios, ContextAPI, webpack(컴파일러는 babel)
- Back-end : Node.js, Express, TypeORM, MySQL, JWT, bcrypt, SENS API
- Common : RESTful API, PostMan, LiveServer, nodemon, Google Spreadsheet
- Community Tools : Slack, Zoom, Notion, Zepp, Trello
- Version Control Tool : Git(flow는 github flow방식을 따름)
![trello](https://user-images.githubusercontent.com/70873668/197322415-f2f7dd74-74da-470b-b54a-e6078d912e97.PNG)
</br>

### 3-2. 구현 기능

> **프론트엔드**

- 이동호
  
  - [예매페이지] 빠른예매 화면 UI 및 레이아웃
  - [예매페이지] 날짜, 시간별 슬라이드 추가
  - [예매페이지] 더보기 달력 추가 및 에러 헨들링 모달 기능
  - [예매페이지] 좌석선택 화면 전체 UI
  - [예매페이지] 인원별 좌선 선택 기능
  - [예매페이지] 결제화면 전체 UI
  - [예매페이지] 결제API 연동
  - [상영시간표] 전체 UI 및 레이아웃
  - [상영시간표] 더보기 달력 추가
  - [상영시간표] 날짜별 슬라이드
  - [상영시간표] 네비게이션 영화, 극장별 Tab
- 김정연
  
  - [상세페이지] 전체 레이아웃
  - [상세페이지] 누적관객수 tooltip
  - [상세페이지] 기대평 등록 삭제 레이아웃
  - [상세페이지] 무비포스트 레이아웃
  - [상세페이지] 예고편 레이아웃
  - [상세페이지] 스틸컷 레이아웃
  - [상세페이지] 기대평 map
  - [상세페이지] 예매버튼 링크
  - [상세페이지] 좋아요 api
- 박유빈
  
  - [영화리스트] 전체 레이아웃
  - [영화리스트] 영화 카테고리 페이지 이동 기능
  - [영화리스트] 박스오피스 레이아웃
  - [영화리스트] 영화 리스트 카운트 기능
  - [영화리스트] 영화 리스트 map
  - [영화리스트] 영화 더보기 페이지네이션 기능
  - [영화리스트] 영화 포스트 이벤트
  - [영화리스트] 영화 검색 기능
  - [영화리스트] 영화 필터 기능
- 양미옥
  
  - [헤더] 전체 레이아웃
  - [헤더] use의 이동경로에 따른 ui 구현
  - [헤더] 서브메뉴 탭기능
  - [로그인] 전체 레이아웃
  - [로그인] 휴대폰 인증 기능
  - [로그인] 약관동의 레이아웃
  - [로그인] 약관동의 필터 기능
  - [마이페이지] 네비게이션 레이아웃

> **백엔드**

- 김민우
  
  - ERD 모델링
  - 데이터 입력 (영화진흥위원회 통합전산망 제공 DB 사용)
  - [영화] 전체 리스트 조회 API
  - [영화] 검색 기능 구현
  - [영화] 상영작/개봉예정작/개봉일순/이름순/국내/해외 필터 및 정렬 기능
  - [영화] 페이지네이션 기능 (더보기)
  - [영화] 상세페이지 조회 API
  - [리뷰] 리뷰 조회 API - 현재 기준으로 작성일자 소요 시간(분단위) 조회 기능 (몇분 전 작성)
  - [리뷰] 리뷰 조회 API - 작성된 리뷰의 평점 평균 / 총 갯수 조회 기능 구현
  - [예매] 상영스케쥴 조회 API - 상영일자/영화/지역/영화관별 상영스케쥴 - 다중 필터 적용
  - [예매] 좌석선택 API - 영화관별 등록된 좌석 데이터와 각 상영스케쥴 연동 기능
  - [예매] 좌석선택 API - 예약된 좌석 정보 전달 기능
  - [예매] 티켓생성 API - 선택한 좌석/인원/유형으로 좌석 예약기능
  - [좋아요] 유저-영화별 좋아요 추가/삭제 API
- 오인환
  
  - ERD 모델링
  - 데이터 입력 (영화진흥위원회 통합전산망 제공 DB 사용)
  - [유저] 회원가입 / 로그인 API
  - [유저] 아이디 찾기 기능
  - [유저] 비밀번호 찾기 및 임시비밀번호 발급 API
  - [유저] 토큰 인증/인가 API
  - [유저] 휴대폰 SMS 본인 인증 API (네이버 SENS API 사용)
  - [유저] 마이페이지 API
  - [리뷰] 리뷰 생성/삭제 API

## 🎬 4. API Docs

▶️[ POSTMAN API Docs 링크](https://documenter.getpostman.com/view/22703204/2s7ZE4NQnp)

<img width="1000" alt="postman" src="https://user-images.githubusercontent.com/70873668/197322498-e2088ff1-e29c-404a-9f15-948b030e1057.png">

## 🎬 5. 작성한 코드에 대한 설명 및 리뷰

### 1. 영화예매
  
  - **상영스케쥴 테이블의 생성**
    
    > 예매를 하기위해선 영화명/상영일자/영화관/상영관/상영시간을 선택해야 한다. <br/>
    > 본 프로젝트에서는 전국 108개 지점의 영화관, <br/>
    > 각 지점별 영화관마다 3개의 상영관, <br/>
    > 일자별 5번의 스케쥴로 특정 영화가 상영됨을 가정하였다. <br/>
    > 하루에 영화관의 수(108) x 상영관의 수(3) x 상영횟수(5) = 1620개의 스케쥴이 상영된다. <br/>
    >  22.09.30부터 22.10.07 까지 7일간의 상영스케쥴을 데이터로 추가하였다. <br/>
    > 총 생성된 상영스케쥴 DATA의 갯수는 1,620 x 7 = 11,340개가 된다. <br/>
    > 
    > (데이터 생성은 구글 스프레드시트를 통해 하루의 상영시간표 1,620행을 자동완성기능 등을 생성한 뒤 각 일자별로 동일하게 등록하였습니다. <br/>
    상영되는 movie_id는 1~8까지 랜덤으로 부여되게 생성하였으며, 만들어진 데이터를 csv파일로 전환하여 MySQL에 import하였습니다.)
    
  - **상영관별 좌석선택 및 좌석조회**
    
    > 예약자는 상영스케쥴을 선택 한 뒤 좌석을 선택해야 한다.   
    > 좌석은 상영관별로 구조가 동일하다.   
    > 그러나, 상영스케쥴별 예약된 좌석정보와 잔여좌석 수가 다르다.   
    > 그렇다면 좌석의 구조(좌석번호)를 어떤식으로 데이터에 저장해야할까?   
    > Seats라는 테이블을 만든 뒤 다음과 같은 방법을 시도해보았다.
    
    - 상영스케쥴과 좌석테이블을 1:1로 연결
      - 단순하게 생각해 각각 상영스케쥴별로 좌석정보를 저장하는 방법을 고안.<br/>
      - 장점 - 스케쥴별로 예약좌석,잔여좌석을 쉽게 조회 및 전달할 수 있다.   
      - 단점 - 11,340개를 만든 각각의 상영스케쥴로 좌석정보를 생성한다는 것은 엄청나게 많은 데이터를 만들어야하고 비효율적이라는 것을 데이터를 만들며 깨달았다.   데이터를 사용하는게 문제가 아니라 생성 자체에서부터 문제가 생겼다.            
    - 좌석테이블과 상영관을 1:1으로 연결        
      - 상영관별로 각각의 좌석정보를 생성한다. 상영스케쥴의 좌석현황 조회시,   선택한 상영스케쥴 Table id값과 = 예약시 생성되는 Tickets Table의 상영스케쥴 id가 같은 값을 조회하여 Tickets 테이블 내 좌석정보를 함께 전달해준다.   
      - 장점 - 생성해야하는 데이터가 훨씬 줄어들며 효율적이다.   
      - 단점 - Tickets 테이블을 조인하여 쿼리문을 생성하여야 한다.       
    - 좌석테이블과 상영관을 1:N으로 연결         
      - 2번의 방법으로 진행 중 상영관별로 동일한 좌석 구조와 갯수를 가질 경우도 있는데,   굳이 하나하나 만드는 건 비효율적이라는 생각이 들었다.   그리고 본 프로젝트의 기한상 상영관마다 각각의 구조와 갯수를 나누기에는 무리라는 판단이 섰다.   그래서 Seats Table의 id를 여러 상영관이 공유할 수 있는 방법을 고안했다.
      - 장점 - 데이터가 가장 효율적으로 줄어들며, 상영관별 좌석정보 관리가 쉬워진다.
      - 단점 - 찾지 못하였다.
       
      다양한 시도 끝에 3번의 방법이 가장 효율적이라 판단을 하고 3번을 사용하였다.
      
  - **좌석정보 DATA 저장 방식**
    
    > 영화를 예매할 때 사용하는 x열x번의 그 바둑판식 좌석을 데이터에서 어떻게 저장해야할지 다양한 방법으로 고민과 시도를 하였다. 다음은 그 시도들을 작성하였다.
    
   <img width="700" alt="스크린샷 2022-10-22 오후 5 21 56" src="https://user-images.githubusercontent.com/70873668/197332715-3619090e-23f8-4e9c-a40c-ad3bcb2f2ed3.png">

    
    1. 배열을 통한 저장
      
      머리에 떠오른 첫번째 방법. 가장 단순하게 생각했을때 상영관마다 좌석을 하나의 배열에 통째로 저장한 방법.
      [A1,A2,A3......E19,E20] 
      장점 : 저장하기가 쉽고 단순하다.
      단점 : 좌석의 위치를 구분하기가 힘들다. 프론트에서 전달받을 때 행/열 구분을 하기가 복잡해진다. 데이터상에서 너무 길어 보기가 힘들다.
      
    2. 2차원 배열을 통한 저장
      
      프론트와 소통하며 행,열에 대한 구분이 필요하다고 판단되어 고안한 방법.   
      프론트가 좌석배열을 만들 경우엔 다음과 같이 접근할 것 같은데, 백엔드에서는 맞지 않은 접근방법인것 같다..
       [[0,0,0,0,0,0,0], 
        [0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0]]
       
      장점 : 빈자리-0, 예약된자리-1로 구분하여 행, 열, 예약여부까지 한 번에 저장한다.
      단점 : 배열 데이터를 MySQL 데이터 상에 저장하는 방법이 복잡하다. 
            상영관별 좌석테이블을 JOIN하였기 때문에 예약여부까지 저장하면 상영스케쥴마다 적용이 불가능하다.
      
    3. seat_colomn, seat_row 구분을 통한 저장
      
      | id  | theater_screen_id (상영관id) | seat_colomn | seat_row |
      | --- | --- | --- | --- |
      | 1   | ex) 15 | A   | 1   |
      | 2   | ex) 15 | A   | 2   |
      | 3   | ex) 15 | A   | 3   |
      | 4   | ex) 15 | ... | ... |
      | 5   | ex) 15 | E   | 20  |
      
      장점 : 행/열 구분이 확실해진다. 프론트에서 좌석을 만들 때 사용하기 편할 것 같다.
      단점 : colomn과 row로 구분된 데이터를 사용할 때 조금 복잡했다.
      
    4. 그냥 좌석명으로 저장
      
      | id  | theater_screen_id | seat_name |
      | --- | --- | --- |
      | 1   | ex) 15 | A1  |
      | 2   | ex) 15 | A2  |
      | 3   | ex) 15 | ... |
      | 4   | ex) 15 | E19 |
      | 5   | ex) 15 | E20 |
      
      장점 : 1번 방식과 비슷한 가장 단순한 방법으로 사용하기가 쉽다.
      단점 : 프론트에서 행/열 구분 및 사용하기가 불편하다. 
      
      다양한 방법을 시도해 보았는데, 정답은 없는 것 같다. 
      내가 생각했던 방식 말고도 훨씬 더 효율적인 많은 방식들이 존재할 것 같은데 아직은 내공이 부족하다는 생각이 든다.
      사용하는 서비스에 맞춰서 제작하면 될 것 같다. 결국은 좀 쉬운 방식의 4번을 사용했다. 
      프론트엔드를 담당한 동호님이 seats의 총 자리수만 받아왔을 때 좌석구조가 자동으로 생성되게 코드를 작성해주신 덕분이었다. 
      좌석은 A1부터 E20까지 100자리로 전체 통일하였다.
      
### 2. 상영스케쥴 필터 조회

- **models/bookingDao.js**
  

```javascript
const getTimeSchedule = async (filter) => {
  try {
    const timeSchedule = await myDataSource.query(`
      SELECT
      id as schedule_id,
      title,
      theater_name,
      screen_name,
      start_time,
      end_time,
        (SELECT COUNT(*) FROM seats WHERE theater_screen_id = schedule.theater_screen_id) as total_seat,
        (SELECT COUNT(*)
        FROM starbox.bookings
        LEFT JOIN tickets ON tickets.booking_id = bookings.id
        WHERE schedule_id = schedule.id) as booked_seat
      FROM 
      schedule
      ${filter}
      ORDER BY start_time
      `);
    return timeSchedule;
  } catch (err) {
    throw new BaseError('INVALID_DATA_INPUT', 500);
  }
};
```

상영스케쥴을 조회하는 SQL 문을 작성하였다. WHERE 조건문의 자리엔 service모듈에서 filter 파라미터를 전달받는다.

- **services/bookingService.js**
  

```javascript
const getTimeTables = async (date, movieId, areaId, theaterId) => {
  const filterType = {
    DATE: `WHERE watch_date = "${date}"`,
    MOVIE_ID: `AND movie_id IN (${movieId})`,
    AREA_ID: `AND area_id = "${areaId}"`,
    THEATER_ID: `AND theater_id IN (${theaterId})`,
  };

  let result = '';

  if (!date || !areaId) {
    return '';
  }

  if (date && movieId && areaId && theaterId) {
    result = filterType.DATE + filterType.MOVIE_ID + filterType.AREA_ID + filterType.THEATER_ID;
    return await bookingDao.getTimeSchedule(result);
  }

  if (date && areaId && theaterId) {
    result = filterType.DATE + filterType.AREA_ID + filterType.THEATER_ID;
    return await bookingDao.getTimeSchedule(result);
  }

  if (date && areaId && movieId) {
    result = filterType.DATE + filterType.AREA_ID + filterType.MOVIE_ID;
    return await bookingDao.getTimeSchedule(result);
  }
};
```

SQL문 WHERE의 위치로 전달되는 파라미터를 IF문을 통해 여러가지 경우의 수로 생성하여 리턴값을 담는다.

- **services/bookingService.js**
  
  ```javascript
  const getSchedule = async (date, movieId, areaId, theaterId) => {
    const movieFilter = await getMovieFilter(date);
    const areaFilter = await getAreaFilter(date, movieId);
  
    const movies = await bookingDao.getMovies(movieFilter);
    const areas = await bookingDao.getAreas(areaFilter);
    const therters = await getTheater(areaId);
    const timeTables = await getTimeTables(date, movieId, areaId, theaterId);
  
    return {
      movies: movies,
      areas: areas,
      theaters: therters,
      timeTables: timeTables,
    };
  };
  ```
  getTimeTables 함수를 통해 만들어진 리턴값을 timeTables변수에 전달한다.
  
### 3. 티켓발급
  </br>
<img width="500" alt="스크린샷 2022-10-22 오후 6 58 12" src="https://user-images.githubusercontent.com/70873668/197333247-ef455ae0-1225-44d0-8ad8-d830c192ecda.png">
  
  - 처음에 만든 테이블은 tickets 테이블이 없이 bookings 테이블 까지만 만들었다. booking 테이블 자체에서 예약정보를 다 만들어 전달해 줄 계획이었다.</br>
  그런데 예약정보를 전달하려보니 좌석타입별(성인,유아)금액 구분도 불가능했고, seats테이블의 좌석별 id와 join하여 하나의 예약정보에 담는 방법이 어려웠다.</br>
  그래서 tickets 라는 테이블을 추가하였고, 예약시 booking_id가 먼저 생성된 뒤 tickets를 좌석별로 발급받아 booking_id와 테이블을 연결하는 방식으로 코드를 작성하였다.</br>
이렇게 하니 하나의 booking_id를 통해 예약한 tickets의 정보를 모두 가져올 수 있어 예약정보를 전달하기가 좋았다.
    

#### 아쉬운점

- 백엔드에서 유효성검사에 대한 처리가 미흡
  
  - 프론트에서 기본적인 유효성 검사가 진행되지만 백엔드에서도 중복으로 예외처리가 진행되어야 한다. 요청되는 정보 및 타입에 대해 유효성 검사 코드를 작성하자.
- 여러 사람이 동시에 좌석예매를 진행할 경우 서버에서 처리하는 방법에 대한 고민
  
  - 트랜젝션에 대한 개념과 그 사용방법을 공부하려고 한다.
- 부킹아이디 까지 생성 후 티켓 생성에서 에러가 날 경우 처리방법 대한 고민
  
  - 롤백에 대한 개념과 그 사용방법을 공부하려고 한다.

## 🔷 Reference

- 이 프로젝트는 [메가박스](https://www.megabox.co.kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
