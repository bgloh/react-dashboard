# 프로젝트 구조

아래의 그림은 직접 구현한 대쉬보드 관련 구조입니다.


![drawing](https://user-images.githubusercontent.com/71301248/167296288-4999548c-ca7a-4fc1-8d82-d4915a5cfa09.png)

http 컴포넌트 안에 Home, DashBoard, Option 컴포넌트가 존재하고, httpDucks를 통해 서로 유기적으로 통신합니다.


## HOME


![alt_text](https://user-images.githubusercontent.com/71301248/167296304-235940e5-7325-48f1-a3f9-84c4c71ee328.png)


Home 최초 접속시 동작하는 페이지 입니다.


![drawing](https://user-images.githubusercontent.com/71301248/167296310-409f45b6-df2a-405a-9e31-c2e33a726c0e.png)

home의 경우 Chart, Tabel, Rank이렇게 3개의 컴포넌트로 구성되어 있습니다.

Chart의 경우 home페이지 접속시 http엔드포인트를 통해 DB에서 전체 정보를 가져옵니다. 그리고 해당 정보를 보여줍니다. 이때 Dropdown을 통해 가져온 DB를 접속 횟수와, 접속 시간을 선택해서 볼 수 있으며, 날짜를 년,월,일 단위로 찾아 볼수 있습니다. 그리고 범위 지정을 통해서 특정 날짜의 정보만을 찾아 볼 수 있습니다.

Table의 경우 받아온 DB전체를 테이블의 형태로 만들어 보여줍니다.

Rank의 경우 찾아온 DB에서 가장 자주 접속한 유저와 가장 오래 접속한 유저를 찾아서 이메일 주소를 보여줍니다.


## DashBoard


![alt_text](https://user-images.githubusercontent.com/71301248/167296345-1eee4b9b-8314-44aa-8cc2-cebd042ef46a.png)


DashBoard는 특정 유저의 정보를 상세히 확인하는 컴포넌트 입니다.


![drawing](https://user-images.githubusercontent.com/71301248/167296349-e37f99bd-c706-4c82-8ba6-e91bd2d3adde.png)

DashBoard 페이지 접속시 다시 전체 유저 DB를 받아옵니다.

PlayerList에서는 전체 유저를 나열해서 보여줍니다. 유저를 선택시 Chart와 ShowPlayer(Table)에 해당 유저정보를 다시 받아와 보여줍니다.

Chart는 Home과 동일하게 동작되며, 각각 보기 옵션을 선택 할 수 있고, 범위를 지정 할 수 있습니다.

ShowPlayer는 Home의 Table과 동일하게 동작되고, 특정 행을 선택시 해당 행의 정보를 SendPlayer로 보냅니다.

SendPlayer는 선택된 행의 정보를 String의 형태로 나타내어 보여줍니다. 해당 String을 수정 할 수 있고 전송버튼을 누르면 String을 DB로 보낼 수 있습니다.


## Option


![alt_text](https://user-images.githubusercontent.com/71301248/167296354-2a315835-68f8-48c3-a59c-ac2f4a79cd8d.png)


Option 페이지는 DashBoard 전체의 옵션을 설정 할 수 있습니다.

현재는 배경 색상을 변경할 수 있도록 구현하였습니다.
