/* shadow dom */
// Web Components + shadow DOM = 완벽한 HTML 모듈
// *Web Component 생성을 도와주는 라이브러리: Lit, Stencil

// attachShadow를 사용하면 해당 셀렉터가 있는 태그 내부에 비밀공간(shadowRoot)을 하나 만들어줌
document.querySelector('#morder').attachShadow({mode : 'open'})
document.querySelector('#morder').shadowRoot.innerHTML = '<p>숨겨진 문장이라네</p>'

/* web components와 함께 사용 */
// class 클래스 extends HTMLElement {
//   connectedCallback(){
//     this.attachShadow({ mode : 'open' });
//     this.shadowRoot.innerHTML = `<label>커스텀인풋이에요</label><input>
//       <style>label { color : red }</style>` // -> 지저분함
//   }
// }

// customElements.define('custom-input', 클래스);

/* template 사용 */
// class 클래스 extends HTMLElement {
//   connectedCallback(){
//     this.attachShadow({ mode : 'open' });
//     this.shadowRoot.append(template1.content.cloneNode(true));
//   }
// }

// customElements.define('custom-input', 클래스);

/* shadpw DOM에 이벤트리스너도 부착 가능 */
class 클래스 extends HTMLElement {
  connectedCallback(){
    this.attachShadow({ mode : 'open' });
    this.shadowRoot.append(template1.content.cloneNode(true));

    let labelClick = this.shadowRoot.querySelector('label');
    labelClick.addEventListener('click',function(){
      console.log('클릭');
    })
  }
}

customElements.define('custom-input', 클래스);