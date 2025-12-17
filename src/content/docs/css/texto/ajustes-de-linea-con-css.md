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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUYJ6VCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF4P5NxHrc5uBDvZOWEWBdyRjMyq0DVQTOPHv3QmzPiwIhALkzNvMXZHABl5%2BXJw8V7tBO6VJZorQepuPAO%2FfdoIE3KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzT8K%2Bqn%2Bquz0yPRkq3APuiF%2Fl2sjXJOyxNgG2AE7SyUke6u%2BAmo0lcE9VLhbZCmXq5ii05OOllV7zfo7eGKlzFKSRea07aVGkKdVfnqyWjsKlIFEJfsougINV3E%2ByYV3RQGQU5y6qNffSW9pnbhl28vtSxkq3OaapRapD62ea6O1eOapdJmm6tZmkRATe9%2FpfSHiOpeUvOFlCbJXdwmzjqnfhHj8FwfQdCWNtm5a8rN45itbL28WfI8yitIJKI%2FJFR3OyK1q6uScJBAfcaNU8S%2FV%2Fs%2F7K9S9U5aFz%2FCkzYiqUXwMlty0cMRVPd9BOACjuwXsyDUQTcfhXa9rO9bDPyE3Oug%2FUjmx1sAq62N2FikzuDCQKbJ7zcWThHHYYzV2DUC5Byjo4qY6tOV7RfrB0BGECoY%2FhOeYrikKwmDlVENtuuxpZQIMu8azvOmyLbGHB%2FSthd3%2BfAWaUZoxaT%2B7nYBrOx3URPGhm2jO%2BPCM%2BjcCFhQg40h%2FoMRhxNWSIQ4%2BMhVUqHPdfz29AVoBtiGPk5LO1cVKhGF1PzN7TGc64CLSEvrIadpGBl5pzpIVXBdAWMUGlYy9ZIBs4KWverRNypXlGdaleCoinTjWtsiHVtroaBF5Q8y%2B%2BZXwk3rjSZ2KeU6nI%2F66xVmbFwjDQgIvKBjqkAQtaCcZXfhiHim6NyOxymmlMmeXczriRSennU9vl0j%2BkKZBm5XGgzfwVY931M1lrPwor8lfON4rhLH5ZrSm9CVL3bWuvsNSj5OQc9nuXXEoEBS97NZPYDThk%2FFu8W7CY7%2Bxtri92Chgbp4VF5XluDJvSS%2FKZ%2FtpOVxurj4%2Bf27Y1k7RXF0S46pJ56QtBNOD00Wv2hBVowu2pGOvRsMt1sp865IbI&X-Amz-Signature=bfb06f8bd6308053e997b089dfdb6be31e565e7a9773c60871c834b210b5102f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUYJ6VCA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF4P5NxHrc5uBDvZOWEWBdyRjMyq0DVQTOPHv3QmzPiwIhALkzNvMXZHABl5%2BXJw8V7tBO6VJZorQepuPAO%2FfdoIE3KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzT8K%2Bqn%2Bquz0yPRkq3APuiF%2Fl2sjXJOyxNgG2AE7SyUke6u%2BAmo0lcE9VLhbZCmXq5ii05OOllV7zfo7eGKlzFKSRea07aVGkKdVfnqyWjsKlIFEJfsougINV3E%2ByYV3RQGQU5y6qNffSW9pnbhl28vtSxkq3OaapRapD62ea6O1eOapdJmm6tZmkRATe9%2FpfSHiOpeUvOFlCbJXdwmzjqnfhHj8FwfQdCWNtm5a8rN45itbL28WfI8yitIJKI%2FJFR3OyK1q6uScJBAfcaNU8S%2FV%2Fs%2F7K9S9U5aFz%2FCkzYiqUXwMlty0cMRVPd9BOACjuwXsyDUQTcfhXa9rO9bDPyE3Oug%2FUjmx1sAq62N2FikzuDCQKbJ7zcWThHHYYzV2DUC5Byjo4qY6tOV7RfrB0BGECoY%2FhOeYrikKwmDlVENtuuxpZQIMu8azvOmyLbGHB%2FSthd3%2BfAWaUZoxaT%2B7nYBrOx3URPGhm2jO%2BPCM%2BjcCFhQg40h%2FoMRhxNWSIQ4%2BMhVUqHPdfz29AVoBtiGPk5LO1cVKhGF1PzN7TGc64CLSEvrIadpGBl5pzpIVXBdAWMUGlYy9ZIBs4KWverRNypXlGdaleCoinTjWtsiHVtroaBF5Q8y%2B%2BZXwk3rjSZ2KeU6nI%2F66xVmbFwjDQgIvKBjqkAQtaCcZXfhiHim6NyOxymmlMmeXczriRSennU9vl0j%2BkKZBm5XGgzfwVY931M1lrPwor8lfON4rhLH5ZrSm9CVL3bWuvsNSj5OQc9nuXXEoEBS97NZPYDThk%2FFu8W7CY7%2Bxtri92Chgbp4VF5XluDJvSS%2FKZ%2FtpOVxurj4%2Bf27Y1k7RXF0S46pJ56QtBNOD00Wv2hBVowu2pGOvRsMt1sp865IbI&X-Amz-Signature=f81a8055d2a83ff8d9ae718a1b1259cec6552de0447912236f2f3c8d5c74c7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

