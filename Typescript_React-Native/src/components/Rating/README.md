 ## Rating // React-Native 버전 page입니다.

React로 재사용이 가능한 UI 컴포넌트를 만들고자 한다.

재사용이 가능하게, 나만 사용하는 것이  아닌 남들에게 배포한다는 생각으로 만들어 본다.  



| props name       | default 내용 및 타입 // 사용 예시                            | 기능(설명)                                                   | type    |
| :--------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| piece            | <Piece/>                                                     | 그려지는 조각 낱개 하나를 말한다. RN의 <Image/>컴포넌트를 사용하여 그려지며 piece.tsx 및 pick.tsx에 원하는 이미지를 임포트하여 사용해야 한다. | img     |
| pick             | <Pick/>                                                      | 클릭(실행)되는 조각 낱개 하나를 말한다. piece위에서 실행되어 그 위를 덮을 pick된 piece라고 생각하면 된다. | img     |
| pieceCount       | 4 // 1 ~                                                     | piece의 갯수를 말한다. 칸 갯수라고 생각하면 된다.            | number  |
| defaultPickCount | 1 // 1 ~ 최대 piece수                                        | 최초 랜더링시 pick되있는 piece의 갯수                        | number  |
| pieceIsHalf      | false                                                        | piece에 그릴 item을 half화 할 것인가를 말한다. 유저가 사용하고싶은 이미지(또는 그외)를 넣어 반만 클릭되도록 사용하고싶을 때 사용한다. | boolean |
| direction        | "right"                                                      | 실행될 방향. "left", "right", "up", "down"                   | string  |
| pieceHeight      | 100 //  0 ~                                                  | piece의 height값 // RN의 <View/>컴포넌트에 사용된다.         | number  |
| pieceWidth       | 50 // 0 ~                                                    | piece의 width값 // RN의 <View/>컴포넌트에 사용된다.          | number  |
| pieceStyle       | null                                                         | piece에 직접적으로 css를 입힐 때 사용한다. / 예시: pieceStyle={"border: 1px solid black; background-color:skyblue;"} / styled-component에 css로 적용되므로 css style로 작성하면된다. | string  |
| pickStyle        | null                                                         | pick에 직접적으로 css를 입힐 때 사용한다. / 예시: pickStyle={"border: 1px solid black; background-color:blue;"} / styled-component에 css로 적용되므로 css style로 작성하면된다. | string  |
| userFunc         | (click, index) => console.log("click:", click, "index:", index) // userFunc={(e) => history.push(e)} | piece가 클릭될시 실행될 함수 / default로 파라미터는 2개가 제공되며 click파라미터는 해당 piece가 클릭될때마다 변하는 값, index파라미터는 pick된 piece의 값이다. / 보통 Rating된 값은 index값을 보내면 된다. | Func(n) |

