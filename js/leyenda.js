function generarLeyenda() {
    const leyendaItems = [
      { color: "#FF00FF", text: "Extra Alta", valor: "93-100%" },
      { color: "#FF66FF", text: "Super Alta ", valor: "86-93%" },
      { color: "#FF0000", text: "Ultra alta ", valor: "79-86%" },
      { color: "#FF4500", text: "Muy Alta ", valor: "72-79%" },
      { color: "#FF6600", text: "Alta ", valor: "65-72%" },
      { color: "#FFA500", text: "Moderadamente alta ", valor: "58-65%" },
      { color: "#FFFF00", text: "Media ", valor: "51-58%" },
      { color: "#BFFF00", text: "Moderadamente baja ", valor: "44-51%" },
      { color: "#00FF00", text: "Baja ", valor: "37-44%" },
      { color: "#00FF80", text: "Muy Baja ", valor: "30-37%" },
      { color: "#00FFFF", text: "Ultra Baja", valor: "23-30%" },
      { color: "#66FFFF", text: "Super Baja", valor: "16-23%" },
      { color: "#00BFFF", text: "Extremadamente Baja ", valor: "9-16%" },
      { color: "#0000FF", text: "Mínima considerable ", valor: "2-9%" },
      { color: "#404040", text: "Mínima", valor: "0-2%" }
    ];
  
    const legendContainer = document.getElementById("legend-items");
    legendContainer.innerHTML = ''; // Limpia cualquier contenido previo
  
    // Crear el contenedor de los rectángulos con colores
    leyendaItems.forEach(item => {
      // Crear un div para cada rectángulo
      const colorBox = document.createElement("div");
      colorBox.style.width = "100%";
      colorBox.style.height = "25px"; // Altura de cada barra
      colorBox.style.backgroundColor = item.color;
      colorBox.style.position = "relative";
      colorBox.style.marginBottom = "5px"; // Espacio entre los rectángulos
      colorBox.style.maxWidth = "250%"; // Asegura que se estire de forma proporcional
  
      // Agregar el texto dentro del rectángulo (texto general)
      const label = document.createElement("span");
      label.innerText = item.text;
      label.style.position = "absolute";
      label.style.top = "50%"; // Mantiene el texto general centrado verticalmente
      label.style.left = "5px"; // Alinea el texto al inicio del rectángulo
      label.style.transform = "translateY(-50%)"; // Centrado vertical sin mover horizontalmente
      label.style.color = "#000";
      label.style.fontSize = "12px";
  
      // Agregar el valor (porcentaje) al centro del rectángulo
      const valueLabel = document.createElement("span");
      valueLabel.innerText = item.valor; // Asume que "valor" es el porcentaje (100%, 96%, etc.)
      valueLabel.style.position = "absolute";
      valueLabel.style.top = "50%"; // Centrado vertical
      valueLabel.style.left = "70%"; // Centrado horizontal
      valueLabel.style.transform = "translate(-50%, -50%)"; // Centrado completo
      valueLabel.style.color = "#000";
      valueLabel.style.fontSize = "12px";
  
      // Agregar ambos elementos al contenedor del rectángulo
      colorBox.appendChild(label);
      colorBox.appendChild(valueLabel);
  
      // Agregar el rectángulo a la leyenda
      legendContainer.appendChild(colorBox);
    });
  }
  
  window.onload = function () {
    generarLeyenda();
  };
  