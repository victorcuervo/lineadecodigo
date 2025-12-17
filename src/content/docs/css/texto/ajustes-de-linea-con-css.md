---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GICV2GR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU23y%2B1LmAcA8MKTcjzo08NoaRmgG4D9CAqW30LHWongIgKLQxt1WF%2Bc3tLZzXsBYtFhBRzOyab%2F2YqRM4GZ%2BWDmcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPLNxzw875ClRvggSrcA6I20rw1WrUcZF8ESl3w7MO7lQgJ9ihfyi4QpZmOSs4f5YaXdyQBs6cNalJnrzIzIS%2BU%2BDJWnkQo7a1XAMQxmbAKxtBZSmZHscDFv6oOwySrBRhgr1EpXDbs00Er6sz563i9Sprk7xalA6YrSUMDM0cYOGb13nGH%2B%2Be4JaXNI%2FFnxY%2F0gQPzFkgqoA97jTGbxdIVd%2Fi6UjTkjSUv1MxE6U4LzyKR2DMcpu9P%2FyJFR4KTCchN8wR0A0AAMTjDJAx1WMPPUFrc09%2Bxf733AlPC1yGmavJxSViEDr29g6FGbxAZsnOuwoiV9%2FQbILj5Cw%2F3aiorO2AjB%2FROGUxFvlHBogNIIqTmk9L%2B5hrMCZr2Sd4GmqTDzoBeCmOzhDNrmwBwvQVH7oD9G3o5sGEDePZ2MKi3JEmDl1xRWsfENpWdsbB2HLjYlnoajpM8dHZISRTWAEComhzHEAhC8cE0oSX0JHvnNPX8XE5vLjWVtZa12kyzJlxhuqVc5iPnL1LQmxtN1vP51LDUXPyvpqIRAmb8SpFmPztjj9MbJFtePqCSAAGvSvzbi1NniVXEZW4XT%2F0lkK5M25x1aXAtd9Um9ehlY7kyTqA7Fb4VUEVz%2FmO1mf2vPanxlPVBQwWz84TMMOKfi8oGOqUBQvPjCNMZ587I%2FpW04twzXXPXBZSS9cV%2FT7QvlprELGMOh9mryAZrI6yocldMetPNGnSK%2ByF7tpFoAoBNE130nxfomboLGSyZ9lVgf%2F8enqnPFvKz1eRhWuLnI38E4wggX9cOFzJEAwL7O5viecG3aEtsib3O5JRiKxowVRiqJBIeghDXMwEQxjFPm30S7MYaUuejJ4M%2B6NkCEsNF%2BjA8mq5fzzG7&X-Amz-Signature=bc7a718d1ec8be580eb842d9b9b31f0b60cf643cdf68344b20a74f7c9261b06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GICV2GR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU23y%2B1LmAcA8MKTcjzo08NoaRmgG4D9CAqW30LHWongIgKLQxt1WF%2Bc3tLZzXsBYtFhBRzOyab%2F2YqRM4GZ%2BWDmcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPLNxzw875ClRvggSrcA6I20rw1WrUcZF8ESl3w7MO7lQgJ9ihfyi4QpZmOSs4f5YaXdyQBs6cNalJnrzIzIS%2BU%2BDJWnkQo7a1XAMQxmbAKxtBZSmZHscDFv6oOwySrBRhgr1EpXDbs00Er6sz563i9Sprk7xalA6YrSUMDM0cYOGb13nGH%2B%2Be4JaXNI%2FFnxY%2F0gQPzFkgqoA97jTGbxdIVd%2Fi6UjTkjSUv1MxE6U4LzyKR2DMcpu9P%2FyJFR4KTCchN8wR0A0AAMTjDJAx1WMPPUFrc09%2Bxf733AlPC1yGmavJxSViEDr29g6FGbxAZsnOuwoiV9%2FQbILj5Cw%2F3aiorO2AjB%2FROGUxFvlHBogNIIqTmk9L%2B5hrMCZr2Sd4GmqTDzoBeCmOzhDNrmwBwvQVH7oD9G3o5sGEDePZ2MKi3JEmDl1xRWsfENpWdsbB2HLjYlnoajpM8dHZISRTWAEComhzHEAhC8cE0oSX0JHvnNPX8XE5vLjWVtZa12kyzJlxhuqVc5iPnL1LQmxtN1vP51LDUXPyvpqIRAmb8SpFmPztjj9MbJFtePqCSAAGvSvzbi1NniVXEZW4XT%2F0lkK5M25x1aXAtd9Um9ehlY7kyTqA7Fb4VUEVz%2FmO1mf2vPanxlPVBQwWz84TMMOKfi8oGOqUBQvPjCNMZ587I%2FpW04twzXXPXBZSS9cV%2FT7QvlprELGMOh9mryAZrI6yocldMetPNGnSK%2ByF7tpFoAoBNE130nxfomboLGSyZ9lVgf%2F8enqnPFvKz1eRhWuLnI38E4wggX9cOFzJEAwL7O5viecG3aEtsib3O5JRiKxowVRiqJBIeghDXMwEQxjFPm30S7MYaUuejJ4M%2B6NkCEsNF%2BjA8mq5fzzG7&X-Amz-Signature=6a5d5a49e49a56527c991f97f0f369577ca909f48a79ceca8a648effb65d92a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

