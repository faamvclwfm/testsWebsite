const questions = document.querySelectorAll('.question');
    const nav = document.getElementById('taskNav');
    const buttons = [];
    let currentQuestion = 0;

    questions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.textContent = i + 1;
      btn.onclick = () => showQuestion(i);
      if (i === 0) btn.classList.add('active');
      nav.appendChild(btn);
      buttons.push(btn);
    });

    function showQuestion(index) {
      questions.forEach(q => q.classList.remove('active'));
      questions[index].classList.add('active');

      buttons.forEach(btn => btn.classList.remove('active'));
      buttons[index].classList.add('active');
      currentQuestion = index;
    }

    function checkAnswers() {
      let score = 0;

      questions.forEach((q, i) => {
        const selected = q.querySelector('input[type="radio"]:checked');
        const isCorrect = selected && selected.value === "1";

        buttons[i].classList.remove('correct', 'incorrect');

        if (isCorrect) {
          score++;
          buttons[i].classList.add('correct');
        } else {
          buttons[i].classList.add('incorrect');
        }
      });

      document.getElementById('result').textContent = `Ваш результат: ${score} з ${questions.length}`;
    }

    function nextQuestion() {
      // Hide current question
      questions[currentQuestion].classList.remove('active');
      buttons[currentQuestion].classList.remove('active');

      // Move to next question
      currentQuestion = (currentQuestion + 1) % questions.length;

      // Show the next question
      questions[currentQuestion].classList.add('active');
      buttons[currentQuestion].classList.add('active');
    }