import './style.css';
import { convertPrompt } from './utils/promptConverter.js';
import { validatePrompt } from './utils/validator.js';

// DOM Elements
const inputPrompt = document.getElementById('input-prompt');
const outputPrompt = document.getElementById('output-prompt');
const convertBtn = document.getElementById('convert-btn');

// Auto-resize textarea
function autoResize(element) {
  element.style.height = 'auto';
  element.style.height = element.scrollHeight + 'px';
}

// Event Handlers
function handleConversion() {
  const input = inputPrompt.value;
  
  if (!validatePrompt(input)) {
    outputPrompt.textContent = 'Error: Invalid bracket matching';
    outputPrompt.style.color = '#ff6b6b';
    return;
  }
  
  outputPrompt.style.color = '';
  const converted = convertPrompt(input);
  outputPrompt.textContent = converted;
}

// Event Listeners
convertBtn.addEventListener('click', handleConversion);

inputPrompt.addEventListener('input', () => {
  autoResize(inputPrompt);
});

inputPrompt.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.ctrlKey) {
    handleConversion();
  }
});

// Initial resize
autoResize(inputPrompt);