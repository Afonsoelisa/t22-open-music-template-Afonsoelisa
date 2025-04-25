
  const priceInput = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");

  function updatePriceUI() {
    const max = parseInt(priceInput.max);
    const min = parseInt(priceInput.min);
    const value = parseInt(priceInput.value);

    const percentage = ((value - min) / (max - min)) * 100;

    // Atualiza o número
    priceValue.textContent = value;

    // Atualiza o fundo da barra com gradiente
    priceInput.style.background = `linear-gradient(to right, #820ad1 ${percentage}%, #e1e1e1 ${percentage}%)`;
  }

  updatePriceUI();

  priceInput.addEventListener("input", updatePriceUI);

