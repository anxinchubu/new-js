// button.js
document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector(".custom-button");
  button.addEventListener("click", function() {
      // 这里添加按钮点击后的功能代码
      alert("按钮被点击了！");
  });
});



// button-component.js

// export class ButtonComponent {
//     constructor({ text, onClick }) {
//       this.text = text;
//       this.onClick = onClick;
//     }
  
//     mount(selector) {
//       const container = document.querySelector(selector);
//       if (!container) return;
  
//       const button = document.createElement('button');
//       button.textContent = this.text;
//       button.classList.add('custom-button');
  
//       button.addEventListener('click', this.onClick);
  
//       container.appendChild(button);
//     }
//   }
  