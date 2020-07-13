## Speed Dial // React-Native 버전 page입니다.

React로 재사용이 가능한 UI 컴포넌트를 만들고자 한다.

재사용이 가능하게, 나만 사용하는 것이  아닌 남들에게 배포한다는 생각으로 만들어 본다.



| props name         | default 내용 및 타입 // 사용 예시                            | 기능(설명)                                                   | type    |
| :----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------- |
| switchIcon         | <SwitchIcon/>                                                | 아이콘 모음을 on/off 하는 메인버튼 내용. RN의 <Image/>컴포넌트를 사용하여 그려지며 SwitchIcon.tsx에 이미지를 임포트하여 사용해야 한다. | img     |
| iconList           | [{ url: "/url1", icon: <Icon1/> }, { url: "/url2", icon: <Icon1/>}] | 아이콘 모음의 아이콘 내용들.                                 | array   |
| iconList.url       | url:"/url1"                                                  | array안의 인자가 클릭됬을시 사용할 값. 아이콘을 클릭하여 이동할 주소로 사용하면 된다. | string  |
| iconList.icon      | icon:"icon" // icon:<Icon1 /> 컴포넌트                       | array안의 인자로 그려질 내용. 실제 아이콘 내용(모양) / RN의 <Image/>컴포넌트를 사용하여 그려지며 SwitchIcon.tsx에 이미지를 임포트하여 사용해야 한다. | img     |
| userFunc           | (e) => console.log(e)  // userFunc= (e) => history.push(e)   | array안의 인자가 클릭될시 실행될 함수 / default처럼 파라미터가 있을시 array의 인자 순서에 맞는 url값을 반환 / 파라미터가 없을시 일괄적은 값을 반환. | Func(n) |
| iconGroupDirection | "left"                                                       | 아이콘 모음이 실행될 방향. "left", "right", "up", "down"     | string  |
| iconWidth          | 50 // 0 ~                                                    | iconList.icon을 둘러싼 cover의 width값 / 해당 값 외 icon에서의 값을 custom하여 사용. | number  |
| iconHeight         | 50 // 0 ~                                                    | iconList.icon을 둘러싼 cover의 height값 /해당 값 외 icon에서의 값을 custom하여 사용. | number  |
| iconSpaceBetween   | 20 // 0 ~                                                    | iconList.icon을 둘러싼 cover간의 margin값 / 값이 클수록 간격이 벌어진다. | number  |
| switchButtonStyle  | null                                                         | switchButton에 직접적으로 css를 입힐 때 사용한다. / 예시: switchButtonStyle={"background-color:blue;"} / styled-component에 css로 적용되므로 css style로 작성하면된다. | string  |
| iconGroupStyle     | null                                                         | iconGroup에 직접적으로 css를 입힐 때 사용한다. / 예시: iconGroupStyle={"background-color:blue;"} / styled-component에 css로 적용되므로 css style로 작성하면된다. | string  |
| iconCoverStyle     | null                                                         | iconCover에 직접적으로 css를 입힐 때 사용한다. / 예시: iconCoverStyle={"background-color:blue;"} / styled-component에 css로 적용되므로 css style로 작성하면된다. | string  |
