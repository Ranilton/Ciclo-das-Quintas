window.onload = function () {

  // Primeiro, selecionar onde você quer colocar tudo
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);

  // Criar a roda
  const wheel = document.createElement('div');
  wheel.className = 'wheel';
  wheel.id = 'wheel';
  container.appendChild(wheel);

  // Criar o tom central
  const currentTone = document.createElement('div');
  currentTone.id = 'currentTone';
  wheel.appendChild(currentTone);

  // Criar os 7 acordes (chord0, chord1, ..., chord6)
  for (let i = 0; i < 7; i++) {
    const chord = document.createElement('div');
    chord.className = 'chord';
    chord.id = `chord${i}`;
    wheel.appendChild(chord);
  }

  // Criar a área dos botões
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'buttons';
  container.appendChild(buttonsDiv);

  // Botão Anterior
  const prevButton = document.createElement('button');
  prevButton.className = 'button';
  prevButton.innerText = '◀ Anterior';
  prevButton.onclick = prevTone;
  buttonsDiv.appendChild(prevButton);

  // Botão Próximo
  const nextButton = document.createElement('button');
  nextButton.className = 'button';
  nextButton.innerText = 'Próximo ▶';
  nextButton.onclick = nextTone;
  buttonsDiv.appendChild(nextButton);

   // Chama a função para posicionar os acordes imediatamente após a criação da estrutura
   updateChords();
};