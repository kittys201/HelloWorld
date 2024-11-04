


// ./js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const changeBtn = document.getElementById('changeBtn');
    const background = document.getElementById('background');
    
    const messages = [
      "Hello World!", // Inglés
  "¡Hola Mundo!", // Español
  "Bonjour le monde!", // Francés
  "Ciao Mondo!", // Italiano
  "Hallo Welt!", // Alemán
  "Olá, Mundo!", // Portugués
  "こんにちは、世界！", // Japonés (Konnichiwa, sekai!)
  "你好，世界！", // Chino Mandarín (Nǐ hǎo, shìjiè!)
  "안녕하세요, 세상!", // Coreano (Annyeonghaseyo, sesang!)
  "Привет, мир!", // Ruso (Privet, mir!)
  "Γεια σου, κόσμε!", // Griego (Ya sou, kosme!)
  "Merhaba Dünya!", // Turco
  "नमस्ते दुनिया!", // Hindi (Namaste duniya!)
  "Saluton, mondo!", // Esperanto
  "Salve, munde!", // Latín
  "Konnichiwa, sekai desu!", // Japonés (formal)
  "你好，世界！我是...", // Chino Mandarín (formal, seguido de tu nombre)
  "안녕하세요, 저는 ...입니다.", // Coreano (formal, seguido de tu nombre)
  "สวัสดีโลก",// Tailandés (Sawasdee lok)
  "Marhaba 'al-'ālam!", // Árabe (formal)
  "Xin chào thế giới!" // Vietnamita
    ];
    
    const colors = [
        "from-pink-500 to-orange-500",
        "from-green-400 to-blue-500",
        "from-purple-500 to-indigo-500",
        "from-red-400 to-yellow-500",
        "from-blue-500 to-purple-600"
    ];

    let currentIndex = 0;
    let clickCount = 0;

    changeBtn.addEventListener('click', () => {
        clickCount++;
        currentIndex = (currentIndex + 1) % messages.length;

        // Cambiar color de fondo
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        background.className = `bg-gradient-to-r ${newColor} min-h-screen flex items-center justify-center transition-all duration-500`;

        // Mover saludo aleatoriamente cada tres clics
        if (clickCount % 3 === 0) {
            const randomX = Math.floor(Math.random() * 100) - 50; // Offset aleatorio en X
            const randomY = Math.floor(Math.random() * 100) - 50; // Offset aleatorio en Y
            greeting.style.transform = `translate(${randomX}px, ${randomY}px)`;
        } else {
            greeting.style.transform = 'translate(0, 0)';
        }

        // Mover el botón aleatoriamente en cada clic
        const btnRandomX = Math.floor(Math.random() * 200) - 100; // Offset aleatorio en X para el botón
        const btnRandomY = Math.floor(Math.random() * 200) - 100; // Offset aleatorio en Y para el botón
        changeBtn.style.transform = `translate(${btnRandomX}px, ${btnRandomY}px)`;

        // Cambiar mensaje con animación de opacidad
        greeting.style.opacity = '0';
        setTimeout(() => {
            greeting.textContent = messages[currentIndex];
            greeting.style.opacity = '1';
        }, 300);
    });
});