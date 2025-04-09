function chatbot(input) {
  let output = "";
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    output = "Hello! How are you feeling today?";
  } else if (input.includes("how are you")) {
    output = "I'm here to help you, thank you for asking! How are you feeling?";
  } else if (input.includes("what is your name")) {
    output = "My name is Tami, and I'm here to support you.";
  } else if (input.includes("what can you do")) {
    output = "I can chat with you about how you're feeling, give you coping tips, and help motivate you.";
  } else if (input.includes("tell me a joke")) {
    output = "Why did the scarecrow win an award? Because he was outstanding in his field!";
  } else if (input.includes("i'm sad") || input.includes("feeling down")) {
    output = "I'm sorry you're feeling this way. Try taking a short walk or listening to your favorite music. Remember, you're not alone.";
  } else if (input.includes("i'm stressed") || input.includes("overwhelmed")) {
    output = "Stress can be tough. Try deep breathing exercises or taking a break. You’ve got this!";
  } else if (input.includes("motivate me") || input.includes("feeling unmotivated")) {
    output = "Believe in yourself! Every small step you take gets you closer to your goals. Keep pushing forward!";
  } else if (input.includes("thank you")) {
    output = "You're welcome! I'm here whenever you need to chat.";
  } else {
    output = "I'm here to listen. Can you tell me more about how you're feeling?";
  }

  return output;
}


  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

 
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }


  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }


  document.getElementById("button").addEventListener("click", sendMessage);


  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });