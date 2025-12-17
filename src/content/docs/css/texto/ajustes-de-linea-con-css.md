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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NF5K5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQWO56f3oIQzSZ%2BfQsdJ97LSH7TrfW9VuFyrZtDctZWAiANdt7WgfKPRrkFlNS8BHX9Zz8BZBnXU%2FY%2BkD9SI4sA2Cr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM29m1vBuxkse8wAuVKtwDGHooReNmcDRYbQdFkbUejtE4SIsMzFb3tMhQSBbgFgWg7pqMsF1kvjbjDpmypOWZhVFTrlqbEEvG3iFVL9Zvsfiv7eu4SwrEvAx%2FDvS1sYqFkTWhzfB%2BgdQjnrustYHJuL6zmmxhr8sKsnPmFTK57nZSpcSMCr6Ms6hZVjr4tg7DJB65SmUx8AGqSRQQj5Mi0LRh8HuiOtOK6ZRnQ6cET3SjdAPOophbT2Qx2jMz2x3fLNnO%2FRCrB%2FVrF2LUopsYEc3FUzFQNX97IN%2FH5dW%2F%2FrI2tUKmWyTVQOzNeA5DgH8Auk%2BZearqIZgaAyVCL2NQphYOxc3AzSFt3bTQQ5vXyppspjrUFQP0CGrAcvcjPdloZOWSH6xXFLmD4vzdBC3AQQoJbMryt4QFopCsYLZaFOkYAqFYVNMLlwejWW0lDitDZvAtW0IBW%2BtrfgELVoe9uRY1Qd%2Bp8IkYfjNRfTYjwlZNaaMEIw8WIVt78crtf6AGMAgK%2BFhMcw67laptampcQV3Q%2FEcbFLz5bbobLMr8U7fTwOMDKXS7GKLHRd%2FU%2Be4BW4zzczAbnTBbayjpVZmNrQVP20BL1uSnb%2BDjnXREBQSf9Kcl7%2BohTTOMmVyfPXunqCnLVL4fDSvq6bMw78WKygY6pgHvspwR6%2BuRQ02tHLs7Vi2ZMCC0DFZkY%2FwkRkNAOt7U3PRRANJl%2F9GJOsPqG%2BomxSQvD3G%2FRORiUSIGziagI6TkZwDyWYaQKYdzPSzJ50mFSD5g25RcrcGyg5UPQ7KritzkUHATSBQXTi5IugY8m%2FVdIfOd2tfqtfz4j3PIsHKCDo7fiSUQXCQm9AWYEoMN1z27afjQuVHr9YjOvLyC7sRqtGmPqS5q&X-Amz-Signature=2cf4d79047b6457019ebea96b3c243787a46b07d73b9dacc5925fecee45e09c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667NF5K5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQWO56f3oIQzSZ%2BfQsdJ97LSH7TrfW9VuFyrZtDctZWAiANdt7WgfKPRrkFlNS8BHX9Zz8BZBnXU%2FY%2BkD9SI4sA2Cr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM29m1vBuxkse8wAuVKtwDGHooReNmcDRYbQdFkbUejtE4SIsMzFb3tMhQSBbgFgWg7pqMsF1kvjbjDpmypOWZhVFTrlqbEEvG3iFVL9Zvsfiv7eu4SwrEvAx%2FDvS1sYqFkTWhzfB%2BgdQjnrustYHJuL6zmmxhr8sKsnPmFTK57nZSpcSMCr6Ms6hZVjr4tg7DJB65SmUx8AGqSRQQj5Mi0LRh8HuiOtOK6ZRnQ6cET3SjdAPOophbT2Qx2jMz2x3fLNnO%2FRCrB%2FVrF2LUopsYEc3FUzFQNX97IN%2FH5dW%2F%2FrI2tUKmWyTVQOzNeA5DgH8Auk%2BZearqIZgaAyVCL2NQphYOxc3AzSFt3bTQQ5vXyppspjrUFQP0CGrAcvcjPdloZOWSH6xXFLmD4vzdBC3AQQoJbMryt4QFopCsYLZaFOkYAqFYVNMLlwejWW0lDitDZvAtW0IBW%2BtrfgELVoe9uRY1Qd%2Bp8IkYfjNRfTYjwlZNaaMEIw8WIVt78crtf6AGMAgK%2BFhMcw67laptampcQV3Q%2FEcbFLz5bbobLMr8U7fTwOMDKXS7GKLHRd%2FU%2Be4BW4zzczAbnTBbayjpVZmNrQVP20BL1uSnb%2BDjnXREBQSf9Kcl7%2BohTTOMmVyfPXunqCnLVL4fDSvq6bMw78WKygY6pgHvspwR6%2BuRQ02tHLs7Vi2ZMCC0DFZkY%2FwkRkNAOt7U3PRRANJl%2F9GJOsPqG%2BomxSQvD3G%2FRORiUSIGziagI6TkZwDyWYaQKYdzPSzJ50mFSD5g25RcrcGyg5UPQ7KritzkUHATSBQXTi5IugY8m%2FVdIfOd2tfqtfz4j3PIsHKCDo7fiSUQXCQm9AWYEoMN1z27afjQuVHr9YjOvLyC7sRqtGmPqS5q&X-Amz-Signature=fd21b3900d2051262026a80d61be235b6d9127e3104771b2ee9c452c8e6bfd01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

