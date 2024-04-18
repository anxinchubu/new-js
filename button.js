// button.js

export default function initializeChatbot() {
    Chatbot.init({
        chatflowid: "04b252bf-0e77-416a-8340-eed035f7a8f9",
        apiHost: "http://172.17.14.53:8088",
        theme: {
            button: {
                backgroundColor: "green"
            }
        }
    });
}


// button.js
//document.addEventListener("DOMContentLoaded", function() {
 // var button = document.querySelector(".custom-button");
//  button.addEventListener("click", function() {
      // 这里添加按钮点击后的功能代码
 //     alert("按钮被点击了！");
 // });
//});



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
  
