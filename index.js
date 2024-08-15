// const inputText = document.getElementById('userInput')
// const buttonInput = document.getElementById('button')
// const outputText = document.getElementById('text-output')
// const inputQuestion = document.getElementById('input-question')


async function getResponse() {
  const value = document.getElementById('userInput').value;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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` // Substitua pela sua chave de API
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // Use o modelo gpt-3.5-turbo
        messages: [

          { role: 'system', content: 'Você é um assistente que ajuda a corrigir textos em português do Brasil.' },
          { role: 'user', content: `Por favor, corrija o seguinte texto: ${value}` }
        ],
        max_tokens: 100


      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro:', errorData);
      document.getElementById('response').innerText = 'Erro: ' + errorData.error.message;
      return;
    }

    const data = await response.json();
    document.getElementById('response').innerText = data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Erro de rede:', error);
    document.getElementById('response').innerText = 'Erro de rede: ' + error.message;
  }
}






