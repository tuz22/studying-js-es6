/* Web Components */
  // : JS 문법으로 구현할 수 있는 브라우저 기본 기능
  // - 긴 HTML도 함수처럼 재사용 가능

  // Web Components 기능을 쉽게 사용하게 도와주는 라이브러리
  // - Lit
  // - Stencil

  // React, Vue 차이점
  // - 둘다 HTML을 하나로 묶어서 component로 만들어서 재사용이 가능한데
  // - React는 웹앱을 만드는 라이브러리라서 용도가 약간 다름
  // - React는 state가 변할 경우 자동으로 HTML 재랜더링(virtual DOM을 이용해서 재렌더링을 빠르고 효율적으로 도와줌
  // - React보단 Vue가 문법이 더 깔끔함

   /* <커스텀태그>로 길고 복잡한 HTML 축약하는 방법 */
  // <label><input> -> <custom-input>

  // class 클래스 extends HTMLElement {
  //   connectedCallback(){
  //     this.innerHTML = `<label>커스텀인풋이에요</label><input>` // this = 새로 생성될 <custom-input> 요소
      
  //     /* HTML 생성 속도가 더 빠른 방법 */
  //     // let 변수 = document.createElement('label');
  //     // this.appendChild(변수)
  //   } 
  // }

  // customElements.define('custom-input', 클래스);

  /* <커스텀태그> 안에서 파라미터 문법같은 것을 구현 가능 */
  // class 클래스 extends HTMLElement {
  //   connectedCallback(){
  //     let name = this.getAttribute('name');
  //     this.innerHTML = `<label>${name}커스텀인풋이에요</label><input>`
  //   } 
  // }

  // customElements.define('custom-input', 클래스);

  /* attribute 변경감지 기능 제공 */
  // ex) 태그의 name="id"에서 name="pw" 변경시 자동 변경
  // *React, Vue특징: props (attribute) 변경되면 html 자동 재랜더링됨

  class 클래스 extends HTMLElement {
    connectedCallback(){
      let name = this.getAttribute('name');
      this.innerHTML = `<label>${name}커스텀인풋이에요</label><input>`
    }
    static get observedAttributes(){ // name이란 attribute가 바뀌는지 감시
      return ['name']
    }
    attributeChangedCallback(){ // 바뀌면 이걸 실행
      console.log(this.getAttribute('name'));
    }
  }

  customElements.define('custom-input', 클래스);

