---
title: "Charts"
description: "Comprende cómo funciona Google Charts para crear gráficos interactivos, organizar datos y elegir visualizaciones, con un ejemplo práctico de columnas."
date: 2026-09-24
updatedDate: 2026-09-24
tags: ["api","javascript","grafico","datos","estadisticas"]
slug: google/charts
type: category
topic: google
id: 3e5a9dfb-adca-802b-8c42-d9541cf1dd03
author: victor_cuervo
---

## ¿Qué es Google Charts?


**Google Charts** es una biblioteca de visualización que permite representar datos mediante gráficos interactivos en páginas web. Se carga desde los servidores de [Google](https://lineadecodigo.com/google/) y proporciona clases para organizar los datos, configurar la apariencia y dibujar cada visualización en un elemento de la página.


Aunque a menudo se habla de las **APIs Google Chart**, el nombre actual del producto es **Google Charts**. No debe confundirse con Google Image Charts, un servicio antiguo que generaba imágenes mediante una URL y que está obsoleto. Google Charts utiliza JavaScript y representa la mayoría de los gráficos mediante [SVG](https://lineadecodigo.com/svg/) o [HTML](https://lineadecodigo.com/html/), según el tipo de visualización y el navegador.


El proceso de uso tiene tres partes:

1. Cargar `loader.js` y el paquete que contiene el gráfico necesario.
2. Preparar los datos en un objeto `DataTable` o convertir una matriz con `arrayToDataTable()`.
3. Crear el gráfico, asociarlo a un contenedor y ejecutar su método `draw()` con los datos y las opciones.

Un `DataTable` es una tabla en memoria con columnas tipadas y filas. Cada columna define un tipo, como texto, número, fecha o valor booleano. Esta estructura permite que el gráfico interprete correctamente categorías, series, fechas y valores.


## Características de Google Charts

- **Variedad de visualizaciones.** Incluye gráficos de líneas, áreas, barras, columnas, sectores, dispersión, burbujas, histogramas, mapas geográficos, tablas, cronologías y diagramas jerárquicos, entre otros.
- **Datos estructurados.** `DataTable` permite definir tipos, etiquetas, roles y valores. Para ejemplos pequeños, `arrayToDataTable()` reduce el código necesario al convertir una matriz en una tabla.
- **Configuración mediante opciones.** Títulos, colores, ejes, leyendas, series, anotaciones y otros detalles se declaran en un objeto de opciones. Las propiedades disponibles dependen del tipo de gráfico.
- **Interactividad integrada.** Muchos gráficos incorporan leyendas, información al pasar el puntero y selección de elementos. También exponen eventos para reaccionar a acciones del usuario.
- **Paquetes independientes.** La biblioteca se carga por paquetes, como `corechart`, `table`, `geochart` o `timeline`. Solo es necesario solicitar los paquetes utilizados por la página.
- **Fuentes de datos diversas.** Los valores pueden proceder de una matriz, una respuesta del servidor, una hoja de cálculo compatible o una fuente que implemente el protocolo de consultas de Google Visualization.
- **Renderizado en el navegador.** El gráfico se genera en el cliente. Esto facilita la interacción, pero obliga a controlar el tamaño del contenedor y a redibujar la visualización cuando cambia el espacio disponible.
- **Sin clave para los gráficos básicos.** La carga y el uso habitual de la biblioteca no requieren una clave de API. Algunos servicios relacionados, fuentes externas o tipos de mapas pueden tener requisitos propios.

## ¿Por qué aprender Google Charts?


Google Charts permite transformar tablas de datos en visualizaciones comprensibles sin desarrollar desde cero ejes, escalas, leyendas, selección de elementos y mensajes emergentes. Resulta útil en paneles internos, informes web, seguimiento de métricas, comparativas y páginas que presentan estadísticas.


Aprender la biblioteca ayuda a tomar decisiones que afectan a la interpretación de los datos:

- Utilizar líneas para mostrar una evolución temporal.
- Emplear barras o columnas para comparar categorías.
- Reservar los sectores para composiciones sencillas con pocas categorías.
- Usar dispersión para estudiar la relación entre dos variables numéricas.
- Evitar escalas, colores o agrupaciones que puedan distorsionar la lectura.

También permite separar los datos de su representación. El mismo `DataTable` puede alimentar distintos gráficos, mientras que el objeto de opciones controla la apariencia. Esta separación facilita actualizar valores sin reescribir toda la lógica de visualización.


Para una integración mantenible conviene validar los tipos de las columnas, tratar valores ausentes, limitar el número de categorías y adaptar el gráfico al tamaño de la pantalla. Google Charts dibuja la visualización, pero la aplicación sigue siendo responsable de presentar datos correctos y de ofrecer una alternativa accesible cuando sea necesaria.


## Ejemplo de Google Charts


El siguiente ejemplo crea un gráfico de columnas con las visitas mensuales de una página. La página debe cargar previamente `https://www.gstatic.com/charts/loader.js` y contener un elemento con el identificador `grafico-visitas` y una altura definida.


```javascript
google.charts.load("current", {
  packages: ["corechart"]
});

google.charts.setOnLoadCallback(dibujarGrafico);

function dibujarGrafico() {
  const datos = google.visualization.arrayToDataTable([
    ["Mes", "Visitas"],
    ["Enero", 1250],
    ["Febrero", 1480],
    ["Marzo", 1710],
    ["Abril", 1630]
  ]);

  const opciones = {
    title: "Visitas mensuales",
    legend: { position: "none" },
    hAxis: { title: "Mes" },
    vAxis: {
      title: "Visitas",
      minValue: 0
    },
    colors: ["#3367d6"]
  };

  const grafico = new google.visualization.ColumnChart(
    document.getElementById("grafico-visitas")
  );

  grafico.draw(datos, opciones);
}
```


La función `google.charts.load()` solicita el paquete `corechart`, que contiene `ColumnChart`. La llamada a `setOnLoadCallback()` retrasa el dibujo hasta que la biblioteca está disponible.


La primera fila de la matriz define las columnas: una categoría de texto y una serie numérica. Las filas restantes contienen los meses y sus visitas. `arrayToDataTable()` convierte la matriz en un `DataTable` con los tipos adecuados.


El objeto `opciones` configura el título, los ejes, la leyenda y el color. Finalmente, `ColumnChart` utiliza el elemento `grafico-visitas` como contenedor y `draw()` genera la visualización. Si los datos cambian, se puede actualizar la tabla y volver a ejecutar `draw()` sin crear una estructura distinta.

