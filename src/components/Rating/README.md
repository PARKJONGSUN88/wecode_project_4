 ## Rating

  React로 재사용이 가능한 UI 컴포넌트를 만들고자 한다.

  재사용이 가능하게, 나만 사용하는 것이  아닌 남들에게 배포한다는 생각으로 만들어 본다.

  

| props name   | default 내용 및 타입 // 사용 예시                            | 기능(설명)                                                   | type    |
| :----------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| piece        | "piece"                                                      | 그려지는 조각 낱개 하나를 말한다. string뿐아니라 원하는 image를 선언해놓으면 예시와같은 형태로 사용가능하다. | any     |
| pick         | "pick"                                                       | 클릭(실행)되는 조각 낱개 하나를 말한다. piece위에서 실행되어 그 위를 덮을 pick된 piece라고 생각하면 된다. | any     |
| pieceCount   | 4 // 1 ~                                                     | piece의 갯수를 말한다. 칸 갯수라고 생각하면 된다.            | number  |
| pieceIsHalf  | false                                                        | piece에 그릴 item을 half화 할 것인가를 말한다. 유저가 사용하고싶은 이미지(또는 그외)를 넣어 반만 클릭되도록 사용하고싶을 때 사용한다. | boolean |
| direction    | "right"                                                      | 실행될 방향. "left", "right", "up", "down"                   | string  |
| pieceHeight  | 100 // (px) // 0 ~                                           | piece의 height값                                             | number  |
| pieceWidth   | 50 // (px) // 0 ~                                            | piece의 width값                                              | number  |
| pieceStyle   | null                                                         | piece에 직접적으로 css를 입힐 때 사용한다. / 예시: pieceStyle={"border: 1px solid black; background-color:skyblue;"} | string  |
| pickStyle    | null                                                         | pick에 직접적으로 css를 입힐 때 사용한다. / 예시: pickStyle={"border: 1px solid black; background-color:blue;"} | string  |
| clickHandler | (click, index) => console.log("click:", click, "index:", index) // clickHandler={} | piece가 클릭될시 실행될 함수 / default로 파라미터는 2개가 제공되며 click파라미터는 해당 piece가 클릭될때마다 변하는 값, index파라미터는 pick된 piece의 값이다. / 보통 Rating된 값은 index값을 보내면 된다. | Func(n) |



### 예시

#### 1. default 상태
<img width="1280" alt="gif1" src="https://user-images.githubusercontent.com/50945715/86902352-cda26700-c148-11ea-821d-0bd1b22708e5.gif">

#### 2. pieceStyle 및 pickStyle 스타일 적용
<img width="1280" alt="gif2" src="https://user-images.githubusercontent.com/50945715/86902354-ce3afd80-c148-11ea-9269-791b578aed26.gif">

#### 3. piece 및 pick에 string 외 이미지(컴포넌트로)로 적용 
<img width="1280" alt="gif2" src="https://user-images.githubusercontent.com/50945715/86902357-ced39400-c148-11ea-8f38-e7da23729e20.gif">

#### 4. pieceIsHalf가 true가 되어 반이 사용되게 적용됨
<img width="1280" alt="gif2" src="https://user-images.githubusercontent.com/50945715/86902362-cf6c2a80-c148-11ea-8b24-b78c25828e0a.gif">

#### 5. pieceIsHalf 및 pieceStyle, pickStyle가 같이 적용된 상태.
<img width="1280" alt="gif2" src="https://user-images.githubusercontent.com/50945715/86902359-ced39400-c148-11ea-9af9-b4778a40e166.gif">

#### 6. height, width 값 조정으로 size up된 상태
<img width="1280" alt="gif2" src="https://user-images.githubusercontent.com/50945715/86902364-cf6c2a80-c148-11ea-8702-5770370cac69.gif">

#### 7. right방향, up방향으로 사용
<img width="1280" alt="gif2" src="https://user-images.githubusercontent.com/50945715/86902367-d004c100-c148-11ea-8bb6-6309fc2f43c8.gif">



### story..

- react를 처음배울 때 한번 비슷한 컴포넌트를 스스로 만들어 본적이 있었다. 그때는 그냥 혼자 쓴다는 생각으로 컴포넌트 만드는 재미에 만들었던 것이었는데 이번에는 내가 아닌 배포한다는 생각으로 만들어 보니 새로운 느낌이었다. 이제 speed dial과 마찬가지로 ts및 RN버전까지 만들어야겠다.

  예전 프로젝트 : [https://velog.io/@jongsunpark88/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EB%A7%88%EC%B9%98%EB%A9%B0](https://velog.io/@jongsunpark88/1차-프로젝트를-마치며)

  예전 프로젝트에서 적용한 컴포넌트 동영상 : https://youtu.be/5CYRQCjvgGw



-  이번에는 사용자가 직접 스타일을 많이 할 수 있고 나는 props는 줄이는 방향으로 만들었다.

-  동작 메커니즘만 제공하고 그 안에는 이미지, 텍스트, 숫자 등 다 그려지도록 했다.

  (일반적으로는 Rating이라면 이미지만 사용되는 것 같다..)